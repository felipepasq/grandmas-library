import {  createContext,useState } from "react";
import { useContext } from "react";
import { Books } from "../Books";


export const BookContext = createContext({});

const byKey = (a,b,key) => (a[key] > b[key] ? 1 : -1)

export function BoookProvider (props) {

    const [topBooks,setTopBooks] = useState(Books);
    const [bottomBooks,setBottomBooks] = useState([]);
    const [testString,setString] = useState('alo')
    const {children} = props;
    
    

    function addBookOnSpecificPosition (destination,source,destinationIndex,sourceIndex){

        const [reorderedList] = source.splice(sourceIndex,1);
        destination.splice(destinationIndex,0,reorderedList);
        

    }

    function swapShelf(operation,result){

        if(operation ==='topToBottom') {
        const destination = bottomBooks;
        const source = topBooks;
        addBookOnSpecificPosition(destination,source,result.destination.index,result.source.index)
        setBottomBooks([...destination])
        setTopBooks([...source])
        
    }

        else {
        const destination = topBooks;
        const source = bottomBooks;
        addBookOnSpecificPosition(destination,source,result.destination.index,result.source.index)
        setTopBooks([...destination])
        setBottomBooks([...source])
        
    }

        }
    

    function handleOnDragEnd (result) {
       
        const {destination,source} = result;
       
        if(!destination) return;

        if(destination.droppableId === source.droppableId && source.droppableId ==='topShelf')  {
        addBookOnSpecificPosition(topBooks,topBooks,result.destination.index,result.source.index)
        setTopBooks([...topBooks])
    }

        if(destination.droppableId === source.droppableId && source.droppableId ==='bottomShelf')   {
        addBookOnSpecificPosition(bottomBooks,bottomBooks,result.destination.index,result.source.index)
        setBottomBooks([...bottomBooks])
    }


        if(destination.droppableId !== source.droppableId && destination.droppableId ==='bottomShelf')  { 
        swapShelf('topToBottom',result)
    }

        if(destination.droppableId !== source.droppableId && destination.droppableId ==='topShelf')  { 
        swapShelf('bottomToTop',result)    
    }
    
  
    }
    
    function orderBooks (operation) {
        
        const orderedBottomBooks = bottomBooks.sort((a, b) => byKey(a,b,operation));
        const orderedTopBooks = topBooks.sort((a, b) => byKey(a,b,operation));
     
        setTopBooks([...orderedTopBooks]);
        setBottomBooks([...orderedBottomBooks])


    }
   


   

    return (
    
      
        <BookContext.Provider value={{topBooks,bottomBooks,setTopBooks, addBookOnSpecificPosition, swapShelf, handleOnDragEnd, orderBooks,testString,setString  }}>
            {children}
        </BookContext.Provider>
        
    )

}

export const useBook = () => {
    return useContext(BookContext)
}