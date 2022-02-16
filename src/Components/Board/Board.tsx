import styled from 'styled-components';
import { useBook } from '../../Contexts/BookContext';
import devices from '../../utils/devices';

const BoardContainer = styled.div`
        background-image: url('/assets/board.svg');
    
        background-size: 330px;
        height: 150px;
        width: 330px;
        position: absolute;
        bottom: 10px;
        z-index: 1;

        @media ${devices.tablet}{
            
            transform: translateX(-240px);
            background-size: 400px;
            position: absolute;
            height:184px;
            width: 403px;
            bottom:45px;
        }


    `;
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

    `;
const ButtonsRow = styled.div`
        display: inline-flex;
        flex-wrap: wrap;
        gap: 10px;
    
    `;

interface buttonContainerProps {
  isActive:boolean;
}

const ButtonContainer = styled.div<buttonContainerProps>`
       
        background-image: url(${(props) => (props.isActive ? '/assets/filter_button_active.svg' : '/assets/filter_button.svg')});
        background-size: 40px;
        width: 43px;
        height: 45px;
        z-index: 999;
    
        img {
            padding: 5px;
            width: 25px;
            height: 25px;

            @media ${devices.tablet}{
            padding:0;       
            }



        }

        button { 
            padding: 0;
            border: none;
            background: none;
            cursor: pointer;
        }

        @media ${devices.tablet}{
            background-size:53px;
            width: 58px;
            height: 58px;
            
        }
    
    `;
const OrganizeContainer = styled.div` 
            border-top: 2px solid #E7DFEF;
            width: fit-content;
            height: 45px;
            margin-top: 5px;
            padding-top: 5px;

        img {
            width: 150px;  
            height: auto;
            border: 0;

            @media ${devices.tablet}{
            width: 180px;        
            }
        }

        button { 
            padding: 0;
            border: none;
            background: none;
            cursor: pointer;

    

        }
    `;

const GrandmasImage = styled.img`
        position: fixed;
        bottom: 0;
        transform: translateX(-80px);
        z-index: 99;
        height: 225px;
      

        @media ${devices.tablet}{
            height:420px;
            transform: translateX(-390px);
        }
    `;

export function Board() {
  const {
    orderBooks,
    handleClick,
    isTitleActive,
    isColorActive,
    isSizeActive,
  } = useBook();

  return (
    <>
      <BoardContainer>

        <PanelContainer>

          <p>Sort By</p>
          <ButtonsRow>

            <ButtonContainer isActive={isTitleActive} onClick={() => handleClick('title')}>
              <button type="button">
                <img src="/assets/filter_alphabetic.svg" alt="" />
              </button>
            </ButtonContainer>

            <ButtonContainer isActive={isColorActive} onClick={() => handleClick('color')}>
              <button type="button">
                <img src="/assets/filter_colors.svg" alt="" />
              </button>
            </ButtonContainer>

            <ButtonContainer isActive={isSizeActive} onClick={() => handleClick('size')}>
              <button type="button">
                <img src="/assets/filter_sizes.svg" alt="" />
              </button>
            </ButtonContainer>

          </ButtonsRow>

          <OrganizeContainer>

            <button type="button" onClick={() => orderBooks()}>
              <img src="/assets/button.svg" alt="" />
            </button>

          </OrganizeContainer>

        </PanelContainer>
      </BoardContainer>
      <GrandmasImage src="assets/lady.svg" />
    </>
  );
}
