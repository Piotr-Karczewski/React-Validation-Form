import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import InputMask from 'react-input-mask';
export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                  
                    <TextField
                    hintText="Enter Your Phone Number"
                    floatingLabelText="Phone"
                    type="text"
                    defaultValue={values.phone}
                    onChange={handleChange('phone')}
                    >
                    <InputMask mask="999 999 999" maskChar=" " />
                    </TextField>
                    
                    <TextField
                    type="email"
                    validators={['required', 'isEmail']}
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your Message"
                    floatingLabelText="message"
                    label="Standard"
                    onChange={handleChange('message')}
                    defaultValue={values.message}
                    />
                    <RaisedButton
                        label="Continue"
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

export default FormPersonalDetails
