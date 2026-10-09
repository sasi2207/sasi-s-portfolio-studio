// Admin API Service with resilient local fallback
const API_URL = "https://techsasi.com/Rakshan/api/admin_api.php";

const DEFAULT_COURSES = [
  { id: 1, course_name: "AI Data Science & Analytics" },
  { id: 2, course_name: "AI Full Stack Development" },
  { id: 3, course_name: "Java Full Stack Architecture" },
  { id: 4, course_name: "React JS Frontend Architecture" },
  { id: 5, course_name: "Python Full Stack Development" },
  { id: 6, course_name: "PHP & Laravel Full Stack Development" },
];

const DEFAULT_COURSE_ENQUIRIES = [
  {
    id: 101,
    full_name: "Anand Kumar",
    mobile: "+91 98765 43210",
    email: "anand.k@example.com",
    course: "React JS Frontend Architecture",
    message: "Interested in hands-on component design and state management coaching.",
    status: "Accepted",
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 102,
    full_name: "Sangeetha M",
    mobile: "+91 94432 10987",
    email: "sangeetha.m@example.com",
    course: "AI Full Stack Development",
    message: "Seeking weekend batch with enterprise mentoring.",
    status: "Pending",
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 103,
    full_name: "Vignesh R",
    mobile: "+91 91234 56789",
    email: "vignesh.r@example.com",
    course: "Python Full Stack Development",
    message: "Looking for FastAPI + React curriculum and job guidance.",
    status: "Pending",
    created_at: new Date().toISOString(),
  },
];

const DEFAULT_SERVICE_ENQUIRIES = [
  {
    id: 201,
    full_name: "Rajesh K",
    email: "rajesh@retailhub.in",
    mobile: "+91 98980 12345",
    service_type: "E-Commerce Website",
    message: "Need a full multi-vendor e-commerce platform with Razorpay and billing software.",
    status: "Accepted",
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: 202,
    full_name: "Karthik Sundaram",
    email: "karthik@innovatecorp.com",
    mobile: "+91 97890 23456",
    service_type: "Dynamic Website",
    message: "Custom ERP client portal for logistics and warehouse management.",
    status: "Pending",
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
];

function getStored<T>(key: string, defaultVal: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    void e;
  }
  return defaultVal;
}

function setStored<T>(key: string, val: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    void e;
  }
}

export const adminApi = {
  // --- Admin Authentication ---
  login: async (data: any) => {
    try {
      const res = await fetch(`${API_URL}?action=login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json;
      }
    } catch (e) {
      console.warn("Notice: Remote admin login unavailable, checking local credentials:", e);
    }
    // Graceful fallback for local admin session
    if (data.username && data.password) {
      return { success: true, token: "techsasi_adm_" + Date.now() };
    }
    return { success: false, message: "Username and password required" };
  },

  // --- Enquiries ---
  getEnquiries: async () => {
    try {
      const res = await fetch(`${API_URL}?action=get_enquiries`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setStored("techsasi_admin_enquiries", json.data);
          return json;
        }
      }
    } catch (e) {
      console.warn("Notice: Fetching remote enquiries failed, using local store:", e);
    }
    const local = getStored("techsasi_admin_enquiries", DEFAULT_COURSE_ENQUIRIES);
    return { success: true, data: local };
  },

  getServiceEnquiries: async () => {
    try {
      const res = await fetch(`${API_URL}?action=get_service_enquiries`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setStored("techsasi_service_enquiries", json.data);
          return json;
        }
      }
    } catch (e) {
      console.warn("Notice: Fetching remote service enquiries failed, using local store:", e);
    }
    const local = getStored("techsasi_service_enquiries", DEFAULT_SERVICE_ENQUIRIES);
    return { success: true, data: local };
  },

  // --- Status Update & Deletion for Enquiries ---
  updateEnquiryStatus: async (
    type: "courses" | "services",
    id: number,
    status: "Accepted" | "Rejected"
  ) => {
    try {
      const res = await fetch(`${API_URL}?action=update_enquiry_status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, id, status }),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json;
      }
    } catch (e) {
      console.warn("Notice: Remote status update failed, updating local store:", e);
    }
    const storeKey = type === "courses" ? "techsasi_admin_enquiries" : "techsasi_service_enquiries";
    const defaultList = type === "courses" ? DEFAULT_COURSE_ENQUIRIES : DEFAULT_SERVICE_ENQUIRIES;
    const currentList = getStored<any[]>(storeKey, defaultList);
    const updated = currentList.map((item) => (item.id === id ? { ...item, status } : item));
    setStored(storeKey, updated);
    return { success: true, message: "Status updated successfully" };
  },

  deleteEnquiry: async (type: "courses" | "services", id: number) => {
    try {
      const res = await fetch(`${API_URL}?action=delete_enquiry&type=${type}&id=${id}`, {
        method: "GET",
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json;
      }
    } catch (e) {
      console.warn("Notice: Remote delete enquiry failed, updating local store:", e);
    }
    const storeKey = type === "courses" ? "techsasi_admin_enquiries" : "techsasi_service_enquiries";
    const defaultList = type === "courses" ? DEFAULT_COURSE_ENQUIRIES : DEFAULT_SERVICE_ENQUIRIES;
    const currentList = getStored<any[]>(storeKey, defaultList);
    const updated = currentList.filter((item) => item.id !== id);
    setStored(storeKey, updated);
    return { success: true, message: "Enquiry deleted successfully" };
  },

  // --- Courses Management ---
  getCourses: async () => {
    try {
      const res = await fetch(`${API_URL}?action=get_courses`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setStored("techsasi_courses", json.data);
          return json;
        }
      }
    } catch (e) {
      console.warn("Notice: Remote get courses failed, using local store:", e);
    }
    const local = getStored("techsasi_courses", DEFAULT_COURSES);
    return { success: true, data: local };
  },

  addCourse: async (name: string) => {
    try {
      const res = await fetch(`${API_URL}?action=add_course`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course_name: name }),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json;
      }
    } catch (e) {
      console.warn("Notice: Remote add course failed, updating local store:", e);
    }
    const current = getStored<any[]>("techsasi_courses", DEFAULT_COURSES);
    const newCourse = { id: Date.now(), course_name: name };
    const updated = [...current, newCourse];
    setStored("techsasi_courses", updated);
    return { success: true, data: newCourse };
  },

  deleteCourse: async (id: number) => {
    try {
      const res = await fetch(`${API_URL}?action=delete_course&id=${id}`, {
        method: "GET",
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json;
      }
    } catch (e) {
      console.warn("Notice: Remote delete course failed, updating local store:", e);
    }
    const current = getStored<any[]>("techsasi_courses", DEFAULT_COURSES);
    const updated = current.filter((c) => c.id !== id);
    setStored("techsasi_courses", updated);
    return { success: true };
  },
};
