import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ToDoCard from './ToDoCard';
import { useState } from "react";

const DraggableArea = () => {
  // Handle drag and drop reordering
  const [cards, setCards] = useState([
    { id: '1', text: 1 },
    { id: '2', text: 2 },
    { id: '3', text: 3 },
    { id: '4', text: 4 },
  ]);
  
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newCards = Array.from(cards);
    const [movedCard] = newCards.splice(result.source.index, 1);
    newCards.splice(result.destination.index, 0, movedCard);
    
    setCards(newCards);
  };
  return (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cards.map((card, index) => (
                  <Draggable
                    key={card.id}
                    draggableId={card.id}
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
                        <ToDoCard text={card.text} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
  )
}

export default DraggableArea;
