import React, { useEffect } from 'react'; 
import IPage from './pages'; 
import logging from './logging'; 

const Home: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
                    logging.info(`Loading ${props.name}`); 
    }, [props])
return(
    <h1>Soy el Home</h1>
)
}
export default Home 