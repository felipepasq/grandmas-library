import { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useBook } from "../Board/BoardContext";
import { Books } from "./Books";



    const BookShelfContainer = styled.div`
        background-image: url(/assets/bookcase.svg);
       
        margin-top: -155px;
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
        width: fit-content;
        height: 75px;
        margin-top: ${props=>props.bottomShelf?'22px':'50px'};
        top: ${props=>props.bottomShelf?'150px':'50px'};
        display: inline-flex;
        justify-content: ${props=>props.bottomShelf && 'flex-end'};
        padding: 0 2px 0;
        min-width: 278px;
    `

 
    const Book = styled.div`
     
        img{   
            height: 75px;
            width: 26.666px;
            object-fit: fill;
        }

    `

    

    export function BookShelf () {

        

       const {
        topBooks,
        bottomBooks,
        handleOnDragEnd,
        setTopBooks
       } = useBook();
       
       

       useEffect(()=>{
        setTopBooks(Books)
       })
        
        return  (
            <BookShelfContainer>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="topShelf" direction="horizontal">
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
                            key={value.title}
                            draggableId={value.title}
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
                            key={value.title}
                            draggableId={value.title}
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