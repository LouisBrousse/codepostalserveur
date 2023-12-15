
import express from 'express'
import axios from 'axios' //exigé car ES6 (initialisation)
const app = express()


// Set EJS as templating engine
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.get('/', function(request, response) {
    response.render('form') 
})


app.post('/result', async function(request, response) { 
    const zipcode = request.body.zipcode; 
    const resp = await axios.get(`https://geo.api.gouv.fr/communes?codePostal=${zipcode}`);
    const result = resp.data;
    response.render('result', {result});
 })

app.get('/form', function(request, response) {
    response.render('form') 
})

 
app.listen(3003, function() {
   console.log('listening to port 3003')
})


