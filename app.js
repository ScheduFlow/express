
const express = require('express')
const app = express()
const router = express.Router();
const port = 3000

const schedule = require('scheduflow-express-router-npm')

app.set('port', process.env.PORT || 3000);

app.use('/',schedule)


app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

