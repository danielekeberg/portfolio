import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3000;
const API_KEY = process.env.STEAM_API_KEY || "YOUR_API_KEY";

app.get("/steam-profile", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const steamId = req.query.steamId || "76561197960435530";
    const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamId}&format=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Steam API error: ${response.statusText}`);

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy running on http://localhost:${PORT}`);
});
