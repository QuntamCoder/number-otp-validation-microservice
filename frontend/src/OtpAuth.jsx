import React, { useState } from "react";
import Welcome from "./Welcome";

const API_URL = "http://localhost:8080/api/auth"; // Update if needed

export default function OtpAuth() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // <-- Add this line

  const handleMobileChange = (e) => setMobile(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);

  const requestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch(`${API_URL}/request-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `mobileNumber=${encodeURIComponent(mobile)}`,
      });
      setMsg(await res.text());
      setStep(2);
    } catch {
      setMsg("Error sending OTP. Try again.");
    }
    setLoading(false);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch(`${API_URL}/validate-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `mobileNumber=${encodeURIComponent(mobile)}&otp=${encodeURIComponent(otp)}`,
      });
      const text = await res.text();
      setMsg(text);
      if (text.toLowerCase().includes("validated")) {
        setIsAuthenticated(true); // <-- Now this works
      }
    } catch {
      setMsg("Error verifying OTP. Try again.");
    }
    setLoading(false);
  };

  if (isAuthenticated) return <Welcome mobile={mobile} />;

  return (
    <div style={{
      maxWidth: 350,
      margin: "60px auto",
      padding: 24,
      border: "1px solid #eee",
      borderRadius: 12,
      boxShadow: "0 2px 16px #f3f3f3"
    }}>
      <h2 style={{ textAlign: "center" }}>Mobile OTP Login</h2>
      {step === 1 && (
        <form onSubmit={requestOtp}>
          <input
            type="text"
            value={mobile}
            onChange={handleMobileChange}
            placeholder="Enter Mobile Number"
            maxLength={15}
            style={{ width: "100%", padding: 10, marginBottom: 12, fontSize: 16 }}
            required
            pattern="^[0-9]{10,15}$"
            title="Enter a valid mobile number"
            disabled={loading}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              background: "#1976d2",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              border: "none",
              borderRadius: 4,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1
            }}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={verifyOtp}>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
            maxLength={6}
            style={{ width: "100%", padding: 10, marginBottom: 12, fontSize: 16 }}
            required
            pattern="^[0-9]{4,6}$"
            title="Enter the OTP"
            disabled={loading}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              background: "#388e3c",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              border: "none",
              borderRadius: 4,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1
            }}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      )}
      <div style={{ minHeight: 30, marginTop: 12, textAlign: "center", color: "#d32f2f" }}>
        {msg}
      </div>
      {step === 2 && (
        <button
          style={{
            marginTop: 10,
            width: "100%",
            background: "none",
            color: "#1976d2",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline"
          }}
          onClick={() => { setStep(1); setOtp(""); setMsg(""); }}
          disabled={loading}
        >
          Change Mobile Number
        </button>
      )}
    </div>
  );
}