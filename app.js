const express = require('express');
const {Storage} = require('@google-cloud/storage');
const app = express();
const port = process.env.PORT || 8080;

// Configure GCP Storage
const bucketName = process.env.BUCKET_NAME || "thefunnycatimages-cat10630766";
const storage = new Storage();

app.use(express.static('public'));


// Endpoint to get a random image URL
app.get('/random-image', async (req, res) => {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();
    if (!files.length) return res.status(404).send('No images found.');
    
    const randomFile = files[Math.floor(Math.random() * files.length)];
    const url = `https://storage.googleapis.com/${bucketName}/${randomFile.name}`;
    res.json({url});
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching images.');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});