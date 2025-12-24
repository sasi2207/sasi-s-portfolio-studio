import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_URL from "../api";



type Contact = {
  name: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
};

const ContactDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/get-contact.php?id=${id}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setData(json.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Message not found</p>;

  return (
    <div>
      <h2>Message Details</h2>

      <p><b>Name:</b> {data.name}</p>
      <p><b>Phone:</b> {data.phone}</p>
      <p><b>Subject:</b> {data.subject}</p>
      <p><b>Message:</b><br />{data.message}</p>
      <p><b>Date:</b> {data.created_at}</p>

      <Link to="/admin/contacts">← Back</Link>
    </div>
  );
};

export default ContactDetails;
