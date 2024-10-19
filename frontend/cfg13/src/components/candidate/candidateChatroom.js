import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CandidateChatroom() {
  const { room } = useParams();
  const [currentSubchat, setCurrentSubchat] = useState('General');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const subchats = {
    General: [],
    Projects: [],
    Events: [],
  };

  // Fetch existing messages on component mount and subchat change
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/api/texts/${room}`);
        if (response.ok) {
          const data = await response.json();
          setMessages(data.texts || []);
          subchats[currentSubchat] = data.texts || [];
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [room, currentSubchat]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      try {
        const messageData = {
          text: input,
          user: 'HackathonUser', // Hardcoded user
          chat: room
        };

        const response = await fetch('/api/createText', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(messageData),
        });

        if (response.ok) {
          // Add new message to local state
          const newMessage = {
            sender: 'You',
            message: input,
          };
          
          setMessages([...messages, newMessage]);
          subchats[currentSubchat] = [...messages, newMessage];
          setInput('');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleSubchatChange = (subchat) => {
    setCurrentSubchat(subchat);
    setMessages(subchats[subchat]);
  };

  return (
    <div className="flex max-w-6xl mx-auto font-sans">
      {/* Subchat Sidebar */}
      <div className="w-1/5 border-r border-gray-200 p-5">
        <h3 className="font-semibold mb-4">Subchats</h3>
        <ul className="space-y-2">
          {Object.keys(subchats).map((subchat, index) => (
            <li 
              key={index} 
              onClick={() => handleSubchatChange(subchat)}
              className={`p-2 cursor-pointer rounded ${
                currentSubchat === subchat ? 'bg-gray-100' : ''
              } hover:bg-gray-50`}
            >
              {subchat}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat Area */}
      <div className="w-4/5 p-5">
        <h2 className="text-center text-gray-800 text-xl mb-5">
          {room} Community - {currentSubchat} Chat
        </h2>
        
        {/* Chat Messages */}
        <div className="h-72 overflow-y-auto mb-5 border border-gray-200 rounded p-4">
          {messages.map((msg, index) => (
            <p key={index} className="mb-2">
              <strong>{msg.sender || 'User'}:</strong> {msg.message || msg.content}
            </p>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-200 rounded"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default CandidateChatroom;