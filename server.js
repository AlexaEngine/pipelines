import app from './index.js';  // Import the app from index.js

const PORT = process.env.PORT || 3000;  // Define the port

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
