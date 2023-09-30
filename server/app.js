const express = require('express');
const app = express();
app.use(express.json());

const connectDB = require('./config/db');
app.use(require('./routes/router'));


app.get('/', (req, res, next) => {
    res.json("app start sucessfully");
    next();
});


const port = process.env.PORT || 5000;
connectDB();

app.listen(port, () => {
    console.log(`server is live at port number : ${port}`)
});

