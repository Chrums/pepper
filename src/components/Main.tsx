import * as React from "react";
import { hot } from "react-hot-loader";

import Layout from './Layout';

const logo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/main.scss";

class Main extends React.Component<{}, undefined> {
    
    public render(): JSX.Element {
        return (
            <div className="main">
                <h1>Hello World!</h1>
                <img src={logo.default} height="480"/>
                <Layout>
                    Goodbye, world.
                </Layout>
            </div>
        );
    }
    
}

export default hot(module)(Main);