import './Todo.css'

function Todo({ title }) {
  function deleteTodo(id) {
    console.log("deleteTodo", title, id)
    // deleteTodo Sprint 15 afronden 1
  }

  return (
    <div className='todo'>
      <h2>{ title }</h2>
      <button onClick={() => deleteTodo(1)}>Delete</button>
    </div>
  );
}

export default Todo;