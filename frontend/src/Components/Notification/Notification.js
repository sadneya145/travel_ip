import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Notification.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toast, ToastContainer } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell, faCommentDots, faTags } from '@fortawesome/free-solid-svg-icons';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // Simulating an API call to fetch notifications (new travel posts)
  useEffect(() => {
    const fetchNotifications = () => {
      const notificationData = [
        {
          id: 1,
          title: "New Post: Exploring Rajasthan",
          date: "2024-10-10",
          content: "User John shared a new post about his travels in Rajasthan.",
          icon: faTags,
        },
        {
          id: 2,
          title: "New Post: Discovering Goa Beaches",
          date: "2024-10-09",
          content: "User Sarah posted about her experiences at the beaches of Goa.",
          icon: faEnvelope,
        },
        {
          id: 3,
          title: "New Post: Trekking in Himachal Pradesh",
          date: "2024-10-08",
          content: "User Mike added a new post about his trekking adventure in Himachal Pradesh.",
          icon: faCommentDots,
        },
        {
          id: 4,
          title: "New Post: Kerala's Backwaters",
          date: "2024-10-07",
          content: "User Anna shared beautiful pictures of Kerala's serene backwaters.",
          icon: faBell,
        },
      ];

      setNotifications(notificationData);

      // Show the latest notification as a popup
      if (notificationData.length > 0) {
        const latestNotification = notificationData[0];
        setNewNotification(latestNotification);
        setShowToast(true);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5 addspace">
        <div className="headers mb-4 text-center">
          <h1 className="notification-header">Notification History</h1>
        </div>

        <div className="row notification-list">
          {notifications.map((notification) => (
            <div className="col-md-6" key={notification.id}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body d-flex align-items-center">
                  <div className="icon-container me-3">
                    <FontAwesomeIcon icon={notification.icon} className="icon-style" />
                  </div>
                  <div>
                    <h5 className="card-title">{notification.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{notification.date}</h6>
                    <p className="card-text">{notification.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Toast Popup for new notifications */}
      {newNotification && (
        <ToastContainer position="top-end" className="p-3">
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={5000}
            autohide
            bg="info"
          >
            <Toast.Header>
              <strong className="me-auto">
                <FontAwesomeIcon icon={newNotification.icon} className="me-2" />
                {newNotification.title}
              </strong>
              <small>{newNotification.date}</small>
            </Toast.Header>
            <Toast.Body>{newNotification.content}</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </>
  );
};

export default Notifications;
