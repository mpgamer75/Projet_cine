const express = require('express');
const app=express();
const port = 3000;

let users = [
    {id:1, name : 'Charles'},
    {id:2, name : 'Karina'},
    {id: 3, name: 'Chaewon'},
];

app.use(express.json());

app.get('/users',(req,res)=>{ // récupère tous les users 
    res.json(users);
});

app.get('users/id:',(req,res)=>{
    const user=users.find(u=>u.id ===parseInt(req.params.id));
    if(!users) return res.status(404).send('User not found');
    res.json(user);
});

app.post('/users',(req,res)=>{
    const user = users.find(u=>u.id ===parseInt(req.params.id));
    if(!users) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');
    users.splice(userIndex, 1);
    res.status(204).send();
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });