import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function CardsComp() {
    const cardStyle = {
        width: '200px',
        margin: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const imageStyle = {
        width: '100%',
        height: 'auto'
    };

    return (
        <div className="cards-container">
            <div className="card" style={cardStyle}>
                <div className="card-image">
                    <img src="https://thumbs.dreamstime.com/b/explore-text-sign-concept-map-wanderlust-travel-concept-hipster-flat-lay-passport-compass-glasses-camera-pipe-black-91887513.jpg" alt="Feature 1" style={imageStyle} />
                </div>
                <div className="card-content">
                    <Link to='/explore'>Get New</Link>
                    <p>Explore World!</p>
                </div>
            </div>

            <div className="card" style={cardStyle}>
                <div className="card-image">
                    <img src="https://production.listennotes.com/podcasts/socials-lifestyle-socials-lifestyle--7xqPjZ9Dn1-9fAUE5qJFKt.1400x1400.jpg" alt="Feature 1" style={imageStyle} />
                </div>
                <div className="card-content">
                    <Link to='/home/SocialMedia'>Join Socials</Link>
                    <p>Learn more through fun games!</p>
                </div>
            </div>

            {/* <div className="card" style={cardStyle}>
                <div className="card-image">
                    <img src="https://img.freepik.com/free-vector/desk-calendar-with-marked-dates-3d-cartoon-style-icon-planning-time-meeting-scheduling-flat-vector-illustration-appointment-deadline-agenda-reminder-time-management-concept_74855-25964.jpg?t=st=1725080040~exp=1725083640~hmac=d1a2173e96c56a60d5babc2aea97bebc05ace795473516b2f7ff64614437d2bd&w=740" alt="Feature 1" style={imageStyle} />
                </div>
                <div className="card-content">
                    <Link to='/calendar'>Calendar</Link>
                    <p>Keep yourself up to date with special days!</p>
                </div>
            </div> */}
            <div className="card" style={cardStyle}>
                <div className="card-image">
                    <img src="https://img.freepik.com/premium-photo/colorful-whimsical-map-world-illustrated-with-iconic-landmarks-animals-from-each-country_14117-270707.jpg" alt="Feature 1" style={imageStyle} />
                </div>
                <div className="card-content">
                    <Link to='/map'>View Map</Link>
                    <p>Learn about Indian States and cities with an interactive map!</p>
                </div>
            </div>

        </div>
    );
}

export default CardsComp;