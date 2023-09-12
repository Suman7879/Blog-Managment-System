const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/BlogManagmentSystem");

const express = require("express");
const app = express();

const isBlog = require("./middlewares/isBlog");
app.use(isBlog.isBlog)

const adminRoute = require("./routes/adminRoute");
app.use('/', adminRoute);

const userRoute = require("./routes/userRoute");
app.use('/', userRoute);


app.listen(3000, function () {
    console.log("Server is running")
});
