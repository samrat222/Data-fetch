const express = require("express");
const cors = require("cors");
const data = require("./routes/data.routes");
require("./Db");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/v1", data);
