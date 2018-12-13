import React, {Component} from 'react';
import "./PageHeader.css"
import {Input, Menu} from 'semantic-ui-react'

const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown'];

export default class PageHeader extends Component {

    static defaultProps ={
        menuOptions: [
            {name: "خانه", color: "blue"},
            {name: "فوتبال", color: "violet"},
            {name: "بسکتبال", color: "purple"},
            {name: "لیگ ها", color: "pink"},
            {name: "سایر", color: "brown"},
        ]
    };

    state = { active: colorsB[0] };

    handleItemClick = (e, { name }) => this.setState({ active: name });

    // static defaultProps = {
    //     optionsItem: [
    //         "خانه",
    //         "بسکتبال",
    //         "فوتبال",
    //         "سایر اخبار",],
    // };

    render() {
        return (
            <div style={{direction: "ltr"}}>
                <div className="pageHeader">
                    <img className="pageLogo" src = {"pageLogo.png"} alt = "page logo"/>
                </div>
                <Menu inverted style={{marginTop: "0"}}>
                    {this.props.menuOptions.map(({name, color}, index) => (
                        <Menu.Item
                            key={index}
                            name={name}
                            active={this.state.active === name}
                            color={color}
                            onClick={this.handleItemClick}
                        />
                    ))}

                    <Menu.Menu position='right'>
                        <Menu.Item style={{minWidth: "400px"}}>
                            <Input icon="search" placeholder='...جست و جو'  />
                        </Menu.Item>
                        <Menu.Item
                            name='خروج'
                            active={this.state.active === 'logout'}
                            color = "blue"
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}