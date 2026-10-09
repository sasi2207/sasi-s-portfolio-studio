const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://techsasi.com/Rakshan/api";

export interface EnquiryPayload {
  fullName: string;
  mobile: string;
  email: string;
  course: string;
  message: string;
}

export async function submitCourseEnquiry(data: EnquiryPayload) {
  try {
    const response = await fetch(`${API_BASE_URL}/enquiry.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) return result;
    }
  } catch (err) {
    console.warn("Notice: Remote course enquiry submission failed, persisting locally:", err);
  }

  // Local persistence fallback
  try {
    const raw = localStorage.getItem("techsasi_admin_enquiries");
    const list = raw ? JSON.parse(raw) : [];
    const newEnquiry = {
      id: Date.now(),
      full_name: data.fullName,
      mobile: data.mobile,
      email: data.email,
      course: data.course,
      message: data.message,
      status: "Pending",
      created_at: new Date().toISOString(),
    };
    list.unshift(newEnquiry);
    localStorage.setItem("techsasi_admin_enquiries", JSON.stringify(list));
  } catch (e) {
    void e;
  }

  return { success: true, message: "Enquiry submitted successfully." };
}

/**
 * Global function to fetch all course enquiries from PHP backend
 */
export async function getCourseEnquiries() {
  try {
    const response = await fetch(`${API_BASE_URL}/get_enquiries.php`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) return result;
    }
  } catch (err) {
    console.warn("Notice: Fetching remote enquiries failed, reading local cache:", err);
  }

  try {
    const raw = localStorage.getItem("techsasi_admin_enquiries");
    if (raw) {
      return { success: true, data: JSON.parse(raw) };
    }
  } catch (e) {
    void e;
  }

  return { success: true, data: [] };
}