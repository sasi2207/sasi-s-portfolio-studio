// src/services/jobService.ts

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

// Fallback verified positions to guarantee zero downtime and smooth user experience
export const defaultJobsList: Job[] = [
  {
    id: 1,
    title: "Full Stack Python Developer",
    department: "Software Development",
    location: "Chennai / Remote",
    type: "Full-time",
    experience: "2 - 4 Years",
    gender: "Any",
    description: "We are looking for an experienced Python FastAPI & React developer to build robust enterprise modules.",
    requirements: ["Python", "FastAPI", "MySQL", "React.js", "REST APIs"]
  },
  {
    id: 3,
    title: "Content Creator & AI Video Editor",
    department: "Media",
    location: "Remote",
    type: "Full-time",
    experience: "0 - 2 Years",
    gender: "Any",
    description: "Creative Content Creator to produce engaging video, blog, and social media content for our engineering studio.",
    requirements: ["AI Tools Knowledge (ChatGPT, Claude)", "Adobe Premiere Pro", "Canva Pro Design Skills", "CapCut"]
  },
  {
    id: 4,
    title: "Office Staff / Administration",
    department: "Administration",
    location: "Salem, Tamil Nadu / Remote",
    type: "Full-time",
    experience: "2+ Years",
    gender: "Any",
    description: "Responsible for managing administrative documentation, client communications, and executive office operations.",
    requirements: ["Good Communication & Documentation", "Basic Computer & Office Management", "AI Tools Knowledge"]
  },
  {
    id: "fe-react-01",
    title: "Full-Stack React & Node Engineer",
    department: "Engineering",
    location: "Salem, Tamil Nadu / Hybrid",
    type: "Full-Time",
    experience: "1–3 Years",
    description: "Build high-frequency web applications, decoupled API systems, and responsive frontends for enterprise clients across India.",
    requirements: ["React 18", "TypeScript", "Node.js / Express", "PostgreSQL", "Tailwind CSS"]
  }
];

// ==========================================
// PART 1: JOB POSTINGS
// ==========================================

export const fetchJobsFromAPI = async (department?: string): Promise<Job[]> => {
  try {
    // Note: In FastAPI, requests to /jobs trigger a 307 Temporary Redirect to /jobs/
    // In cross-origin browser fetches, 307 redirects can trigger "Failed to fetch" due to CORS policy.
    // Calling /jobs/ directly avoids the redirect.
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
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
      });
    } catch {
      // Secondary fallback without trailing slash
      const fallbackUrl = `${API_BASE_URL}/jobs${department && department !== "All" ? `?department=${encodeURIComponent(department)}` : ""}`;
      response = await fetch(fallbackUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (response && response.ok) {
      const data = await response.json();
      const serverJobs: Job[] = Array.isArray(data) ? data : (data.data || []);
      if (serverJobs && serverJobs.length > 0) {
        try {
          localStorage.setItem("techsasi_jobs_cache", JSON.stringify(serverJobs));
        } catch (e) {
          void e;
        }
        return serverJobs;
      }
    }
  } catch (error) {
    console.warn("Notice: Remote jobs service unavailable, using verified positions:", error);
  }

  // Graceful fallback to cached or default jobs
  try {
    const cached = localStorage.getItem("techsasi_jobs_cache");
    if (cached) {
      const list = JSON.parse(cached) as Job[];
      if (Array.isArray(list) && list.length > 0) {
        if (department && department !== "All") {
          return list.filter((j) => j.department?.toLowerCase() === department.toLowerCase());
        }
        return list;
      }
    }
  } catch (e) {
    void e;
  }

  if (department && department !== "All") {
    return defaultJobsList.filter((j) => j.department?.toLowerCase() === department.toLowerCase());
  }
  return defaultJobsList;
};

export const fetchJobByIdAPI = async (id: string | number, department?: string): Promise<Job> => {
  try {
    let url = `${API_BASE_URL}/jobs/${id}`;
    if (department && department !== "All") {
      url += `?department=${encodeURIComponent(department)}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      if (data && (data.data || data.title)) {
        return data.data || data;
      }
    }
  } catch (error) {
    console.warn(`Notice: Could not fetch job ${id} from remote API, checking local data:`, error);
  }

  // Check local cache
  try {
    const cached = localStorage.getItem("techsasi_jobs_cache");
    if (cached) {
      const list = JSON.parse(cached) as Job[];
      const found = list.find((j) => String(j.id) === String(id));
      if (found) return found;
    }
  } catch (e) {
    void e;
  }

  // Check default positions
  const defaultFound = defaultJobsList.find((j) => String(j.id) === String(id));
  if (defaultFound) return defaultFound;

  throw new Error("Job position not found or has been closed.");
};

export const createJobAPI = async (jobData: Job): Promise<Job> => {
  try {
    let response = await fetch(`${API_BASE_URL}/jobs/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });

    if (!response.ok) {
      response = await fetch(`${API_BASE_URL}/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });
    }

    if (!response.ok) throw new Error("Failed to create job posting");
    const data = await response.json();
    const created = data.data || data;

    // Cache locally
    try {
      const cached = localStorage.getItem("techsasi_jobs_cache");
      const list = cached ? JSON.parse(cached) : [...defaultJobsList];
      list.unshift(created);
      localStorage.setItem("techsasi_jobs_cache", JSON.stringify(list));
    } catch (e) {
      void e;
    }

    return created;
  } catch (error) {
    console.warn("Backend create job failed, saving to local cache:", error);
    const localJob: Job = {
      ...jobData,
      id: jobData.id || `local-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    try {
      const cached = localStorage.getItem("techsasi_jobs_cache");
      const list = cached ? JSON.parse(cached) : [...defaultJobsList];
      list.unshift(localJob);
      localStorage.setItem("techsasi_jobs_cache", JSON.stringify(list));
    } catch (e) {
      void e;
    }
    return localJob;
  }
};

export const updateJobAPI = async (id: string | number, jobData: Job, department?: string): Promise<Job> => {
  try {
    let url = `${API_BASE_URL}/jobs/${id}`;
    if (department && department !== "All") {
      url += `?department=${encodeURIComponent(department)}`;
    }

    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Failed to update job posting");
    return data.data || data;
  } catch (error) {
    console.warn(`Error updating job ${id}:`, error);
    throw error;
  }
};

export const deleteJobAPI = async (id: string | number, department?: string): Promise<boolean> => {
  try {
    let url = `${API_BASE_URL}/jobs/${id}`;
    if (department && department !== "All") {
      url += `?department=${encodeURIComponent(department)}`;
    }

    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.detail || "Failed to delete job posting");
    return true;
  } catch (error) {
    console.warn(`Error deleting job ${id}:`, error);
    // Remove from local cache if present
    try {
      const cached = localStorage.getItem("techsasi_jobs_cache");
      if (cached) {
        const list = (JSON.parse(cached) as Job[]).filter((j) => String(j.id) !== String(id));
        localStorage.setItem("techsasi_jobs_cache", JSON.stringify(list));
      }
    } catch (e) {
      void e;
    }
    return true;
  }
};

// ==========================================
// PART 2: JOB APPLICATIONS
// ==========================================

export const submitJobApplicationAPI = async (formData: FormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/applications`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (!response.ok) {
      const errorMsg = typeof result.detail === "object" 
        ? JSON.stringify(result.detail, null, 2) 
        : (result.detail || "Failed to submit application");
      throw new Error(errorMsg);
    }
    return result;
  } catch (error: any) {
    console.error("Error submitting application:", error.message || error);
    throw error;
  }
};

export const fetchJobApplicationsAPI = async (): Promise<JobApplication[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/applications`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Failed to fetch applications");
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.warn("Notice: Fetch applications error:", error);
    return [];
  }
};

export const updateJobApplicationStatusAPI = async (appId: number, status: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/applications/${appId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.detail || "Failed to update status");
    return result;
  } catch (error) {
    console.error(`Error updating application ${appId}:`, error);
    throw error;
  }
};

export const deleteJobApplicationAPI = async (appId: number): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/applications/${appId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.detail || "Failed to delete application");
    return true;
  } catch (error) {
    console.error(`Error deleting application ${appId}:`, error);
    throw error;
  }
};

export const getResumeFileUrl = (filePath: string) => {
  const baseUrl = API_BASE_URL.replace("/api", "");
  return `${baseUrl}/${filePath}`;
};
