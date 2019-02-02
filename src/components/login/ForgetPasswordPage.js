import React, {Component} from 'react';
import {Button, Checkbox, Divider, Form, Grid, Header, Input, Segment} from "semantic-ui-react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const pageData = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    passwordValidity: false,
    emailValidity: false,
    accept: false,
};

export default class ForgetPasswordPage extends Component {

    render() {
        return (
            <Grid centered>
                <Grid.Column width={8}>
                    <Segment>
                        <Form>
                            <Header style={{color: "gray"}}>
                                لطفا ایمیل مرتبط با حساب کاربری خود را وارد کنید
                            </Header>
                            <Form.Field control={Input} label='ایمیل' placeholder='me@example.com'
                                        onChange={this.handleEmailChange}/>
                            <Divider/>
                            <Form.Group>
                                <Button.Group>
                                    <Button positive onClick={this.forgetPassword}>ارسال ایمیل فراموشی رمز عبور</Button>
                                    <Button.Or/>
                                    <Link to="/">
                                        <Button negative>بازگشت به صفحه اصلی</Button>
                                    </Link>
                                </Button.Group>
                            </Form.Group>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }

    handleEmailChange = (e) => {
        pageData.email = e.target.value;
        const text = pageData.email;
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        pageData.emailValidity = reg.test(text)
    };

    forgetPassword() {
        if (pageData.emailValidity) {
            //do log in
        }
        else {
            alert("ایمیل وارد شده صحیح نیست.")
        }
    }
}