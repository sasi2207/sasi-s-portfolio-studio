"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import {
  User,
  LogOut,
  LayoutDashboard,
  FileText,
  Eye,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const [showLogout, setShowLogout] = useState(false);

  /* ---------------- AUTH CHECK ---------------- */
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });

    if (!token) {
      toast.error("Please login first");
      window.location.href = "/login";
    }
  }, [token]);

  /* ---------------- LOGOUT ---------------- */
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    toast.success("Logged out successfully");
    window.location.href = "/login";
  };

  return (
    <Layout>
      {/* HERO */}
      <ParallaxSection className="pt-32 bg-gradient-to-b from-orange-50 to-transparent">
        <div className="container-custom max-w-4xl">
          <h1
            className="text-4xl md:text-5xl font-heading font-bold mb-4 flex items-center gap-3"
            data-aos="fade-up"
          >
            <LayoutDashboard className="text-orange-500" size={36} />
            Dashboard
          </h1>
          <p
            className="text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Welcome back, <span className="font-semibold">{username}</span>
          </p>
        </div>
      </ParallaxSection>

      {/* CONTENT */}
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <User className="text-orange-500 mb-4" size={32} />
            <h3 className="text-xl font-heading font-semibold mb-2">
              Profile
            </h3>
            <p className="text-muted-foreground">
              Username: <strong>{username}</strong>
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <LayoutDashboard className="text-orange-500 mb-4" size={32} />
            <h3 className="text-xl font-heading font-semibold mb-2">
              Overview
            </h3>
            <p className="text-muted-foreground">
              This is your dashboard. You can manage your data here.
            </p>
          </div>

          {/* Logout Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <LogOut className="text-red-500 mb-4" size={32} />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Logout
              </h3>
              <p className="text-muted-foreground">
                End your current session securely.
              </p>
            </div>

            <button
              onClick={() => setShowLogout(true)}
              className="mt-4 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold py-2 transition"
            >
              Logout
            </button>
          </div>

          {/* Proposal Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <FileText className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Proposal Details
              </h3>
              <p className="text-muted-foreground">
                View and manage all your project proposals in one place.
              </p>
            </div>

            <button
              onClick={() =>
                (window.location.href = "/dashboard/proposals")
              }
              className="mt-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 transition flex items-center justify-center gap-2"
            >
              <Eye size={18} />
              View Proposals
            </button>
          </div>

          {/* Contacts Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <FileText className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Contacts Details
              </h3>
              <p className="text-muted-foreground">
                View and manage all your project contacts in one place.
              </p>
            </div>

            <button
              onClick={() =>
                (window.location.href = "/dashboard/contacts")
              }
              className="mt-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 transition flex items-center justify-center gap-2"
            >
              <Eye size={18} />
              View Contacts
            </button>
          </div>
        </div>
      </section>

      {/* ================= LOGOUT MODAL ================= */}
      {showLogout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <XCircle className="text-red-500 mx-auto mb-3" size={40} />
            <h3 className="text-xl font-semibold text-center mb-2">
              Confirm Logout
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 rounded-xl border py-2"
              >
                Cancel
              </button>
              <button
                onClick={logout}
                className="flex-1 rounded-xl bg-red-500 hover:bg-red-600 text-white py-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
