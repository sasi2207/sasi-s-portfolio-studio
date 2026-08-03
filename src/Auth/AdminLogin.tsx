import { useState, FormEvent } from "react";
import { Lock, User, ShieldAlert, Loader2, AlertCircle } from "lucide-react";
import { adminApi } from "@/services/adminApi"; // Unga admin API path

interface Props {
  onLoginSuccess: () => void;
}

export default function AdminLogin({ onLoginSuccess }: Props) {
  const [formData, setFormData] = useState({ username: "", password: "" });
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
        onLoginSuccess(); // Trigger parent authentication state change
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
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-6">
        
        {/* Header Branding */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 mb-2">
            <ShieldAlert size={12} /> Restricted Area
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Admin Portal Login</h1>
          <p className="text-xs text-zinc-400 font-mono">TechSasi Management Console</p>
        </div>

        {/* Error Alert Box */}
        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-400 text-xs flex items-center gap-2 font-mono">
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Username</label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter admin username"
                className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-orange-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••••••"
                className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-orange-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition shadow-lg shadow-orange-500/10 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>Authenticating <Loader2 size={16} className="animate-spin text-zinc-950" /></>
            ) : (
              "Sign In to Dashboard"
            )}
          </button>
        </form>

        <div className="text-center pt-2">
          <p className="text-[11px] font-mono text-zinc-600">// Secure 256-bit encrypted administrator channel</p>
        </div>

      </div>
    </div>
  );
}