const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register =require('./Controllers/register');
const signin =require('./Controllers/signin');
const profile =require('./Controllers/profile');
const image =require('./Controllers/image');
const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '1234',
    database : 'smart-brain'
  }
});

const app =express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{res.send(database.users)})

app.post('/signin', (req,res)=>{signin.handlesignin(req,res,db,bcrypt)})

app.post('/register',(req,res)=>{ register.handleRegister(req,res,db,bcrypt)})

app.get('/profile/:id',(req,res)=>{profile.handleprofile(req,res,db)})

app.put('/image',(req,res)=>{image.handleimage(req,res,db)})
app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)})

app.listen(3001, ()=> {
  console.log('app is running on port 3001');
})