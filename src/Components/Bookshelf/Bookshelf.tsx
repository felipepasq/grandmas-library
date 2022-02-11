import { useState } from "react"
import styled from "styled-components"
import { topShelfBooks,bottomShelfBooks } from "./Books"

    const BookShelfContainer = styled.div`
        background-image: url(/assets/bookcase.svg);
        transform: translateY(-160px);
        background-size: 400px;
        display: flex;
        flex-direction: column;
        height: 245px;
        width: 400px;
        z-index: 1;
        margin-left: 70px;
        padding-left: 20px;
    `

    const TopShelf = styled.div`
        width: 70%;
        height: 75px;
        position: absolute;
        top: 50px;
        display: inline-flex;
        padding: 0 2px 0;
    `

    const BottomShelf = styled.div`  
        width: 70%;
        height: 75px;
        position: absolute;
        top: 150px;
        display: inline-flex;
        justify-content: flex-end;
        padding: 0 2px 0;
    `
    const Book = styled.div`
     
        img{   
            height: 75px;
            width: 26.666px;
            object-fit: fill;
        }

    `
interface Books {
    id:number,
    title:string,
    size:number,
    url:string,
}

    export function BookShelf () {

        const [topBooks,setTopBooks] = useState<Books[]>(topShelfBooks);
        const [bottomBooks, setBottomBooks] = useState<Books[]>(bottomShelfBooks);

        
        return  (
            <BookShelfContainer>
            <TopShelf>
                {topBooks.map((value)=>{
                    return (
                    <Book key={value.title}>
                        <img src={value.url} alt={value.title}/>
                    </Book>
                    )
                })}       
            </TopShelf>
            <BottomShelf>
            {bottomBooks.map((value)=>{
                    return (
                    <Book key={value.title}>
                        <img src={value.url} alt={value.title}/>
                    </Book>
                    )
                })}   
            </BottomShelf>
            </BookShelfContainer>
        )
    }