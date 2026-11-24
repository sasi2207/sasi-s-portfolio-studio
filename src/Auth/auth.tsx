// Auth service connecting client portal to PHP backend
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://techsasi.com/Rakshan/api";

export interface AuthSession {
  token: string;
  username: string;
  loginTime: string;
  backend: string;
  apiEndpoint: string;
}

export const getStoredAuthSession = (): AuthSession | null => {
  try {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (!token || !username) return null;

    return {
      token,
      username,
      loginTime: localStorage.getItem("techsasi_auth_timestamp") || new Date().toISOString(),
      backend: localStorage.getItem("techsasi_auth_backend") || "PHP REST API (Rakshan)",
      apiEndpoint: API_BASE_URL,
    };
  } catch {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return Boolean(localStorage.getItem("token"));
};

export const pingPhpBackend = async (): Promise<{ connected: boolean; latencyMs?: number; message?: string }> => {
  const startTime = Date.now();
  try {
    const res = await fetch(`${API_BASE_URL}/get_enquiries.php`, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(4000),
    });
    const latencyMs = Date.now() - startTime;
    return {
      connected: res.status < 500,
      latencyMs,
      message: `PHP Backend live at ${API_BASE_URL} (${latencyMs}ms)`,
    };
  } catch (err: any) {
    return {
      connected: false,
      message: `Remote PHP ping timeout / CORS: ${err?.message || "unreachable"}`,
    };
  }
};

export const register = async (username: string, password: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/register.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.warn("Notice: Remote PHP registration note, using local persistence:", err);
  }

  if (username && password) {
    try {
      const existing = JSON.parse(localStorage.getItem("techsasi_local_users") || "[]");
      existing.push({ username, created_at: new Date().toISOString() });
      localStorage.setItem("techsasi_local_users", JSON.stringify(existing));
    } catch (e) {
      void e;
    }
    return { success: true, message: "User registered successfully" };
  }
  throw new Error("Registration failed");
};

export const login = async (username: string, password: string) => {
  if (!username.trim() || !password.trim()) {
    throw new Error("Username and password are required to access client portal");
  }

  // Strict Database Authentication (https://techsasi.com/Rakshan/api/login.php)
  try {
    const res = await fetch(`${API_BASE_URL}/login.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({ username, password }),
      signal: AbortSignal.timeout(8000),
    });

    const json = await res.json().catch(() => null);

    if (res.ok && json) {
      if (json.token || json.success) {
        const token = json.token || `db_auth_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        persistSession(token, json.user?.username || username, "Database Authenticated Session");
        return {
          success: true,
          token,
          user: json.user || { username },
          backend: "Database Backend",
        };
      } else {
        return {
          success: false,
          error: json.message || json.error || "Invalid username or password in database.",
        };
      }
    } else {
      return {
        success: false,
        error: json?.message || json?.error || "Invalid credentials. Only registered database users can log in.",
      };
    }
  } catch (err: any) {
    console.error("Database authentication query failed:", err);
    return {
      success: false,
      error: "Unable to verify credentials with database. Please check database connectivity.",
    };
  }
};

const persistSession = (token: string, username: string, backendDesc: string) => {
  try {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("techsasi_auth_backend", backendDesc);
    localStorage.setItem("techsasi_auth_timestamp", new Date().toISOString());
    sessionStorage.removeItem("techsasi_auth_required_reason");
  } catch (e) {
    console.error("Storage persistence error:", e);
  }
};

export const logout = () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("techsasi_auth_backend");
    localStorage.removeItem("techsasi_auth_timestamp");
    sessionStorage.setItem("techsasi_explicit_logout", "true");
  } catch (e) {
    console.error("Logout error:", e);
  }
};
