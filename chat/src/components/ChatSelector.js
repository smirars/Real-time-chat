import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatSelector = () => {
    const [chatId, setChatId] = useState('');
    const navigate = useNavigate();

    const joinChat = () => {
        if (chatId.trim()) {
            navigate(`/chat/${chatId}`);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Выберите ID чата</h2>
            <input
                type="text"
                placeholder="Введите ID чата"
                value={chatId}
                onChange={(e) => setChatId(e.target.value)}
                style={{ padding: '10px', width: '300px' }}
            />
            <button onClick={joinChat} style={{ marginLeft: '10px', padding: '10px 20px' }}>
                Присоединиться
            </button>
        </div>
    );
};

export default ChatSelector;
