//import router[] from './routes/lista1'
const express = require('express')
const app = express()
/* criar o endpoint */

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const routes = require('./routes/routes')
app.use('/', routes)


app.listen('3000', function(){
    console.log('Server up port 3000');
})