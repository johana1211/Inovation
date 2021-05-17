import React from "react";
import styled from "styled-components";

const Contactos: React.FunctionComponent<{}> = (props) => {
  return (
    <StyledCont>
      <h1 className='title'>Datos de la Empresa</h1>

      <div className='text'>Avda. Belgrano Barrio nº 7
        8º Planta Modulo 4
        Edificio Center
        45626 Sevilla
        Telefono [+54] 9543522
        Email info@innovacion.com
      </div>
    </StyledCont>
  );
};
export default Contactos;

const StyledCont = styled.div`
padding: 0.5rem; 
.contenedor{
    display: flex;
    flex-direction: inherit;
    width: 60rem;
}
padding: 0.5rem;
.title{
    border-bottom: 0.05rem solid black;
    height: 2.4rem;
    max-width: 90rem;
    padding: 0;
    margin: 1.5rem auto 0 auto;
}
.text{
    background: #fff1e6;
    max-width: 85rem;
    justify-content: center;
    margin-block: initial;
    margin: 1rem;
    padding: 1.0em;
    font-family: Georgia, serif;
    font-size: 16px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #000000;
    
}
.imgg{
    padding: 1rem; 
}

  }

`;
