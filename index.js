const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const employeeRoutes = require("./routes/EmployeeRoutes");

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://pavan:pavan@cluster0.x7ckclz.mongodb.net/MyCompany"
);
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error while connecting to database");
});
db.on("open", () => {
  console.log("Connected to Database");
});

app.use(express.json());
app.use(cors());
app.use("/employees", employeeRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
