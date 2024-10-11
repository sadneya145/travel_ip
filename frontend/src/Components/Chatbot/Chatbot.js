import React, { useRef, useState } from "react";
import "./Chatbot.css";
import chatbot_icon from '../../Assets/chatbot.png'
import close_button from '../../Assets/close.png'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

// Define a list of keywords related to Indian culture and heritage
const keywords = [
  "travel destinations", "adventure travel", "budget travel", "luxury travel", 
  "solo travel", "family vacation", "beach destinations", "mountain retreats", 
  "city breaks", "cultural travel", "travel tips", "road trips", "travel guides", 
  "eco-tourism", "sustainable travel", "backpacking", "digital nomad", 
  "travel photography", "best places to visit", "hidden gems", "local experiences", 
  "travel itineraries", "long-term travel", "weekend getaways", "honeymoon destinations", 
  "island hopping", "world travel", "travel inspiration", "travel safety", 
  "travel apps", "travel hacks", "adventure sports", "hiking trails", "national parks", 
  "wildlife safaris", "cultural festivals", "cruise vacations", "desert adventures", 
  "snowboarding", "ski resorts", "travel blogs", "travel vlogs", "city tours", 
  "UNESCO World Heritage Sites", "road trip essentials", "packing lists", "traveler reviews", 
  "beach resorts", "historical tours", "urban exploration", "remote work travel", 
  "local cuisine", "culinary tours", "travel deals", "flight booking", 
  "accommodation options", "hostels", "vacation rentals", "boutique hotels", 
  "airbnb stays", "campsites", "glamping", "travel insurance", "off-the-beaten-path", 
  "cultural immersion", "world wonders", "adventure tours", "river cruises"
];



const isCulturalMessage = (message) => {
  return keywords.some(keyword => message.includes(keyword));
};

export default function Chatbot(props) {
  const messageListRef = useRef(null);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Trivibot",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);
  const [conversationId, setConversationId] = useState(null);
  const [lastConversationId, setLastConversationId] = useState(null);

  const handleSent = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setTyping(true);

    if (isCulturalMessage(message)) {
      try {
        const response = await fetch("https://copilot5.p.rapidapi.com/copilot", {
          method: "POST",
          headers: {
            'x-rapidapi-key': 'e419ab8c9bmsh207d1141f52d94bp17f987jsnc1d87cac5dd9',
            'x-rapidapi-host': 'copilot5.p.rapidapi.com',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: message,
            conversation_id: conversationId,
            tone: "BALANCED",
            markdown: false,
            photo_url: null,
          }),
        });

        const data = await response.json();
        const botMessage = data.data && data.data.message;
        const newConversationId = data.data && data.data.conversation_id;

        if (lastConversationId && newConversationId !== lastConversationId) {
          console.log("Bot: New topic detected. Starting a new conversation.");
        }

        setLastConversationId(newConversationId);
        setConversationId(newConversationId);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            message: botMessage || "No response message found",
            sender: "ChatGPT",
            direction: "incoming",
          },
        ]);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setTyping(false);
      }
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: "Sorry, I could not understand you.",
          sender: "ChatGPT",
          direction: "incoming",
        },
      ]);
      setTyping(false);
    }
  };

  return props.trigger ? (
    <div className="chatPopup d-flex justify-content-end align-items-center pe-3">
      <div className="chatbotApp">
        <div className="chatbotName d-flex align-items-center px-2 py-1">
          <h3 className="align-self-center mb-0 ms-2 d-flex align-items-center">
            <img
              src={chatbot_icon}
              style={{ height: "4rem", width: "3.8rem" }}
              className="me-3"
            />
            Trivy
          </h3>
          <button
            className="btn ms-auto me-2 d-flex align-items-center"
            onClick={() => props.setTrigger(false)}
          >
            <img src={close_button} style={{ height: "2rem" ,width:"2rem"}} />
          </button>
        </div>
        <div style={{ height: "80vh" }} className="bottomdiv">
          <MainContainer style={{ borderRadius: "0 0 10px 10px" }}>
            <ChatContainer>
              <MessageList
                ref={messageListRef}
                className="py-2 messageList"
                typingIndicator={
                  typing ? <TypingIndicator content="Trivy is thinking" /> : null
                }
              >
                {messages.map((message, i) => {
                  return (
                    <Message
                      key={i}
                      model={message}
                      className="messageText m-2"
                      style={{ width: "100%" }}
                    />
                  );
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSent}
                className="py-3 px-2 inputField"
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}  