import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function CandidateChatroom() {
  const { room } = useParams();  // Get the room name from the URL parameters

  // Subchats and corresponding messages
  const subchats = {
    General: [
      { sender: 'John', message: 'Hello, welcome to the General chat!' },
      { sender: 'Jane', message: 'Hey! What’s going on?' },
    ],
    Projects: [
      { sender: 'Alice', message: 'Let’s discuss project ideas here.' },
      { sender: 'Bob', message: 'Sure, I’m working on a new app.' },
    ],
    Events: [
      { sender: 'Charlie', message: 'What community events are coming up?' },
      { sender: 'Dana', message: 'We should have a React workshop.' },
    ],
  };

  const [currentSubchat, setCurrentSubchat] = useState('General');  // Default to General subchat
  const [input, setInput] = useState('');  
  const [messages, setMessages] = useState(subchats[currentSubchat]);

  // Event state
  const [events, setEvents] = useState([]);
  const [eventForm, setEventForm] = useState({ title: '', date: '', description: '' });

  const handleSendMessage = () => {
    if (input.trim()) {
      const updatedMessages = [...messages, { sender: 'You', message: input }];
      setMessages(updatedMessages);
      subchats[currentSubchat] = updatedMessages;  // Update the current subchat messages
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

  // Handle subchat change
  const handleSubchatChange = (subchat) => {
    setCurrentSubchat(subchat);
    setMessages(subchats[subchat]);  // Load the messages for the selected subchat
  };

  return (
    <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Roboto, sans-serif' }}>
      {/* Subchat Sidebar */}
      <div style={{ width: '20%', borderRight: '1px solid #ddd', padding: '20px' }}>
        <h3>Subchats</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {Object.keys(subchats).map((subchat, index) => (
            <li 
              key={index} 
              onClick={() => handleSubchatChange(subchat)}
              style={{ 
                padding: '10px', 
                cursor: 'pointer', 
                backgroundColor: currentSubchat === subchat ? '#f1f1f1' : 'transparent', 
                borderRadius: '4px', 
                marginBottom: '10px' 
              }}
            >
              {subchat}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat Area */}
      <div style={{ width: '80%', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>{room} Community - {currentSubchat} Chat</h2>
        
        {/* Chat Messages */}
        <div style={{ height: '300px', overflowY: 'scroll', marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
          {messages.map((msg, index) => (
            <p key={index}><strong>{msg.sender}:</strong> {msg.message}</p>
          ))}
        </div>

        {/* Message Input */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
          <button
            onClick={handleSendMessage}
            style={{
              padding: '10px 15px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </div>

        {/* Events Section */}
        <h3 style={{ marginBottom: '10px' }}>Community Events</h3>

        {/* Create Event Form */}
        <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '4px' }}>
          <h4>Create New Event</h4>
          <input
            type="text"
            name="title"
            value={eventForm.title}
            onChange={handleEventFormChange}
            placeholder="Event Title"
            style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }}
          />
          <input
            type="date"
            name="date"
            value={eventForm.date}
            onChange={handleEventFormChange}
            style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }}
          />
          <textarea
            name="description"
            value={eventForm.description}
            onChange={handleEventFormChange}
            placeholder="Event Description"
            style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }}
          />
          <button
            onClick={handleCreateEvent}
            style={{
              padding: '10px 15px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Create Event
          </button>
        </div>

        {/* Display Events */}
        <div>
          {events.length > 0 ? (
            <ul>
              {events.map((event, index) => (
                <li key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                  <h4>{event.title}</h4>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming events.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateChatroom;