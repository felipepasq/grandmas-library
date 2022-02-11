    import styled from "styled-components"
    import { Books } from "./Books"

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
    id:Number,
    title:String,
    size:Number,
    url:String
}

    export function BookShelf () {
        return(
            <BookShelfContainer>
            <TopShelf>
                <Book>
                    <img src="/assets/book_e.svg" alt="" />
              
                </Book>
             
             
            </TopShelf>
            <BottomShelf>
                <Book>
                    
                </Book>
            </BottomShelf>
            </BookShelfContainer>
        )
    }