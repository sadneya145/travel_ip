import React from 'react';
import './Educard.css';

function Educard() {
    const topics = [
        {
            title: 'Forts',
            image: 'https://img.freepik.com/free-vector/illustration-red-fort_53876-8839.jpg',
            description: 'Explore the history of Indian forts.',
        },
        {
            title: 'Caves',
            image: 'https://img.freepik.com/free-photo/beautiful-view-cave-with-hills-daytime_181624-25590.jpg?uid=R158207676&ga=GA1.1.1703022981.1725079229&semt=ais_hybrid',
            description: 'Discover ancient Indian caves.',
        },
        {
            title: 'War History',
            image: 'https://img.freepik.com/free-photo/war-conflict-landscape-with-soldiers-fighting_23-2149766339.jpg?uid=R158207676&ga=GA1.1.1703022981.1725079229&semt=ais_hybrid',
            description: 'Learn about historical battles.',
        },
        {
            title: 'Independence',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4nYJaUu0P2E5xlnYAlCvKXGdXplmhlbWAw&s',
            description: 'Know more about the freedom struggle.',
        },
        {
            title: 'Heritage Sites',
            image: 'https://www.tourmyindia.com/heritage/images/heritage.jpg',
            description: 'Visit important heritage sites.',
        },
    ];

    return (
        <div className='educard-section'>
            <div className='edu-text'>
                <h2>Learn More About Indian Heritage</h2>
                <hr className='separator' />
            </div>
            <div className="educard-container">
                {topics.map((topic, index) => (
                    <a href="https://www.google.com" className="card" key={index} target="_blank" rel="noopener noreferrer">
                        <div className="card-image">
                            <img src={topic.image} alt={topic.title} />
                        </div>
                        <div className="card-content">
                            <h3>{topic.title}</h3>
                            <p>{topic.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Educard;