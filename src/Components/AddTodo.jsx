import React, { useState } from "react";

function AddTodo(props) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleAddTodo = () => {
        props.handleClick(text);
        setText("")
    }

    return (
        <div>
            <input placeholder='Add Todo' value={text} onChange={handleChange} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
}
export default AddTodo