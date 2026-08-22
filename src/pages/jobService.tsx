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

// const API_BASE_URL = "http://localhost:8000/api";  //

const API_BASE_URL = "https://techsasi-crm-b.onrender.com/api";
// ==========================================
// PART 1: JOB POSTINGS (Department Filter Support)
// ==========================================

export const fetchJobsFromAPI = async (department?: string): Promise<Job[]> => {
  try {
    let url = `${API_BASE_URL}/jobs`;
    if (department) {
      url += `?department=${encodeURIComponent(department)}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Failed to fetch jobs");
    const data = await response.json();
    return Array.isArray(data) ? data : (data.data || []);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const fetchJobByIdAPI = async (id: string | number, department?: string): Promise<Job> => {
  try {
    let url = `${API_BASE_URL}/jobs/${id}`;
    if (department) {
      url += `?department=${encodeURIComponent(department)}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Invalid Job ID");
    return data.data || data;
  } catch (error) {
    console.error(`Error fetching job ${id}:`, error);
    throw error;
  }
};

export const createJobAPI = async (jobData: Job): Promise<Job> => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });

    if (!response.ok) throw new Error("Failed to create job posting");
    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};

export const updateJobAPI = async (id: string | number, jobData: Job, department?: string): Promise<Job> => {
  try {
    let url = `${API_BASE_URL}/jobs/${id}`;
    if (department) {
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
    console.error(`Error updating job ${id}:`, error);
    throw error;
  }
};

export const deleteJobAPI = async (id: string | number, department?: string): Promise<boolean> => {
  try {
    let url = `${API_BASE_URL}/jobs/${id}`;
    if (department) {
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
    console.error(`Error deleting job ${id}:`, error);
    throw error;
  }
};


// ==========================================
// PART 2: JOB APPLICATIONS (Trailing slashes removed to prevent 307 Redirects)
// ==========================================

export const submitJobApplicationAPI = async (formData: FormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/applications`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (!response.ok) {
      // FastAPI validation error detail oru object/array-a irukkalam, athai string-a convert panrom
      const errorMsg = typeof result.detail === 'object' 
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
    console.error("Error fetching applications:", error);
    throw error;
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