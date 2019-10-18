const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "nome": "Nelson", "email": "nelsoncarmo@gmail.com"}

server.get('/users/:id', (req,res) => {
  const { id } = req.params;
  return res.json({ message: `aaaaalo ${id}` });
  //return res.send('alo mundo');
})

/*
server.listen(3000, function () {
  console.log("servidor rodando");
});
*/

server.listen(3000);



