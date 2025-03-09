import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ToDoCard from './ToDoCard';
import { useEffect, useState } from "react";
import {get_todos} from './api/todo'

const DraggableArea = () => {
  // Handle drag and drop reordering
  
  const [todos, setTodos] = useState([])
  useEffect(() => {
    get_todos() 
      .then(data => {
        console.log('Todos', data);
        setTodos(data)
      })
      .catch(error => {
        console.error('Failed to fetch todos: ', error);
      })
  }, [])

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newtodos = Array.from(todos);
    const [movedCard] = newtodos.splice(result.source.index, 1);
    newtodos.splice(result.destination.index, 0, movedCard);
    
    setTodos(newtodos);
  };

  return (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.map((card, index) => (
                  <Draggable
                    key={card.id}
                    draggableId={card.id.toString()} // Need to be string for dnd
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          margin: '8px 0',
                        }}
                      >
                        <ToDoCard text={card.text} completed={card.completed}  />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable> </DragDropContext>
  )
}

export default DraggableArea;
