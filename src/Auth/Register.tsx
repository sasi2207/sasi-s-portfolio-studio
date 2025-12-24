"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

import { UserPlus, Lock, Eye, EyeOff } from "lucide-react";
import { register } from "./auth";
import { toast } from "sonner";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const submit = async () => {
    if (!username || !password) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      await register(username, password);
      toast.success("Account created successfully");

      setUsername("");
      setPassword("");
      setShowPassword(false);
    } catch (err: any) {
      toast.error(err?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <ParallaxSection className="pt-32 bg-gradient-to-b from-orange-50 to-transparent">
        <div className="container-custom max-w-3xl">
          <h1
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
            data-aos="fade-up"
          >
            Create{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent">
              Account
            </span>
          </h1>

          <p
            className="text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join us and manage your proposals securely.
          </p>
        </div>
      </ParallaxSection>

      {/* FORM */}
      <section className="section-padding">
        <div className="container-custom flex justify-center">
          <div
            className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
            data-aos="zoom-in"
          >
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">
              Register
            </h2>

            <div className="space-y-5">
              {/* USERNAME */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Username
                </label>

                <div className="relative">
                  <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" />
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
                    placeholder="Enter username"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400 outline-none"
                    placeholder="Enter password"
                  />

                  {/* SHOW / HIDE ICON */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* SUBMIT */}
              <button
                onClick={submit}
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 transition shadow-md disabled:opacity-60"
              >
                {loading ? "Registering..." : "Create Account"}
              </button>
            </div>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-orange-600 font-medium hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
