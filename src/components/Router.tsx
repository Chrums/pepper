import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LobbiesPage from './LobbiesPage';
import HomePage from './HomePage';

class Router extends React.Component<{}, {}> {
    
    public render(): JSX.Element {
        
        return <BrowserRouter>
            <Switch>
                <Route path="/lobbies" component={LobbiesPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>;
        
    }
    
}

export default Router;