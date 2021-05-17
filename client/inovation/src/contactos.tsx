import React, { useEffect, useState } from 'react'; 
import IPage from './pages'; 
import logging from './logging';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';  

const Contacto: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage ]= useState<string>('')
    useEffect(() => {
                    logging.info(`Loading ${props.name}`);
                    let number = props.match.params.number; 
                    if(number)
                    {
                        setMessage(`The Number is ${number}`); 
                    } 
                    else{
                        setMessage(`No number provided ${number}`);
                    }
    }, [props])
return(
    <div>
    <h1>{message}</h1>
   
        <Link to="to">
Go to the home page!
    </Link>
  
    </div>

)
}
export default withRouter(Contacto)