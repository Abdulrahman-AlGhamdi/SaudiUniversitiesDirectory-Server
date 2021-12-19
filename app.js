const express = require('express')
const app = express()

app.use(express.json())

app.use('/univeristies', require('./routes/universities'))

app.use('*', (req, res) => {
    res.send(`<b>Welcome to Saudi Universities Directory Server</b><br>
    this server containing all the public saudi universities information you need<br><br>
    for more info and how to use the api, please head to<br>
    (<a href="https://github.com/Abdulrahman-AlGhamdi/SaudiUniversitiesDirectory-Server" target="_blank">Github Project Page</a>)`)
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})