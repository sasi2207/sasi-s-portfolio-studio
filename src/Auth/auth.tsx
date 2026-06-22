// const API = "http://localhost/Rakshan/api";
const API = "https://www.techsasi.com/Rakshan/api";


export const register = async (username: string, password: string) => {
  const res = await fetch(`${API}/register.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Registration failed");
  }

  return data;
};
 



export const login = async (username: string, password: string) => {
  const res = await fetch(`${API}/login.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
};
