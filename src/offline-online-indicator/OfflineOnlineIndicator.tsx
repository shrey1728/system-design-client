import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOnlineStatus } from "./utils/NetworkClient";

export const OfflineOnlineIndicator: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("offline-online-indicator") !== null) {
      navigate("/offline-online-indicator/status");
    }
  }, [navigate]);

  const handleSubmit = () => {
    sendOnlineStatus(email, name);
    localStorage.setItem(
      "offline-online-indicator",
      JSON.stringify({
        name: name,
        email: email,
      })
    );
    navigate("/offline-online-indicator/status");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button className="primary-button" type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
      <button className="primary-button" onClick={() => navigate("/")}>
        Go to home
      </button>
    </>
  );
};
