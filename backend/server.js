const express = require('express');
const axios = require('axios'); 
const cors = require('cors'); // Import the CORS middleware
const dotenv = require('dotenv');
const path = require('path');
const OpenAI = require('openai'); // Import the OpenAI SDK

dotenv.config(); // Load environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from your frontend
  methods: ['GET', 'POST'], // Allowed methods
  credentials: true, // Include credentials if needed (cookies, etc.)
};

// Apply the CORS middleware with the options
app.use(cors(corsOptions));
app.use(express.json());

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // API Key from environment variable
});

// Endpoint for handling chat requests
app.post('/api/chat', async (req, res) => {
  const { messageHistory } = req.body;

  try {
    // OpenAI API call to generate a chat completion
    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // Or 'gpt-3.5-turbo'
      messages: messageHistory,
    });

    // Send the AI response back to the frontend
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error interacting with OpenAI:', error);
    res.status(500).json({ error: 'Failed to interact with AI' });
  }
});

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});