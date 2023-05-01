import React, { useEffect, useState } from "react";
import { sendOnlineStatus } from "./utils/NetworkClient";
import { useNavigate } from "react-router-dom";

interface QueryResponse {
  _id: string;
  name: string;
  email: string;
  lastUpdated: number;
}

export const OfflineOnlineIndicatorStatus: React.FC = () => {
  const [data, setData] = useState<QueryResponse[]>([]);
  const navigate = useNavigate();
  const currentEpochTime = Date.now();
  const { name, email } = JSON.parse(
    localStorage.getItem("offline-online-indicator")!
  );

  const fetchData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(
      "https://onlineofflineindicatorsd.azurewebsites.net/getAllUsersStatus",
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    sendOnlineStatus(email, name);
    const interval = setInterval(() => {
      fetchData();
      sendOnlineStatus(email, name);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Offline Online Indicator Status</h1>
      <h3>{name} is Online</h3>
      <br />
      <h2>Friends</h2>
      <ul>
        {data
          .filter((item) => item.email !== email)
          .map((item) => (
            <li key={item._id}>
              {item.name} {item.email}{" "}
              <div>
                {currentEpochTime - item.lastUpdated < 60000
                  ? "Online"
                  : `Last seen ${Math.floor(
                      (currentEpochTime - item.lastUpdated) / 60000
                    )} minutes ago`}
              </div>
            </li>
          ))}
      </ul>
      <button
        className="primary-button"
        onClick={() => {
          localStorage.removeItem("offline-online-indicator");
          navigate("/offline-online-indicator");
        }}
      >
        Log Out
      </button>
      <button className="primary-button" onClick={() => navigate("/")}>
        Go to home
      </button>
    </div>
  );
};
