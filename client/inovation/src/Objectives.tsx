import innovacion from "./image/innovacion.jpg";
import styled from "styled-components";

const Objectives = () => {
  return (
    <StyledObj>
      <h1 className="title ">Objetivos</h1>
      <div className="contenedor">
        <span className="text">
          Los fines de la tecnología y la ciencia son la invención de materiales
          e ideas para satisfacer las necesidades de la gente y la búsqueda del
          conocimiento. La ciencia utiliza la experimentación y la observación
          en la obtención de conocimiento para aclarar fenómenos naturales.
        </span>
        <div className='imgg'>
        <img src={innovacion} width="450" height="300" alt="Not Found" />
        </div>
      </div>
    </StyledObj>
  );
};
export default Objectives;

const StyledObj = styled.div`
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
