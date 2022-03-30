const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())

app.get('/users', (req, res) => {
    let page = +req.query.page; 
    let size = req.query.size; 
     if (!page) { 
         page = 1;
    } 
    if (!size) {
        size = 5;
    } 
    const usersList = [...Users] 
    const users = paginate(usersList,size,page)
    res.status(200).send({
        page:page,
        size:size,
        data: users,
    });
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
     const usersList = [...Users]
    const user = usersList.find(user => user.id === +id)
     res.status(200).send(user);
})

function paginate(array, size, page) {
     return array.slice((page - 1) * size, page * size);
}

app.listen(3000)

const Users=[
        {"id":1,"phone":"12332120","email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
        {"id":2,"phone":"12332120","email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
        {"id":3,"phone":"12332120","email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
        {"id":4,"phone":"12332120","email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
        {"id":6,"phone":"12332120","email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"},
        {"id":7,"phone":"12332120","email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},
        {"id":8,"phone":"12332120","email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},
        {"id":9,"phone":"12332120","email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},
        {"id":10,"phone":"12332120","email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},
        {"id":11,"phone":"12332120","email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},
        {"id":12,"phone":"12332120","email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}
]