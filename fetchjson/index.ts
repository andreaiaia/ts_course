import axios from 'axios';

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;
    
    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(ID, title, finished);
})

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The todo with ID: ${id}
        Has a title of: ${title}
        Is it finished= ${completed}
    `);
}