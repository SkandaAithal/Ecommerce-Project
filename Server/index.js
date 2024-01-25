const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const connectToDb = require("./db/connection");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(cors({ origin: "*", credentials: true }));

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../Client/build");
app.use(express.static(buildPath));

const userRoutes = require("./routes/users.routes");
const productRoutes = require("./routes/products.routes");
const imageRoutes = require("./routes/images.routes");
const { errorMonitor } = require("stream");

// ! upload images and files

// ! APIs
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/images", imageRoutes);
app.use((err, req, res, next) => {
  if (err.statuscode) {
    return res.status(err.statuscode).json({
      error: true,
      message: err.message,
    });
  }
  if (err.code === 11000) {
    if (err.message.includes("email")) {
      return res
        .status(401)
        .json({ error: true, message: "Email already Exists" });
    } else {
      return res
        .status(401)
        .json({ error: true, message: "Mobile number already Exists" });
    }
  }
  console.log(err);
  res.status(500).json({
    error: true,
    message: err.message,
  });
});

const startServer = async () => {
  try {
    app.listen(4000, () => {
      console.log("server running on port 4000");
    });

    await connectToDb(
      "mongodb+srv://skandaaithal:125678@skandaecommerce.comdfrj.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db connected");
  } catch (err) {
    console.log(err.message);
  }
};

startServer();
