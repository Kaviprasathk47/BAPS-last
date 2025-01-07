import React, { useState } from 'react';

const ChatApp = () => {
    const [messages, setMessages] = useState([]); // State to store chat messages
    const [currentMessage, setCurrentMessage] = useState(''); // State for the current input

    // Handle message submission
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (currentMessage.trim() !== '') {
            // Add new message to the messages array
            setMessages([...messages, { text: currentMessage, timestamp: new Date().toLocaleTimeString() }]);
            setCurrentMessage(''); // Clear the input field
        }
    };

    return (
        <div className="justify-center flex items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded shadow-lg p-5">
                {/* Chat Display */}
                <div className="h-96 overflow-y-auto border p-3 mb-3 rounded bg-gray-50">
                    {messages.map((msg, index) => (
                        <div key={index} className="mb-2">
                            <div className="text-sm text-gray-700">{msg.text}</div>
                            <div className="text-xs text-gray-400">{msg.timestamp}</div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="flex">
                    <input
                        type="text"
                        className="flex-grow p-2 border border-gray-300 rounded-l outline-none"
                        placeholder="Type a message..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatApp;
