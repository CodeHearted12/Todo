
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');


const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));

let listOfTodos = [];

  app.get('/', function(request, response) {
    response.render('todos', { todos: listOfTodos});
 });
  app.post ('/', function(request, response) {
  console.log (request.body)

let id = (Math.random() *1000)
newTodoObject = { text: request.body.newTodo, id: id}
listOfTodos.push(newTodoObject);

  console.log(listOfTodos);
  response.redirect('/');


});
app.post('/mark-complete/:id') function(request.response){
let idOfTheTodoThatImMarkingComplete = parseInt (request.params.id);
let completedTodo = listOfTodos.find(function (todo) {
  return todo.id === idOfTheTodoThatImMarkingComplete

});
competedTodo.compete = true;
response.redirect('/');
)
 app.listen(3000, function () {
   console.log("Hello")
 });
