var express = require('express');
var cors = require('cors'); // <--- ADD THIS
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
const { syncDatabase } = require('./models');
var toolsRouter = require('./routes/tools');

var app = express();

app.use(cors()); // <--- ADD THIS (Place it before your routes)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CALL IT HERE
syncDatabase().then(() => {
    
    console.log("Database and Seeding process completed.");
});


// Keep your routes, but I recommend prefixing them for clarity
app.use('/api', indexRouter); // <--- Use /api prefix
app.use('/api/products', productsRouter);
app.use('/api/tools', toolsRouter);
// app.use('/api/users', usersRouter);
module.exports = app;