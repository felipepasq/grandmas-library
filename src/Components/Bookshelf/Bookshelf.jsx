import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
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

        const [topBooks,setTopBooks] = useState(Books.filter((book)=>book.shelf ==='1'));
        const [bottomBooks,setBottomBooks] = useState(Books.filter((book)=>book.shelf ==='2'));



        function addBookOnSpecificPosition (destination,source,destinationIndex,sourceIndex){

            const [reorderedList] = source.splice(sourceIndex,1);
            destination.splice(destinationIndex,0,reorderedList);

        }
        
        function swapShelf(operation,result){

            if(operation ==='topToBottom') {
            const destination = bottomBooks;
            const source = topBooks;
            addBookOnSpecificPosition(destination,source,result.destination.index,result.source.index)
            setBottomBooks(destination)
            setTopBooks(source)
            
        }

            else {
            const destination = topBooks;
            const source = bottomBooks;
            addBookOnSpecificPosition(destination,source,result.destination.index,result.source.index)
            setTopBooks(destination)
            setBottomBooks(source)
            
        }

            }
        

        function handleOnDragEnd (result) {
           
            const {destination,source} = result;
           
            if(!destination) return;

            if(destination.droppableId === source.droppableId && source.droppableId ==='topShelf')  {
            addBookOnSpecificPosition(topBooks,topBooks,result.destination.index,result.source.index)
            setTopBooks(topBooks)
        }

            if(destination.droppableId === source.droppableId && source.droppableId ==='bottomShelf')   {
            addBookOnSpecificPosition(bottomBooks,bottomBooks,result.destination.index,result.source.index)
            setBottomBooks(bottomBooks)
        }


            if(destination.droppableId !== source.droppableId && destination.droppableId ==='bottomShelf')  { 
            swapShelf('topToBottom',result)
        }

            if(destination.droppableId !== source.droppableId && destination.droppableId ==='topShelf')  { 
            swapShelf('bottomToTop',result)    
        }
        
      
        }
       
       
       
        
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