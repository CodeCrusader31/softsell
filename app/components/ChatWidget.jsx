"use client";

import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! Ask me anything or try: "How do I sell my license?"' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const text = await res.text(); // Read raw response
      console.log("Raw response:", text); // Debug

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        setMessages([...newMessages, { role: 'bot', content: 'Error: invalid response from server.' }]);
        return;
      }

      setMessages([...newMessages, { role: 'bot', content: data.reply || 'No reply received.' }]);
    } catch (err) {
      console.error("Fetch failed:", err);
      setMessages([...newMessages, { role: 'bot', content: 'Error: could not reach the server.' }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Chat' : 'AI Chat'}
      </button>

      {isOpen && (
        <div className="bg-white border rounded-lg shadow-lg mt-2 p-4 h-96 overflow-y-auto flex flex-col justify-between">
          <div className="overflow-y-auto space-y-2 mb-2 flex-1">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-sm ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block px-3 py-2 rounded ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {msg.content}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded px-2 py-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
