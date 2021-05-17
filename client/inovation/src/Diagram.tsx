import React from "react";
import styled from "styled-components";
import team from "./image/team.png";
import charla from "./image/charla.svg";
import tiempo from "./image/tiempo-rapido.svg";
import suitcase from "./image/suitcase.png";
import User from "./image/User.png";
import configuraciones from "./image/responsive.png";
//import responsive from "./image/configuraciones.svg";

const Diagram: React.FunctionComponent<{}> = (props) => {
  return (
    <StyledDiagram>
      <h1 className='title'>Innovación</h1>
      <div className='contenedor'>
      <div className="imagg">
        <img src={User} width="200" height="200"  border-radius= "99" alt="Not Found" />
      </div>
      <div className="time">
        <img src={tiempo} width="100" height="100"  border-radius= "99" alt="Not Found" />
      </div>
      <div className="team">
        <img src={team} width="100" height="100"  border-radius= "99" alt="Not Found" />
      </div>
      <div className="charla">
        <img src={charla} width="100" height="100"  border-radius= "99" alt="Not Found" />
      </div>
      <div className="suit">
        <img src={suitcase} width="100" height="100"  border-radius= "99" alt="Not Found" />
      </div>
      <div className="config">
        <img src={configuraciones} width="100" height="100"  border-radius= "99" alt="Not Found" />
      </div>
      </div>

    </StyledDiagram>
  );
};
export default Diagram;

const StyledDiagram = styled.div`

  padding: 0.5rem;
  .title{
      border-bottom: 0.05rem solid black;
      height: 2.4rem;
      max-width: 90rem;
      padding: 0;
      margin: 1.5rem auto 0 auto;
  }

.contenedor{
  background: rgb(240, 240, 240);

  .imagg {
    position: absolute;
    left: 28rem;
    top: 50rem;
  }
  .time{  
    position: absolute;
    left: 50rem;
    top: 40rem;
  }
  .team{
    position: absolute;
    left: 12rem;
    top: 60rem;
  }
  .charla{
    position: absolute;
    left: 30rem;
    top: 35rem; 
  }
  .suit{
    position: absolute;
    left: 10rem;
    top: 40rem;
  }
  .config{
    position: absolute;
    left: 50rem;
    top: 60rem;
  }
}

`;
