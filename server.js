const express = require('express');


// Constants
const PORT = 5000;
//const HOST = '52.173.197.158';


//App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello Trifork, I would be glad to join your team');
});

app.listen(PORT, () => console.log(`Running on port:${PORT}`));
