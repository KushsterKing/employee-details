import express from 'express'
import {Employee} from './models'
// import employeeHtml from './client/employee.ejs'
import ejs from 'ejs'
import fs from 'fs';

const __dirname = fs.realpathSync('.');

const app = express();

app.set('views', __dirname + '/client');
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {

    let query = {};

    if(req.query.name){
        query = {...query, name: {'$regex': req.query.name}}
    }

    if(req.query.profile){
        query = {...query, profile: {'$regex': req.query.profile}}
    }

    if(req.query.location){
        query = {...query, location: {'$regex': req.query.location}}
    }


    const employees = await Employee.find(query);

    res.send(JSON.stringify(employees))
});

app.get('/html', (req, res) => {
    res.render('employee')
});

app.listen(3000, () => {
    console.log('connected to port 3000')
});