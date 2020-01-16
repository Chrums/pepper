import * as React from 'react';
import { Link } from 'react-router-dom';
import { Theme, WithStyles, createStyles, withStyles  } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {}
});

interface Local {}

interface Injected {}

type Props =
    WithStyles<typeof styles> &
    Local &
    Injected;

interface State {}

class HomePage extends React.Component<Props, State> {
    
    public render(): JSX.Element {
        
        const {
            classes
        } = this.props;
        
        return <React.Fragment>
            Home Page
            <Link to="/lobbies">Lobbies</Link>
        </React.Fragment>;
        
    }
    
}

export default withStyles(styles)(HomePage);