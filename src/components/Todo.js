import React from 'react';

const Todo = ({setTodos,todo,todos,text}) => {
    const deleteHandler= () =>{
        setTodos(todos.filter((el) => el.id!==todo.id))
    }
    const completeHandler = () =>{
        setTodos(todos.map((item) => {
            if(item.id===todo.id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div>
            <div className='todo'>
                <li className={`todo-item ${todo.completed?"completed":''}`} >{text}</li>
                <button onClick={completeHandler} className='complete-btn'><i className="fas fa-check"></i></button>
                <button onClick={deleteHandler} className='trash-btn'><i className="fas fa-trash"></i></button>
            </div>
        </div>
    );
};

export default Todo;