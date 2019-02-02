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

export default class LoginPage extends Component {

    render() {
        return (
            <Grid centered>
                <Grid.Column width={8}>
                    <Segment>
                        <Form>
                            <Form.Field control={Input} label='نام کاربری' placeholder='نام کاربری'
                                        onChange={this.handleUsernameChange}
                                        required/>
                            <Form.Field control={Input} label='ایمیل' placeholder='me@example.com'
                                        onChange={this.handleEmailChange}/>
                            <Form.Field control={Input} label='رمز عبور' type="password" placeholder='رمز عبور' required
                                        onChange={this.handlePasswordChange}/>
                            <Form.Field control={Input} label='تکرار رمز عبور' type="password"
                                        placeholder='تکرار رمز عبور'
                                        onChange={this.handleRepeatPasswordChange}/>
                            <Form.Field control={Checkbox} label={<label>با شرایط و مقررات سایت موافقم</label>}
                                        onChange={this.handleCheckBoxChange}
                                        required/>
                            <Divider/>
                            <Header style={{color: "gray"}}>
                                برای ورود نیازی به وارد کردن ایمیل و تکرار رمز عبور نیست.
                                <br/>
                                همچنین تایید مقررات سایت فقط برای ثبت نام لازم است.
                            </Header>
                            <Form.Group>
                                <Button.Group>
                                    <Button negative onClick={this.signUp}>ثبت نام</Button>
                                    <Button.Or/>
                                    <Link to="/forget-password">
                                        <Button>
                                            فراموشی رمز عبور
                                        </Button>
                                    </Link>
                                    <Button.Or/>
                                    <Button positive onClick={this.login}>ورود</Button>
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

    handlePasswordChange = (e) => {
        pageData.password = e.target.value;
    };

    handleCheckBoxChange = (e) => {
        pageData.accept = e.target.value;
    };

    handleRepeatPasswordChange = (e) => {
        pageData.repeatPassword = e.target.value;
        pageData.passwordValidity = (pageData.password === pageData.repeatPassword);
    };

    handleUsernameChange = (e) => {
        pageData.username = e.target.value;
    };

    login() {
        if (pageData.username !== "" && pageData.password !== "") {
            //do log in
        }
        else if (pageData.username === "") {
            alert("لطفا نام کاربری خود را وارد کنید.")
        }
        else {
            alert("لطفا رمز عبور خود را وارد کنید.")
        }
    }

    signUp() {
        if (pageData.username !== "" && pageData.accept && pageData.emailValidity && pageData.passwordValidity) {
            //do sign up
        } else if (pageData.username !== "") {
            alert("لطفا نام کاربری خود را وارد کنید.")
        } else if (pageData.password !== "") {
            alert("لطفا رمز عبور خود را وارد کنید.")
        } else if (pageData.accept) {
            alert("برای ثبت نام، نیاز به تایید مقررات سایت است.")
        } else if (pageData.emailValidity) {
            alert("ایمیل وارد شده صحیح نیست.")
        } else if (pageData.passwordValidity) {
            alert("تکرار رمز عبور با اصل آن مطابقت ندارد.")
        }
    }
}