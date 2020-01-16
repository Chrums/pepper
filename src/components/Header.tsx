import * as React from "react";
import { Theme, WithStyles, createStyles, withStyles  } from '@material-ui/core/styles';

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import "./../assets/scss/header.scss";

const styles = (theme) => createStyles({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
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
        
        return <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
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