

function TodoItem({ id, title, status,handleToggle,handleDelete }) {
    
    return (
        <li key={id}>
            {title} - {status ? "Completed" : "not Completed"}
            <button onClick={() => handleToggle(id)}>Toggle Button</button>
            <button onClick={() =>handleDelete(id)}>Delete Button</button>
        </li>
    )
}
export default TodoItem;