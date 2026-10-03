import React, { useState, FormEvent } from "react";
import { Lock, User, ShieldAlert, Loader2, AlertCircle, Eye, EyeOff, Terminal } from "lucide-react";
import { adminApi } from "@/services/adminApi";

interface Props {
  onLoginSuccess: () => void;
}

export default function AdminLogin({ onLoginSuccess }: Props) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const result = await adminApi.login(formData);

      if (result.success) {
        onLoginSuccess();
      } else {
        setErrorMessage(result.message || "Invalid username or password.");
      }
    } catch (error: any) {
      setErrorMessage("Network error. Please check your backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Background Decorative Layout Grids & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Login Card Wrapper */}
      <div className="relative w-full max-w-md bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6 z-10">
        
        {/* Top Header Badge & Branding */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20 shadow-inner">
            <ShieldAlert size={13} className="text-orange-500 animate-pulse" /> Restricted Security Zone
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight flex items-center justify-center gap-2">
              <Terminal size={22} className="text-orange-500" /> Admin Console
            </h1>
            <p className="text-xs text-zinc-400 font-mono mt-1">TechSasi Enterprise Management System</p>
          </div>
        </div>

        {/* Error Alert Box */}
        {errorMessage && (
          <div className="p-3.5 rounded-2xl bg-red-950/60 border border-red-800/60 text-red-400 text-xs flex items-center gap-2.5 font-mono animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg">
            <AlertCircle size={18} className="shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form Inputs Layout */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          {/* Username Field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-medium text-zinc-300">Username</label>
            <div className="relative group">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-orange-500 transition-colors" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter admin username"
                className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-orange-500 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Password Field with View Toggle */}
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-medium text-zinc-300">Password</label>
            <div className="relative group">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-orange-500 transition-colors" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••••••"
                className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-orange-500 rounded-2xl pl-11 pr-12 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200 transition p-1.5 rounded-lg hover:bg-zinc-800/50 cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-black text-xs uppercase tracking-wider py-4 rounded-2xl transition-all shadow-xl shadow-orange-500/20 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? (
              <>Authenticating Credentials <Loader2 size={16} className="animate-spin text-zinc-950" /></>
            ) : (
              "Sign In to Dashboard"
            )}
          </button>
        </form>

        {/* Footer Security Notice */}
        <div className="text-center pt-2 border-t border-zinc-800/60">
          <p className="text-[11px] font-mono text-zinc-500 tracking-tight">// 256-bit SSL encrypted administrative node</p>
        </div>

      </div>
    </div>
  );
}