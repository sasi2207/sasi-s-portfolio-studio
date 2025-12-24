"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

import { User, Lock, LogIn, Eye, EyeOff } from "lucide-react";
import { login } from "./auth";
import { toast } from "sonner";

const Login = () => {
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
      const res = await login(username, password);

      if (res?.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("username", res.user.username);

        toast.success("Login successful");

        setShowPassword(false);
        window.location.href = "/dashboard";
      } else {
        toast.error(res?.error || "Invalid credentials");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Server error");
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
            Welcome{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent">
              Back
            </span>
          </h1>

          <p
            className="text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Login to access your dashboard.
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
              Login
            </h2>

            <div className="space-y-5">
              {/* USERNAME */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Username
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" />
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
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 transition shadow-md disabled:opacity-60"
              >
                <LogIn size={18} />
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            {/* REGISTER LINK */}
            {/* <p className="text-center text-sm text-muted-foreground mt-6">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-orange-600 font-medium hover:underline"
              >
                Register
              </a>
            </p> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
