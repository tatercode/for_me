import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialItems = [
  { id: 'item-1', content: 'Item 1' },
  { id: 'item-2', content: 'Item 2' },
  { id: 'item-3', content: 'Item 3' },
];

function DragExample() {
  const [items, setItems] = useState(initialItems);

  const onDragEnd = (result) => {
    // If the item is dropped outside the list, do nothing.
    if (!result.destination) return;

    // Create a copy of the items.
    const reorderedItems = Array.from(items);

    // Remove the dragged item.
    const [removed] = reorderedItems.splice(result.source.index, 1);
    
    // Insert it at the new position.
    reorderedItems.splice(result.destination.index, 0, removed);
    
    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              padding: '8px',
              width: '250px',
              background: '#f0f0f0',
            }}
          >
           {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      userSelect: 'none',
                      padding: '16px',
                      margin: '0 0 8px 0',
                      background: snapshot.isDragging ? '#263B4A' : '#456C86',
                      color: 'white',
                      ...provided.draggableProps.style,
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragExample;
