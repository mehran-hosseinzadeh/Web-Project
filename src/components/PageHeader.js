import React, {Component} from 'react';
import "./PageHeader.css"

export default class PageHeader extends Component {
    static defaultProps = {
        optionsItem: [
            "home",
            "basketball",
            "football",
            "others",],
    };

    render() {
        const style = {backgroundColor: "blue"};
        return (
            <div>
                <div className="pageHeader">
                    <img className="pageLogo" src = {"pageLogo.png"} alt = "page logo"/>
                </div>
                <ul className="pageHeaderOption">
                    {this.showOptions()}
                </ul>
            </div>
        );
    }

    showOptions() {
        return this.props.optionsItem.map(option =>{
            return <li>{option}</li>
        })
    }
}