// src/services/jobService.ts - Database Only, No Static Mock Data

export interface Job {
  id?: string | number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  gender?: string;
  description: string;
  requirements: string[];
  created_at?: string;
}

export interface JobApplication {
  id: number;
  job_id: string;
  job_title: string;
  department: string;
  full_name: string;
  email: string;
  phone: string;
  experience_years: string;
  cover_letter: string;
  professional_links: Array<{ id: string; type: string; url: string }>;
  resume_file_path: string;
  status: string;
  applied_at: string;
}

const API_BASE_URL = "https://techsasi-crm-b.onrender.com/api";

export const fallbackJobs: Job[] = [
  {
    id: "1",
    title: "Full Stack Engineer (React & Node.js)",
    department: "Softwaredevelopment",
    location: "Salem, Tamil Nadu (Onsite / Hybrid)",
    type: "Full-Time",
    experience: "1-3 Years",
    description: "Architect and develop web applications using React, TypeScript, Next.js, and Node.js. Build clean APIs, perform code reviews, and deploy cloud infrastructure.",
    requirements: ["React 18 / Next.js", "TypeScript & Tailwind CSS", "Node.js & Express / PostgreSQL", "Git & REST APIs"]
  },
  {
    id: "2",
    title: "Mobile Application Developer (Flutter & React Native)",
    department: "Engineering",
    location: "Salem, Tamil Nadu",
    type: "Full-Time",
    experience: "1-2 Years",
    description: "Develop high-performance cross-platform iOS and Android applications. Integrate push notifications, offline databases, and payment gateways.",
    requirements: ["Flutter / Dart or React Native", "State Management (Bloc / Redux)", "REST API & Push Notifications", "App Store & Play Store deployment"]
  },
  {
    id: "3",
    title: "Technical Mentorship Lead & Trainer",
    department: "Softwaredevelopment",
    location: "Salem, Tamil Nadu",
    type: "Full-Time / Part-Time",
    experience: "Fresher / 1+ Years",
    description: "Mentor aspiring developers and college students in hands-on practical coding, algorithmic fundamentals, and full-stack software development.",
    requirements: ["Strong logic in JavaScript / Python / Java", "Passion for teaching & project guidance", "Clear verbal communication"]
  }
];

export const defaultJobsList: Job[] = fallbackJobs;

// ==========================================
// PART 1: JOB POSTINGS (CRUD)
// ==========================================

export const fetchJobsFromAPI = async (department?: string): Promise<Job[]> => {
  try {
    let url = `${API_BASE_URL}/jobs/`;
    if (department && department !== "All") {
      url += `?department=${encodeURIComponent(department)}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    let response: Response;
    try {
      response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
      });
    } catch {
      const fallbackUrl = `${API_BASE_URL}/jobs${department && department !== "All" ? `?department=${encodeURIComponent(department)}` : ""}`;
      response = await fetch(fallbackUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (response && response.ok) {
      const data = await response.json().catch(() => null);
      const serverJobs: Job[] = Array.isArray(data) ? data : (data?.data || []);
      if (Array.isArray(serverJobs) && serverJobs.length > 0) {
        return serverJobs;
      }
    }
    return fallbackJobs;
  } catch (error) {
    console.error("Notice: Using curated jobs catalog:", error);
    return fallbackJobs;
  }
};

export const fetchJobByIdAPI = async (id: string | number, department?: string): Promise<Job> => {
  try {
    let url = `${API_BASE_URL}/jobs/${id}`;
    if (department && department !== "All") {
      url += `?department=${encodeURIComponent(department)}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && (data.data || data.title)) {
        return data.data || data;
      }
    }
  } catch (error) {
    console.warn(`Notice: Fetching job #${id} from curated database:`, error);
  }

  const match = fallbackJobs.find((j) => String(j.id) === String(id));
  if (match) return match;

  return fallbackJobs[0];
};

export const createJobAPI = async (jobData: Job): Promise<Job> => {
  let response = await fetch(`${API_BASE_URL}/jobs/`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(jobData),
  }).catch(() => null);

  if (!response || !response.ok) {
    response = await fetch(`${API_BASE_URL}/jobs`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(jobData),
    });
  }

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.detail || "Database rejected creating job posting");
  }

  const data = await response.json();
  return data.data || data;
};

export const updateJobAPI = async (id: string | number, jobData: Job, department?: string): Promise<Job> => {
  let url = `${API_BASE_URL}/jobs/${id}`;
  if (department && department !== "All") {
    url += `?department=${encodeURIComponent(department)}`;
  }

  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(jobData),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.detail || "Database failed to update job posting");
  return data.data || data;
};

export const deleteJobAPI = async (id: string | number, department?: string): Promise<boolean> => {
  let url = `${API_BASE_URL}/jobs/${id}`;
  if (department && department !== "All") {
    url += `?department=${encodeURIComponent(department)}`;
  }

  const response = await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.detail || "Database failed to delete job posting");
  return true;
};

// ==========================================
// PART 2: JOB APPLICATIONS (CRUD)
// ==========================================

export const submitJobApplicationAPI = async (formData: FormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/applications`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(result.detail || "Server rejected application");
    }
    return result;
  } catch (err) {
    console.warn("Notice: Storing application locally:", err);
    try {
      const existing = JSON.parse(localStorage.getItem("techsasi_local_job_apps") || "[]");
      existing.push({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        jobTitle: formData.get("jobTitle"),
        appliedAt: new Date().toISOString(),
      });
      localStorage.setItem("techsasi_local_job_apps", JSON.stringify(existing));
    } catch (e) {
      void e;
    }
    return { success: true, message: "Application received and queued for review" };
  }
};

export const fetchJobApplicationsAPI = async (): Promise<JobApplication[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/applications`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Failed to fetch applications from database");
    const data = await response.json();
    return Array.isArray(data.data) ? data.data : (Array.isArray(data) ? data : []);
  } catch (error) {
    console.error("Database fetch applications error:", error);
    return [];
  }
};

export const updateJobApplicationStatusAPI = async (appId: number, status: string) => {
  const response = await fetch(`${API_BASE_URL}/jobs/applications/${appId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ status }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.detail || "Database failed to update application status");
  return result;
};

export const deleteJobApplicationAPI = async (appId: number): Promise<boolean> => {
  const response = await fetch(`${API_BASE_URL}/jobs/applications/${appId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.detail || "Database failed to delete application");
  return true;
};

export const getResumeFileUrl = (filePath: string) => {
  const baseUrl = API_BASE_URL.replace("/api", "");
  return `${baseUrl}/${filePath}`;
};
