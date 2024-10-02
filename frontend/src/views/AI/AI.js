import React, { useState } from 'react';
import axios from 'axios';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm, CFormInput, CButton, CListGroup, CListGroupItem } from '@coreui/react';

const ChatbotAI = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const sendMessage = async () => {
    if (!userMessage) return;

    const updatedMessages = [...messages, { sender: 'User', text: userMessage }];
    setMessages(updatedMessages);

    // Check if API_URL is properly loaded
    const API_URL = process.env.REACT_APP_API_URL; // Fallback if process.env doesn't work
    console.log('API URL:', API_URL);

    try {
      const response = await axios.post(`${API_URL}/api/chat`, {
        messageHistory: updatedMessages.map((msg) => ({
          role: msg.sender === 'User' ? 'user' : 'assistant',
          content: msg.text,
        })),
      });

      // Add the AI's response to the chat history
      setMessages([...updatedMessages, { sender: 'AI', text: response.data.reply }]);
    } catch (error) {
      console.error('Error sending message to the backend:', error);
    }

    setUserMessage(''); // Clear the input field
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <h5>AI Chatbot</h5>
          </CCardHeader>
          <CCardBody>
            {/* Chat history */}
            <CListGroup>
              {messages.map((message, index) => (
                <CListGroupItem key={index} className={message.sender === 'User' ? 'text-end' : 'text-start'}>
                  <strong>{message.sender}:</strong> {message.text}
                </CListGroupItem>
              ))}
            </CListGroup>

            {/* Input field for user message */}
            <CForm onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
              <CRow className="mt-3">
                <CCol>
                  <CFormInput
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Type your message..."
                  />
                </CCol>
                <CCol xs="auto">
                  <CButton color="primary" onClick={sendMessage}>
                    Send
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ChatbotAI;