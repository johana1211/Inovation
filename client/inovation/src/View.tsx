import view from "./image/view.jpg";
import styled from "styled-components";

const View = () => {
  return (
    <StyledView>
      <h1 className="title">Visión</h1>
      <div className='contenedor'>
        <div className="text">
          Brindar servicios de calidad, excelencia e integralidad. Ser
          percibidos como un aliado estratégico, a través de la generación de
          valor y con un alto nivel de satisfacción de sus clientes, empleados y
          socios.
        </div>
        <div className='imgg'>
          <img src={view} width="450" height="300" alt="Not Found" />
        </div>
      </div>

      <h1 className="title">Compromiso</h1>
      <div className='contendor'>

      <div className="text">
        Compartiendo conocimientos, experiencias y esfuerzo, para poder ofrecer
        el mejor servicio. Supone trabajar con liderazgo bajo un método, en un
        ambiente que promueva el enriquecimiento, en el cual se valoran y se
        respetan todas las opiniones e ideas.
      </div>
      </div>
 
    </StyledView>
  );
};
export default View;

const StyledView = styled.div`

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
