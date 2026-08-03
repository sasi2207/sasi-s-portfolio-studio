// const API_URL = "http://localhost/Rakshan/api/admin_api.php"; // Modify path if needed
const API_URL = "https://techsasi.com/Rakshan/api/admin_api.php";
export const adminApi = {
  // --- Admin Authentication ---
  login: (data: any) => fetch(`${API_URL}?action=login`, { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) 
  }).then(res => res.json()),
  
  // --- Enquiries ---
  getEnquiries: () => fetch(`${API_URL}?action=get_enquiries`).then(res => res.json()),
  
  getServiceEnquiries: () => fetch(`${API_URL}?action=get_service_enquiries`).then(res => res.json()),
  
  // --- Status Update & Deletion for Enquiries ---
  updateEnquiryStatus: (type: "courses" | "services", id: number, status: "Accepted" | "Rejected") => 
    fetch(`${API_URL}?action=update_enquiry_status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, id, status }),
    }).then(res => res.json()),

  deleteEnquiry: (type: "courses" | "services", id: number) => 
    fetch(`${API_URL}?action=delete_enquiry&type=${type}&id=${id}`, { 
      method: 'GET' // (Or 'DELETE' depending on how your PHP reads query params, GET matches PHP $_GET)
    }).then(res => res.json()),

  // --- Courses Management ---
  getCourses: () => fetch(`${API_URL}?action=get_courses`).then(res => res.json()),
  
  addCourse: (name: string) => fetch(`${API_URL}?action=add_course`, { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ course_name: name }) 
  }).then(res => res.json()),
  
  deleteCourse: (id: number) => fetch(`${API_URL}?action=delete_course&id=${id}`, { 
    method: 'GET' // Changed to GET or DELETE based on your PHP endpoint
  }).then(res => res.json()),
};