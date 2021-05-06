import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
    }}
        showLabels
        className={classes.root}
    >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartOutlinedIcon />} />
        <BottomNavigationAction label="Profile" icon={< PersonOutlineIcon />} />
    </BottomNavigation>
    );
}