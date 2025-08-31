require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db.mysql');
const setViewEngine = require('./config/viewEngine');
const apiRouter = require('./routes/api');

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setViewEngine(app);
connectDB();
sequelize.sync(); // sync model → tạo bảng

app.get('/', (req, res) => res.render('index', { title: 'Express + MySQL' }));
app.use('/api/v1', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
