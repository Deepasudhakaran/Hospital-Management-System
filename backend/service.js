

const express = require('express');
const app = express();
const connectDB = require('./Config/dbConnection');
const indexRouter = require('./routes/index.route');
require('dotenv').config();

const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

connectDB();
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
