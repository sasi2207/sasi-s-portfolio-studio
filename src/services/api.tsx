// Services API - Database Only, No Static Mock Data
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://techsasi.com/Rakshan/api";

export interface EnquiryPayload {
  fullName: string;
  mobile: string;
  email: string;
  course: string;
  message: string;
}

/**
 * Submit Course Enquiry directly to the database
 */
export async function submitCourseEnquiry(data: EnquiryPayload) {
  try {
    const response = await fetch(`${API_BASE_URL}/enquiry.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result?.success) {
      return result;
    }

    return {
      success: false,
      message: result?.message || "Failed to record enquiry in database.",
    };
  } catch (err: any) {
    console.error("Database enquiry submission error:", err);
    return {
      success: false,
      message: "Database connection failed. Unable to submit enquiry.",
    };
  }
}

/**
 * Fetch all course enquiries directly from database
 */
export async function getCourseEnquiries() {
  try {
    const response = await fetch(`${API_BASE_URL}/get_enquiries.php`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json().catch(() => null);
      if (result?.success && Array.isArray(result.data)) {
        return result;
      } else if (Array.isArray(result)) {
        return { success: true, data: result };
      }
    }
    return { success: true, data: [] };
  } catch (err) {
    console.error("Database fetch error for enquiries:", err);
    return { success: false, data: [], message: "Database connection error." };
  }
}