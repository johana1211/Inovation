import React, { useEffect } from 'react'; 
import IPage from './pages'; 
import logging from './logging'; 

const Contacto: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
                    logging.info(`Loading ${props.name}`); 
    }, [])
return(
    <h1>Los contactos</h1>
)
}
export default Contacto 