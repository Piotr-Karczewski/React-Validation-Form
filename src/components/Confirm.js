import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        //PROCESS FORM//
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }



    render() {
        const { values: { firstName, lastName, email, education, phone, message } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem 
                        primaryText = "First Name"
                        secondaryText={ firstName }
                        />
                        <ListItem 
                        primaryText = "Last Name"
                        secondaryText={ lastName }
                        />
                        <ListItem 
                        primaryText = "Email"
                        secondaryText={ email }
                        />
                        <ListItem 
                        primaryText = "education"
                        secondaryText={ education }
                        />
                        <ListItem 
                        primaryText = "Phone Number"
                        secondaryText={ phone }
                        />
                        <ListItem 
                        primaryText = "Message"
                        secondaryText={ message }
                        />
                    
                    </List>
                    <br/>
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                     />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
