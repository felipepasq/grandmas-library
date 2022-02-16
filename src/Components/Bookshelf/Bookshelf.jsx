import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useBook } from "../../Contexts/BookContext";
import devices from "../../utils/devices";



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


        @media ${devices.tablet}{
        height: 338px;
        width: 550px;
        background-size: 550px;
        margin-top: -220px;
        padding-left: 30px;
        }
    `

    const Shelf = styled.div`
        width: fit-content;
        height: 75px;
        margin-top: ${props=>props.bottomShelf?'22px':'50px'};
      
        display: inline-flex;
        justify-content: ${props=>props.bottomShelf && 'flex-end'};
        padding: 0 2px 0;
        min-width: 278px;

        @media ${devices.tablet}{
           margin-top: ${props=>props.bottomShelf?'31px':'67px'};
           width: 380px;
           height: 105px;
        }


    `

 
    const Book = styled.div`
     
        img{   
            height: 75px;
            width: 26.666px;
            object-fit: fill;

            @media ${devices.tablet}{
                height:106px;
                width: 35.666px;
        }
        }

    `

    

    export function BookShelf () {

        

       const {
        topBooks,
        bottomBooks,
        handleOnDragEnd,
       } = useBook();
       

      
       
      

  
     
        
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