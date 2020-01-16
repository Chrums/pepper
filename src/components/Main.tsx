import * as React from "react";
import { hot } from "react-hot-loader";

import "./../assets/scss/main.scss";

import { Container } from '@material-ui/core';

import Header from './Header';

class Main extends React.Component<{}, undefined> {
    
    public render(): JSX.Element {
        return <React.Fragment>
            <Header />
            <Container>
                
            </Container>
        </React.Fragment>;
    }
    
}

export default hot(module)(Main);