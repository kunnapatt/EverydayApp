import React from 'react';
import {useState} from 'react';
import { Link, withRouter } from 'react-router-dom' ;
import { makeStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, withStyles } from '@material-ui/core' ;
import "./../css/sideba.css" ;

import { compose } from 'recompose' ;

const drawerWidth = 240 ;

const useStyles = makeStyles((theme) => ({
    root : {
        display: 'flex',
    },
    appBar: {
        width : `calc(100% - ${drawerWidth}px)`,
        marginRight: drawerWidth,
    },
    drawer : {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper : {
        width: drawerWidth,
        backgroundColor: "transparent",
        hover: "blue",
    },
    toolbar: theme.mixins.toolbar,
    aaa: {
        '&:hover' : {
            color: "#fe7f9c",
        }
    },

})) ;

function DrawerRight(props) {
    const classes = useStyles() ;
    
    const [webs, setWebs] = useState(props.webs) ;

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <div
                    className={classes.toolbar}
                >
                    <List>
                        {["Menu", "My Images", "BBB", "CCC", "DDDD"].map((text, index) => (
                            <ListItem 
                                button 
                                key={text}
                                // classes={{ root: "ListItem", selected: "hover" }}
                                classes= {{root: classes.aaa}}
                                component={Link}
                                to={webs[index]}
                            >
                                {/* if has icon */}
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText 
                                        primary={text} 
                                    />
                                <Divider />
                            </ListItem>
                        ))}
                    </List>


                </div>
            </Drawer>
        

        </div>
    ) ;
}


export default compose(
    withRouter,
    withStyles(useStyles)
)(DrawerRight) ;