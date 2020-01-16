import * as React from 'react';
import { Theme, WithStyles, createStyles, withStyles  } from '@material-ui/core/styles';

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import "./../assets/scss/header.scss";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: 8
    },
    menuButton: {
        flex: "0 0 auto",
        marginRight: 8
    },
    title: {
        flex: "1 1 auto"
    },
});

interface Local {}

interface Injected {}

type Props =
    WithStyles<typeof styles> &
    Local &
    Injected;

interface State {}

class Header extends React.Component<Props, State> {
    
    public render(): JSX.Element {
        
        const {
            classes
        } = this.props;
        
        return <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    pepper.io
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>;
        
    }
    
}

export default withStyles(styles)(Header);