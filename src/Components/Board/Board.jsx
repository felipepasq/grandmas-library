import styled from "styled-components";

const BoardContainer = styled.div`
    background-image: url('/assets/board.svg');
    background-size: 330px;
    height: 150px;
    width: 330px;
    position: absolute;
    bottom: 10px;
`
const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: center;
    padding-right: 5px;
    margin: 15px 0 0 0;
    height: fit-content;

    p {
        font-size: 14px;
        text-transform: uppercase;
        margin-right: 35px;
        margin-bottom: 5px;
        letter-spacing: 3px;
        color: #cec8d5;
        font-family: 'Roboto',sans-serif;
        height: fit-content;
        width: fit-content;
    }

`
const ButtonsRow = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 10px;
   
`
const ButtonContainer = styled.div`
    background-image:url('/assets/filter_button.svg') ;
    background-size: 40px;
    width: 43px;
    height: 45px;
    z-index: 999;
  
    img {
        padding: 5px;
        width: 25px;
        height: 25px;
    }

    button { 
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
    }
    
`
const OrganizeContainer = styled.div` 
        border-top: 2px solid #E7DFEF;
        width: 150px;
        height: 45px;
        margin-top: 5px;
        padding-top: 5px;

    img {
        width: 150px;
        height: auto;
        border: 0;
    }

    button { 
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
    }
`

const GrandmasImage = styled.img`
    position: fixed;
    bottom: 0;
    transform: translateX(-80px);
    z-index: 99;
    height: 225px;
`

export function Board() {

    return  (
    <>
        <BoardContainer>
            
            <PanelContainer>
            
            <p>Sort By</p>
            <ButtonsRow>

                <ButtonContainer>
                <button>
                    <img src="/assets/filter_alphabetic.svg" alt=""/>
                </button>
                </ButtonContainer>

                <ButtonContainer>
                    <button>
                    <img src="/assets/filter_colors.svg" alt="" />
                    </button>
                </ButtonContainer>

                <ButtonContainer>
                <button>
                    <img src="/assets/filter_sizes.svg" alt="" />
                </button>
                </ButtonContainer>
              
            </ButtonsRow>
   
            <OrganizeContainer>

            <button>
                    <img src="/assets/button.svg" alt="" />
            </button>

            </OrganizeContainer>

            </PanelContainer>
        </BoardContainer>
      <GrandmasImage src="assets/lady.svg"/>
    </>
    )

}