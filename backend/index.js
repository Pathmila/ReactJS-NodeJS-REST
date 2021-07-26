const express = require("express");
const mysql = require("mysql");

//create connection 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mybakery'
})

//connect to MySQL 
db.connect(err => {
    if(err){
        throw err
    }
    console.log('MySQL Connected')
})

const app = express()

//create database
app.get('/createdb', (req, res) => {
    let sql = "CREATE DATABASE mybakery"
    db.query(sql, err => {
        if(err){
            throw err
        }
        res.send("Database created")
    })
})

//create table
app.get('/createItem', (req, res) => {
    let sql = "create table item (id int AUTO_INCREMENT, name VARCHAR(225), price INT, PRIMARY KEY(id))"
    db.query(sql, err => {
        if(err)    {
            throw err
        }
        res.send("Item table created");
    })
})

//insert item
app.get('/item', (req, res) => {
    let post = {name: 'cup cake', price: '80'}
    let sql = "insert into item set ?"
    let query = db.query(sql, post, err => {
        if(err){
            throw err
        }
        res.send("Item added")
    })
})

//select item
app.get('/getitem', (req,res) => {
    let sql = "select * from item"
    let query = db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        console.log(result);
        res.send("Item details fetched")
    })
})

//update item
app.get('/updateitem/:id' , (req,res) => {
    let newname = "updated name";
    let sql = `update item set name= '${newname}' where id = ${req.params.id}`    
    let query = db.query(sql , err => {
        if(err){
            throw err
        }
        res.send("Item updated")
    })
})

//delete item
app.get('/deleteitem/:id' , (req,res) => {
    let sql = `delete from item where id = ${req.params.id} `
    let query = db.query(sql, err => {
        if(err){
            throw err
        }
        res.send("Item deleted")
    })
})

app.listen("3002", () => {
    console.log("Server running on port 3002")
})