import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebaseConfig'; // Убедитесь, что Firebase настроен
import { collection, addDoc, query, onSnapshot, orderBy } from 'firebase/firestore';

const ChatRoom = () => {
    const { chatId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const messagesRef = collection(firestore, `chats/${chatId}/messages`);
        const q = query(messagesRef, orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setMessages(msgs);
        });
        return () => unsubscribe();
    }, [chatId]);

    const sendMessage = async () => {
        if (newMessage.trim()) {
            const messagesRef = collection(firestore, `chats/${chatId}/messages`);
            await addDoc(messagesRef, {
                text: newMessage,
                sender: "Anonymous", // Замените на текущего пользователя
                timestamp: Date.now(),
            });
            setNewMessage('');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Чат ID: {chatId}</h2>
            <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px auto', width: '50%' }}>
                {messages.map((msg) => (
                    <div key={msg.id}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Введите сообщение"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                style={{ padding: '10px', width: '300px' }}
            />
            <button onClick={sendMessage} style={{ marginLeft: '10px', padding: '10px 20px' }}>
                Отправить
            </button>
        </div>
    );
};

export default ChatRoom;
