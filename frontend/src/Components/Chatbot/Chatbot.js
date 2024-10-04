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
  "Red Fort", "Taj Mahal", "historical sites in India", "Indian culture",
  "Indian heritage", "India", "historical places", "Qutub Minar", 
  "Humayun's Tomb", "Indian history", "Indian monuments", "Indian architecture",
  "Ganges River", "Varanasi", "Rajasthan forts", "Mughal Empire", "Indian art",
  "Indian festivals", "Indian traditions", "Indian temples", "Sikhism", 
  "Hinduism", "Buddhism", "Jainism", "Indian independence", "Mahatma Gandhi", 
  "British Raj", "India's freedom struggle", "Indian languages", "Indian music",
  "Indian dance", "Bollywood", "Indian cuisine", "Indian textiles", "Indian crafts",
  "Ancient India", "Vedic period", "Indian epics", "Ramayana", "Mahabharata",
  "Indian archaeology", "Indian museums", "Indian cultural heritage", "Indian sculptures"
];


const isCulturalMessage = (message) => {
  return keywords.some(keyword => message.includes(keyword));
};

export default function Chatbot(props) {
  const messageListRef = useRef(null);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Narada",
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