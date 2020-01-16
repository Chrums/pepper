import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Theme, WithStyles, createStyles, withStyles  } from '@material-ui/core/styles';

import * as LobbyController from '../controllers/Lobby';

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

class LobbiesPage extends React.Component<Props, State> {
    
    public componentDidMount(): void {
        LobbyController.GetLobbyIds()
            .then(lobbyIds => {
                lobbyIds.forEach(lobbyId => LobbyController.GetLobbyById(lobbyId).then(lobby => console.log(lobby)));
            });
    }
    
    public render(): JSX.Element {
        
        const {
            classes
        } = this.props;
        
        return <React.Fragment>
            Lobbies Page
            <Switch>
                
            </Switch>
        </React.Fragment>;
        
    }
    
}

export default withStyles(styles)(LobbiesPage);