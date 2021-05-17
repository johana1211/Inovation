import IRoute from './router'; 
import Home from './Home'; 
import Contacto from  './contactos'; 
const routes: IRoute[] = [
    {
        path: '/', 
        name: 'Home', 
        component: Home, 
        exact: true, 
    }, 
    {
        path: '/contactos/:number', 
        name: 'Contactos', 
        component: Contacto, 
        exact:  true
    }
]
export default routes; 