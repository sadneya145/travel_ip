import React from "react";
import Navbar from "../Navbar/Navbar";
import Chatbot from "../Chatbot/Chatbot.js";
import { useState } from "react";
import "./Forum.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Forum = () => {
    const [isChatbotOpen, setChatbotOpen] = useState(false);

    const toggleChatbot = () => {
        setChatbotOpen(!isChatbotOpen);
    };

    const posts = [
        {
            id: 1,
            title: "Top 10 Places to Visit in Bali",
            content: "Bali offers stunning beaches, vibrant culture, and mesmerizing landscapes. Check out Ubud, Kuta, and Seminyak for the best experience.",
            author: "TravelerJane",
            profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
            likes: 25,
            comments: [
                { user: "BeachLover", text: "Ubud is my favorite spot!" },
                { user: "AdventureSeeker", text: "I can't wait to visit Seminyak again!" }
            ],
            adviceImage: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 2,
            title: "Packing Tips for European Summer",
            content: "Pack light, versatile clothing, and don't forget a power adapter. Europe's summer can be unpredictable, so a light jacket is always a good idea!",
            author: "PackingPro",
            profilePic: "https://randomuser.me/api/portraits/men/35.jpg",
            likes: 18,
            comments: [
                { user: "LightTraveler", text: "A power adapter saved my trip!" },
                { user: "SummerExplorer", text: "Versatile clothing is key!" }
            ],
            adviceImage: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXVyb3BlfGVufDB8fDB8fHww"
        },
        {
            id: 3,
            title: "Why Visit Iceland in Winter?",
            content: "Experience the Northern Lights, hot springs, and stunning ice caves. Iceland in winter is a magical experience you shouldn't miss.",
            author: "IcelandFan",
            profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
            likes: 30,
            comments: [
                { user: "SnowLover", text: "Seeing the Northern Lights was a dream come true!" },
                { user: "HotSpringHunter", text: "The Blue Lagoon is amazing in winter!" }
            ],
            adviceImage: "https://images.unsplash.com/photo-1531019136844-d1bdacc942b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGljZWxhbmR8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 4,
            title: "Best Street Food in Thailand",
            content: "Don't miss out on trying Pad Thai, Mango Sticky Rice, and Tom Yum Soup when in Thailand. Street food is an essential part of the experience.",
            author: "FoodieTraveler",
            profilePic: "https://randomuser.me/api/portraits/women/36.jpg",
            likes: 20,
            comments: [
                { user: "FoodLover", text: "Mango Sticky Rice is the best!" },
                { user: "SpicyEater", text: "Tom Yum Soup is a must-try!" }
            ],
            adviceImage: "https://images.unsplash.com/photo-1677297256774-5412e81427c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmVldCUyMGZvb2QlMjBpbiUyMHRoYWlsYW5kfGVufDB8fDB8fHww"
        },
        {
            id: 5,
            title: "How to Travel on a Budget",
            content: "Find affordable accommodations, use public transport, and explore free attractions. Planning ahead is key to saving money while traveling.",
            author: "BudgetTraveler",
            profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
            likes: 22,
            comments: [
                { user: "SavvySaver", text: "Hostels are great for budget travel!" },
                { user: "Explorer101", text: "Public transport is a game-changer." }
            ],
            adviceImage: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwYnVkZ2V0fGVufDB8fDB8fHww"
        },
        {
            id: 6,
            title: "Solo Travel Tips for Women",
            content: "Research destinations, stay connected with family, and trust your instincts. Solo travel can be empowering and safe with the right preparations.",
            author: "WanderWoman",
            profilePic: "https://randomuser.me/api/portraits/women/55.jpg",
            likes: 28,
            comments: [
                { user: "SoloAdventurer", text: "Staying connected helped me feel safer!" }
            ],
            adviceImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        }
        
    ];

    const trendyTopics = [
        { text: "🌍 Best Travel Destinations", icon: "⭐" },
        { text: "✈️ Budget Travel Hacks", icon: "🔥" },
        { text: "🏕️ Camping Essentials", icon: "🌿" },
        { text: "📸 Top Instagram Spots", icon: "📸" },
        { text: "🌅 Sunrise & Sunset Spots", icon: "🌞" },
    ];

    return (
        <>
            <Navbar />

            {isChatbotOpen && (
                <div className="forum-chatbot-popup">
                    <Chatbot />
                    <button onClick={toggleChatbot} className="forum-close-chatbot-button">
                        Close
                    </button>
                </div>
            )}

            <div className="forum-container mt-5">
                {/* Left Sidebar */}
                <div className="forum-sidebar">
                    <h4>Trendy Topics</h4>
                    <ul className="list-group">
                        {trendyTopics.map((topic, index) => (
                            <li key={index} className="forum-list-group-item">
                                <span>{topic.icon} {topic.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Forum Posts */}
                <div className="forum-content">
                    <h2>
                        <img src="https://img.icons8.com/?size=100&id=x2B1Kfsxrjgf&format=png&color=000000" alt="Travel" className="forum-travel-img-small me-2" />
                        Travel Discussions
                    </h2>
                    {posts.map(post => (
                        <div key={post.id} className="forum-card mb-3">
                            <div className="forum-card-body">
                                <div className="d-flex align-items-center">
                                    <img src={post.profilePic} alt="Profile" className="forum-profile-pic-small me-2" />
                                    <div>
                                        <h5 className="forum-card-title">{post.title}</h5>
                                        <p className="forum-card-text">{post.content}</p>
                                        <p className="forum-card-text"><small className="text-muted">Posted by {post.author}</small></p>
                                    </div>
                                </div>
                                {post.adviceImage && (
                                    <img src={post.adviceImage} alt="Advice" className="forum-advice-img-small mt-3" />
                                )}
                                <div className="forum-interaction mt-2">
                                    <span className="me-3">
                                        <img src="https://cdn-icons-png.flaticon.com/128/2107/2107845.png" alt="Like" className="forum-icon" /> {post.likes}
                                    </span>
                                    <span>
                                        <img src="https://cdn-icons-png.flaticon.com/128/6460/6460733.png" alt="Comment" className="forum-icon" /> {post.comments.length}
                                    </span>
                                </div>
                                <div className="forum-comments-section mt-3">
                                    {post.comments.length > 0 ? (
                                        post.comments.map((comment, index) => (
                                            <div key={index} className="forum-comment ms-4">
                                                <strong>{comment.user}</strong>: {comment.text}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="forum-no-comments">No comments yet.</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Forum;
