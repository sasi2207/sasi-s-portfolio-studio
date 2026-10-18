// Admin API Service - Database Only, No Static Mock Data
const API_URL = import.meta.env.VITE_API_BASE_URL 
  ? `${import.meta.env.VITE_API_BASE_URL}/admin_api.php`
  : "https://techsasi.com/Rakshan/api/admin_api.php";

export const adminApi = {
  // --- Admin Authentication (Database only) ---
  login: async (data: { username: string; password: string }) => {
    try {
      const res = await fetch(`${API_URL}?action=login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        return json;
      }

      return {
        success: false,
        message: json?.message || "Invalid database admin credentials.",
      };
    } catch (e: any) {
      console.error("Admin database authentication error:", e);
      return {
        success: false,
        message: "Failed to connect to admin database. Please check server status.",
      };
    }
  },

  // --- Course Enquiries (Database only) ---
  getEnquiries: async () => {
    try {
      const res = await fetch(`${API_URL}?action=get_enquiries`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        const json = await res.json().catch(() => null);
        if (json && Array.isArray(json.data)) {
          return { success: true, data: json.data };
        } else if (Array.isArray(json)) {
          return { success: true, data: json };
        }
      }
      return { success: true, data: [] };
    } catch (e: any) {
      console.error("Error fetching course enquiries from database:", e);
      return { success: false, data: [], message: "Database query failed for course enquiries." };
    }
  },

  // --- Service Enquiries (Database only) ---
  getServiceEnquiries: async () => {
    try {
      const res = await fetch(`${API_URL}?action=get_service_enquiries`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        const json = await res.json().catch(() => null);
        if (json && Array.isArray(json.data)) {
          return { success: true, data: json.data };
        } else if (Array.isArray(json)) {
          return { success: true, data: json };
        }
      }
      return { success: true, data: [] };
    } catch (e: any) {
      console.error("Error fetching service enquiries from database:", e);
      return { success: false, data: [], message: "Database query failed for service enquiries." };
    }
  },

  // --- Update Enquiry Status (CRUD: Update) ---
  updateEnquiryStatus: async (
    type: "courses" | "services",
    id: number,
    status: "Accepted" | "Rejected"
  ) => {
    try {
      const res = await fetch(`${API_URL}?action=update_enquiry_status`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ type, id, status }),
      });

      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        return json;
      }
      return {
        success: false,
        message: json?.message || "Failed to update enquiry status in database.",
      };
    } catch (e: any) {
      console.error("Error updating enquiry status in database:", e);
      return {
        success: false,
        message: "Failed to connect to database for status update.",
      };
    }
  },

  // --- Delete Enquiry (CRUD: Delete) ---
  deleteEnquiry: async (type: "courses" | "services", id: number) => {
    try {
      const res = await fetch(`${API_URL}?action=delete_enquiry&type=${type}&id=${id}`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        return json;
      }
      return {
        success: false,
        message: json?.message || "Failed to delete enquiry from database.",
      };
    } catch (e: any) {
      console.error("Error deleting enquiry from database:", e);
      return {
        success: false,
        message: "Database connection failed during delete operation.",
      };
    }
  },

  // --- Courses Management (CRUD: Read) ---
  getCourses: async () => {
    try {
      const res = await fetch(`${API_URL}?action=get_courses`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        const json = await res.json().catch(() => null);
        if (json && Array.isArray(json.data)) {
          return { success: true, data: json.data };
        } else if (Array.isArray(json)) {
          return { success: true, data: json };
        }
      }
      return { success: true, data: [] };
    } catch (e: any) {
      console.error("Error fetching courses from database:", e);
      return { success: false, data: [], message: "Database query failed for courses." };
    }
  },

  // --- Add Course (CRUD: Create) ---
  addCourse: async (name: string) => {
    try {
      const res = await fetch(`${API_URL}?action=add_course`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ course_name: name }),
      });

      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        return json;
      }
      throw new Error(json?.message || "Database rejected adding course.");
    } catch (e: any) {
      console.error("Error adding course in database:", e);
      throw e;
    }
  },

  // --- Delete Course (CRUD: Delete) ---
  deleteCourse: async (id: number) => {
    try {
      const res = await fetch(`${API_URL}?action=delete_course&id=${id}`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        return json;
      }
      throw new Error(json?.message || "Failed to delete course from database.");
    } catch (e: any) {
      console.error("Error deleting course from database:", e);
      throw e;
    }
  },
};
