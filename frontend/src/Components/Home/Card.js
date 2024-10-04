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
                    <img src="https://img.freepik.com/free-vector/indian-hindi-diwas-background-with-map-india-vector_1017-45548.jpg?uid=R158207676&ga=GA1.1.1703022981.1725079229&semt=ais_hybrid" alt="Feature 1" style={imageStyle} />
                </div>
                <div className="card-content">
                    <Link to='/wotd'>Word of the Day</Link>
                    <p>Learn new words in different Indian Languages!</p>
                </div>
            </div>

            <div className="card" style={cardStyle}>
                <div className="card-image">
                    <img src="https://img.freepik.com/free-vector/modern-did-you-know-yellow-banner-with-question-mark_1017-30765.jpg?uid=R158207676&ga=GA1.1.1703022981.1725079229&semt=ais_hybrid" alt="Feature 1" style={imageStyle} />
                </div>
                <div className="card-content">
                    <Link to='/quiz'>Quiz</Link>
                    <p>Learn more through fun games!</p>
                </div>
            </div>

            <div className="card" style={cardStyle}>
                <div className="card-image">
                    <img src="https://img.freepik.com/free-vector/desk-calendar-with-marked-dates-3d-cartoon-style-icon-planning-time-meeting-scheduling-flat-vector-illustration-appointment-deadline-agenda-reminder-time-management-concept_74855-25964.jpg?t=st=1725080040~exp=1725083640~hmac=d1a2173e96c56a60d5babc2aea97bebc05ace795473516b2f7ff64614437d2bd&w=740" alt="Feature 1" style={imageStyle} />
                </div>
                <div className="card-content">
                    <Link to='/calendar'>Calendar</Link>
                    <p>Keep yourself up to date with special days!</p>
                </div>
            </div>
            <div className="card" style={cardStyle}>
                <div className="card-image">
                    <img src="https://img.freepik.com/free-vector/hand-drawn-map-india_23-2148194953.jpg?t=st=1725079530~exp=1725083130~hmac=a5c9ae8b454d7cab5e1405e42c8e9b5583ce0753a65f8ffbb709206e7aede082&w=740" alt="Feature 1" style={imageStyle} />
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