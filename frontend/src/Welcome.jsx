import React from "react";

export default function Welcome({ mobile }) {
  return (
    <div style={{
      maxWidth: 350,
      margin: "60px auto",
      padding: 24,
      border: "1px solid #eee",
      borderRadius: 12,
      boxShadow: "0 2px 16px #f3f3f3",
      textAlign: "center"
    }}>
      <h2>Welcome!</h2>
      <p style={{ fontSize: 18 }}>
        You have successfully authenticated
        {mobile && <> with mobile number <b>{mobile}</b></>}
        .
      </p>
    </div>
  );
}