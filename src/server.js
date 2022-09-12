const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    console.log(5);
    res.sendFile(path.join(__dirname + '/index.html'));
}); 