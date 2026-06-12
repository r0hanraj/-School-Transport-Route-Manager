import { useState } from "react";
import Navbar from "../components/Navbar";

function ParentNotify() {
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState([]);

  const sendNotification = () => {
    if (!message) {
      alert("Enter a message");
      return;
    }

    setNotifications([
      ...notifications,
      {
        message,
        time: new Date().toLocaleString(),
      },
    ]);

    setMessage("");
  };

  return (
    <>
      <Navbar />

      <div
  style={{
    padding: "20px",
    marginTop: "80px"
  }}
>
        <h1>Parent Notification</h1>

        <input
          type="text"
          placeholder="Enter Notification Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button onClick={sendNotification}>
          Send Notification
        </button>

        <h2>Notification History</h2>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Message</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {notifications.map((item, index) => (
              <tr key={index}>
                <td>{item.message}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ParentNotify;