import * as React from "react";

class Layout extends React.Component<{}, undefined> {
    
    public render(): JSX.Element {
        
        return (
            <div className="layout">
                <h1>Layout!</h1>
                <h2>{this.props.children}</h2>
            </div>
        );
    }
    
}

export default Layout;