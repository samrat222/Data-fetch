const axios = require("axios");
const router = require("express").Router();
const Crypto = require("../schemas/crypto.schemas");

// Function to fetch data from WazirX API and store it in the database
const fetchDataAndStore = async () => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const top10Data = Object.values(response.data).slice(0, 10);

    // Clear existing data in the database
    await Crypto.deleteMany({});

    // Save new data to the database
    await Crypto.insertMany(top10Data);
    console.log("Data fetched and stored successfully.");
  } catch (error) {
    console.error("Error fetching or storing data:", error.message);
  }
};

// Endpoint to fetch data from the database and store
router.get("/fetch-and-store", async (req, res) => {
  try {
    await fetchDataAndStore();
    res.json({ message: "Data fetched and stored successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to get data from the database
router.get("/get-data", async (req, res) => {
  try {
    const data = await Crypto.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Schedule data fetch every hour
setInterval(fetchDataAndStore, 3600000);

// Initial data fetch on server start
fetchDataAndStore();

module.exports = router;
