const express = require('express');
const path = require("path"); 
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Express middleware
const PORT = process.env.PORT || 3000;;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Use Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.get('/', function(req, res){
    res.sendFile('./public/index.html')
})

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});