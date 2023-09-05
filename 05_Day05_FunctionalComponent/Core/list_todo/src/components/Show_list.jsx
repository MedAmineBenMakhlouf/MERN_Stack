import React from 'react'

const Show_list = ({ ToDoList,setListOfToDo,deleteTodo }) => {
    return (
        <>
            {ToDoList.map((todo, i) => {
                return (
                    <>
                        <ul key={i}>
                            <li>
                                <span style={todo.isCompleted
                                ?{textDecoration:'line-through'}
                                :{textDecoration:'none'}}>{todo.content}</span> <input type="checkbox" checked={todo.isCompleted}
                                onChange={(e)=>{
                                    // const updatedList =  [...ToDoList]
                                    // updatedList[i].isCompleted = !updatedList[i].isCompleted
                                    setListOfToDo([...ToDoList,!ToDoList[i].isCompleted])}
                                }/> <button onClick={()=>deleteTodo(i)}>Delete</button>
                            </li>
                        </ul> 
                    </>
                )
            })}
        </>
    )
}

export default Show_list