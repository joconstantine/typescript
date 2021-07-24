import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url)
  .then(response => {
    const todo = response.data as Todo;

    const id: number = todo.id;
    const title: string = todo.title;
    const completed: boolean = todo.completed;

    logTodo(id, title, completed);

  });

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
      The Todo with ID: ${id},
      Has a title of: ${title},
      Is it finished? ${completed}
    `)
}