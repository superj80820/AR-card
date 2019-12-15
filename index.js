const express = require('express')
const path = require('path')
const app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})
