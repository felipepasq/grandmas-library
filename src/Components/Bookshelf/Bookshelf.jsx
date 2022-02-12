import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Books,Books2 } from "./Books";

    const BookShelfContainer = styled.div`
        background-image: url(/assets/bookcase.svg);
        position: absolute;
        bottom: 210px;
        background-size: 400px;
        display: flex;
        flex-direction: column;
        height: 245px;
        width: 400px;
        z-index: 1;
        margin-left: 70px;
        padding-left: 20px;
    `

    const Shelf = styled.div`
        
        width: 70%;
        height: 75px;
        position: absolute;
        top: ${props=>props.bottomShelf?'150px':'50px'};
        display: inline-flex;
        justify-content: ${props=>props.bottomShelf && 'flex-end'};
        padding: 0 2px 0;
        min-width: 100px;
    `

 
    const Book = styled.div`
     
        img{   
            height: 75px;
            width: 26.666px;
            object-fit: fill;
        }

    `

    export function BookShelf () {

        const [topBooks,setTopBooks] = useState(Books);
        const [bottomBooks,setBottomBooks] = useState(Books2);
    

        
        return  (
            <BookShelfContainer>
            <DragDropContext>
          
                <Droppable droppableId="Shelf" direction="horizontal">
                {(provided) => {
                    return  (
                        <Shelf
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                            display:"inline-flex"
                        }}
                        >
                       {topBooks.map((value,index) => {
                            return (
                            <Draggable
                            key={value.id}
                            draggableId={value.id}
                            index={index}
                            >
                                {(provided) => {
                                    return (
                                <Book
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                >
                                    <img src={value.url} alt={value.title}/>
                                </Book>
                            
                                    )
                                }}
                                
                            </Draggable>
                            );
                        })}
                         {provided.placeholder}
                        </Shelf>
                    )
                }}
                </Droppable>   

                <Droppable droppableId="bottomShelf" direction="horizontal">
                {(provided) => {
                    return  (
                        <Shelf bottomShelf
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                            display:"inline-flex"
                        }}
                        >
                       {bottomBooks.map((value,index) => {
                            return (
                            <Draggable
                            key={value.id}
                            draggableId={value.id}
                            index={index}
                            >
                                {(provided) => {
                                    return (
                                <Book
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                >
                                    <img src={value.url} alt={value.title}/>
                                </Book>
                            
                                    )
                                }}
                                
                            </Draggable>
                            );
                        })}
                         {provided.placeholder}
                        </Shelf>
                    )
                }}
                </Droppable>     
        
            </DragDropContext>
           
            </BookShelfContainer>
        )
    }