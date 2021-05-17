import { useState } from "react";
import NavBar from "./NavBar";
import { Homes } from "./Homes";
import Diagram from "./Diagram";
import Objectives from "./Objectives";
import View from "./View";
import Contactos from "./Contacto";

const Catalogue = () => {
  const [click, setClick] = useState(0);

  return (
    <div>
      <Homes click={click} setClick={setClick} />
      <NavBar />
      {click === 0 ? (
        <Diagram />
      ) : click === 1 ? (
        <Objectives />
      ) : click === 2 ? (
        <View />
      ) : click === 3 ? (
        <Contactos />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Catalogue;
