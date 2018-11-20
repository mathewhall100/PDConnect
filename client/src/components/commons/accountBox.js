import React, { Component } from 'react';
import { reset, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

import {resultStylesheet, SECONDARY_COLOR } from '../../styles';

    class AccountBox extends Component  {

        submit = (values) =>  {
            console.log(values)
        }

        render() {
            const { classes } = this.props
            return (
                <div className={classes.accountContainer}>     

                    <div >
                        <h1 className={classes.title} style={{marginRight: "30px"}}>Create an account</h1>
                    </div>
                        
                    <List component="nav">
                        <ListItem className={classes.listItems}>
                        <ListItemIcon>
                            <StarIcon style={{color: SECONDARY_COLOR}}/>
                        </ListItemIcon>
                        <ListItemText inset primary="save your profile between visits" />
                        </ListItem >
                        <ListItem button className={classes.listItems}>
                        <ListItemIcon>
                            <StarIcon style={{color: SECONDARY_COLOR}}/>
                        </ListItemIcon>
                        <ListItemText inset primary="receive prompts to update your information" />
                        </ListItem>
                        <ListItem button className={classes.listItems}>
                        <ListItemIcon>
                            <StarIcon style={{color: SECONDARY_COLOR}}/>
                        </ListItemIcon>
                        <ListItemText inset primary="alerts when new treatments or trials match your profile" />
                        </ListItem>
                        <ListItem button className={classes.listItems}>
                        <ListItemIcon>
                            <StarIcon style={{color: SECONDARY_COLOR}}/>
                        </ListItemIcon>
                        <ListItemText inset primary="submit your details for participation in focus groups" />
                        </ListItem>
                    </List>

                    <br />
                    <Button type="submit" className={classes.button}>Create</Button>
                    <br />
                </div>
            )
        }
    }


AccountBox = withStyles(resultStylesheet)(AccountBox)
export default AccountBox