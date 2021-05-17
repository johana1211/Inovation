import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';  
import routes from './IRoute';
import logging from './logging'; 

const Aplication: React.FunctionComponent<{}> = props => {
    useEffect(() => {
        logging.info('loanding aplication'); 
    }, []) 
    return (
        <div>
            <BrowserRouter>
            <Switch>
                {
                    routes.map((route, index) => {
                        return (
                            <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props: RouteComponentProps<any>) => (
                            <route.component
                            name={route.name}
                            {...props}
                            {...route.props}
                            />
                        )}
                            />
                        )
                    })
                }
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Aplication 