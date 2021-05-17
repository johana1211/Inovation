
import styled from "styled-components";

type Cliks = {
  click: number, 
  setClick: any
}

export const Homes = ({click, setClick} : Cliks )=> {

  return (
    <StyledHomes>
      <div>
        <span className='home'>
          <button className='btn'  onClick={() => setClick(0)}>Home</button>
        </span>
        <span className='Objetivos'>
          {" "}
          <button className='btn' onClick={() => setClick(1)} >Objetivos</button>
        </span>
        <span className='Vision'>
          {" "}
          <button className='btn'  onClick={() => setClick(2)}>Visión</button>
        </span>
        <span className='Contactos'>
          {" "}
          <button className='btn' onClick={() => setClick(3)}>Contactos</button>
        </span>
      </div>
    </StyledHomes>
  );
};


const StyledHomes = styled.div`

padding: 1rem; 
  background: rgb(240, 240, 240);
  display: flex;
  margin: 0.5rem;
  border: 1rem;
  width: auto;
  flex-direction: row-reverse;
  height: 2rem;

  
  .btn{
    text-decoration: none;
    border-radius: 99rem;
    padding: 0.5rem;
    color: #050C34;
  }
}

// 
`;
