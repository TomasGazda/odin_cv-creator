import { Component } from "react";

import './footer.css'


class Footer extends Component{

    render(){
        return(
            <nav className="navigation-footer">
                <a href="/" className="brand-name-footer">
                    MacroSoft
                </a>         
                <div className="navigation-menu-footer">
                    <ul>
                    <li>
                        <a href="/">Github</a>
                    </li>
                    <li>
                        <a href="/">Website</a>
                    </li>
                    <li>
                        <a href="/">Linkedin</a>
                    </li>
                    </ul>
                </div>
        </nav>);
    }
}

export {Footer};