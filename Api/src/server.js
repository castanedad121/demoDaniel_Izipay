const express = require("express");
const cors = require("cors");
const tokenRoutes = require("./routes/tokenRoutes");

const app = express();
const port = process.env.PORT || 4242;

app.use(express.json());
app.use(cors());

app.use("/api", tokenRoutes);

app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
