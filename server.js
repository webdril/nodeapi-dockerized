const express = require('express');


// Constants
const PORT = 5000;
//const HOST = '52.173.197.158';


//App
const app = express();


app.get('/api', (req, res) => {
	res.status(200).json({success: true, msg: 'Hello Trifork, I would be glad to join your team'});
});

app.get('/api/aboutme', (req, res) => {
	res.send('I am a cool dude who is in love with tech');
});

app.post('/api/message', (req, res) => {
	res.status(200).json({success: true, msg: 'Create a  new message'})
})










app.listen(PORT, () => console.log(`Running on port:${PORT}`));
