const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv to load environment variables from the .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle JSON and enable CORS
app.use(cors());
app.use(express.json());

// Serve the static files from the React app (build folder)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Chat API route to interact with OpenAI
app.post('/api/chat', async (req, res) => {
  const { messageHistory } = req.body;

  try {
    // Send the messageHistory to OpenAI's API
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo', // You can use 'gpt-4' if available
      messages: messageHistory,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    // Extract the AI's reply from OpenAI's response
    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Error interacting with OpenAI:', error);
    res.status(500).json({ error: 'Failed to interact with AI' });
  }
});

// Catch-all route to serve the React app for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});