import React, {Component} from 'react';
import "./PageHeader.css"
import {Input, Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown'];

export default class PageHeader extends Component {

    static defaultProps = {
        menuOptions: [
            {name: "خانه", color: "blue", url: "/"},
            {name: "تیم", color: "violet", url: "/team"},
            {name: "خبر", color: "purple", url: "/news"},
            {name: "لیگ", color: "pink", url: "/league"},
            {name: "بازی", color: "brown", url: "/game"},
            {name: "بازیکن", color: "red", url: "/player"},
        ]
    };

    state = {active: colorsB[0]};

    handleItemClick = (e, {name}) => this.setState({active: name});

    render() {
        return (
            <div style={{direction: "rtl"}}>
                <div className="pageHeader">
                    <img className="pageLogo" src={"pageLogo.png"} alt="page logo"/>
                </div>
                <Menu inverted style={{marginTop: "0"}}>
                    {this.props.menuOptions.map(({name, color, url}, index) => (
                        <Menu.Item
                            key={index}
                            active={this.state.active === name}
                            color={color}
                            onClick={this.handleItemClick}>
                            <Link to={url}>{name}</Link>
                        </Menu.Item>
                        ))}
                        <Menu.Menu>
                        <Menu.Item
                        name='خروج'
                        active={this.state.active === 'logout'}
                        color = "blue"
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item style={{minWidth: "400px"}}>
                        <Input icon='search' placeholder='...جست و جو'  />
                        </Menu.Item>
                        </Menu.Menu>

                        </Menu>
                        </div>
                        );
                    }
                    }