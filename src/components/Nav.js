import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'


class Nav extends React.Component{
    

    render(){
        return(
                <div class="navbar-fixed">
                    <nav class="red">
                    <div class="container">
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo center">Easy-Meds</a>
                        <ul class="right hide-on-med-and-down">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/feedback">Feedback</a>
                        </li>
                        <li>
                            <a href="/meds">Meds</a>
                        </li>
                        <li>
                            <a href="/jas">JAS</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    </nav>
                    </div>
        );
    }
}

export default Nav