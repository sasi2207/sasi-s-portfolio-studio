const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://techsasi.com/Rakshan/api";

export interface EnquiryPayload {
  fullName: string;
  mobile: string;
  email: string;
  course: string;
  message: string;
}

export async function submitCourseEnquiry(data: EnquiryPayload) {
  const response = await fetch(`${API_BASE_URL}/enquiry.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok) throw new Error(result.message || "Failed to submit enquiry.");
  return result;
}

/**
 * Global function to fetch all course enquiries from PHP backend
 */
export async function getCourseEnquiries() {
  const response = await fetch(`${API_BASE_URL}/get_enquiries.php`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });

  const result = await response.json();
  if (!response.ok) throw new Error(result.message || "Failed to fetch enquiries.");
  return result;
}