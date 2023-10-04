import express from 'express';

const PORT = process.env.PORT ?? 8080;
const app = express();
app.use(express.static("docs"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));