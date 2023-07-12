require('dotenv').config();
const express  = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const TodoUser = require('./todoSc')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONN)
.then(() => console.log("Database Connected..."))
.catch((err) => console.log(err))

app.get('/', (req, res)=> {
    res.send('Hello Server.')
})

app.post('/send', async(req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const phone = req.body.phone;

    try {
        const data = await TodoUser.create({
            'name': name,
            'phone': phone,
        })
        res.send(req.body);
        const newTodoUser = new TodoUser(data);
        newTodoUser.save();
    } catch (err) {
        console.log(err);
    }
})

app.listen(8080, ()=> {
    console.log('Listening on port 8080');
})