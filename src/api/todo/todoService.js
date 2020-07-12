const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOpitions({ new: true, runValidators: true });

module.exports = Todo;