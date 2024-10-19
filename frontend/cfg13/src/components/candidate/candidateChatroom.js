import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Send, Calendar } from 'lucide-react';

function CandidateChatroom() {
  const { room } = useParams();
  const subchats = {
    General: [],
    Projects: [],
    Events: [],
  };

  const [currentSubchat, setCurrentSubchat] = useState('General');
  const [input, setInput] = useState('');  
  const [messages, setMessages] = useState(subchats[currentSubchat]);
  const [events, setEvents] = useState([]);
  const [eventForm, setEventForm] = useState({ title: '', date: '', description: '' });

  const handleSendMessage = async () => {
    if (input.trim()) {
      const updatedMessages = [...messages, { sender: 'You', message: input }];
      setMessages(updatedMessages);
      subchats[currentSubchat] = updatedMessages;
      setInput('');
    }
  };

  const handleEventFormChange = (e) => {
    const { name, value } = e.target;
    setEventForm({ ...eventForm, [name]: value });
  };

  const handleCreateEvent = () => {
    if (eventForm.title && eventForm.date) {
      setEvents([...events, eventForm]);
      setEventForm({ title: '', date: '', description: '' });
    }
  };

  const handleSubchatChange = (subchat) => {
    setCurrentSubchat(subchat);
    setMessages(subchats[subchat]);
  };

  return (
    <div className="flex max-w-6xl mx-auto font-sans bg-gray-100 h-screen">
      {/* Subchat Sidebar */}
      <div className="w-1/4 bg-white shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Subchats</h3>
        <ul className="space-y-2">
          {Object.keys(subchats).map((subchat, index) => (
            <li 
              key={index} 
              onClick={() => handleSubchatChange(subchat)}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 flex items-center justify-between ${
                currentSubchat === subchat ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              {subchat}
              <ChevronRight className={`w-5 h-5 ${currentSubchat === subchat ? 'text-blue-600' : 'text-gray-400'}`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat Area */}
      <div className="w-3/4 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{room} Community - {currentSubchat} Chat</h2>
        
        {/* Chat Messages */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.sender === 'You' ? 'text-right' : ''}`}>
              <span className={`inline-block px-4 py-2 rounded-lg ${
                msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}>
                <strong>{msg.sender}:</strong> {msg.message}
              </span>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>

        {/* Events Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Community Events</h3>

          {/* Create Event Form */}
          <div className="mb-6 border border-gray-200 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-3 text-gray-700">Create New Event</h4>
            <input
              type="text"
              name="title"
              value={eventForm.title}
              onChange={handleEventFormChange}
              placeholder="Event Title"
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <input
              type="date"
              name="date"
              value={eventForm.date}
              onChange={handleEventFormChange}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <textarea
              name="description"
              value={eventForm.description}
              onChange={handleEventFormChange}
              placeholder="Event Description"
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <button
              onClick={handleCreateEvent}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200 flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Create Event
            </button>
          </div>

          {/* Display Events */}
          <div>
            {events.length > 0 ? (
              <ul className="space-y-4">
                {events.map((event, index) => (
                  <li key={index} className="border-b border-gray-200 pb-4">
                    <h4 className="text-lg font-semibold text-gray-800">{event.title}</h4>
                    <p className="text-sm text-gray-600"><strong>Date:</strong> {event.date}</p>
                    <p className="text-gray-700">{event.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No upcoming events.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateChatroom;

