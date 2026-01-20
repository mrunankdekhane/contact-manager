const express = require("express");
const contactRoute = require("./routes/contact");

const { connectMongoDB } = require("./connect");

connectMongoDB("mongodb://localhost:27017/my-contact"). 
then(() => console.log("MongoDB connected"));

const app = express();


const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/api/contacts", contactRoute);

app.listen(port, () => {
    console.log(`Server started`);
});


