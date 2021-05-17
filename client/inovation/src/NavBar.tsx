import React from "react";
import styled from "styled-components";
import tecnologia from "./image/tecnologia.jpg"


const NavBar: React.FunctionComponent<{}> = () => {
  return (
    <StyledNavBar>
      <div className='im'>
      <img src={tecnologia} width= '1500' height='300' alt=''/>
      </div>
     
    </StyledNavBar>
  );
};
export default NavBar;

const StyledNavBar = styled.div`

  padding: 1rem;
  background: #012a4a; 
  width: auto;
  height: 20rem;
  margin: 0.5rem; 
  .im{
    width: 95rem;
    height: 15rem;
    margin: 0.5rem
    
  }
`;
