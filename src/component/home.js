import { Link } from "react-router-dom";
import React, { Component } from 'react';


class home extends Component {
    render() { 
        return ( 
            <>
                <div style={{textAlign : "center",}}>
                    <h1 className="title">Benvenuto Nel Notepad</h1>
                    <a className="subtitle">entra nelle tue note</a>
                    <tr/> <br/>
                    <Link to="/note"> <button class="button is-link is-light"> entra</button></Link>
                </div>
            </>
         );
    }
}
 
export default home;