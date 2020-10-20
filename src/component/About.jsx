import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Company from './Company';
import Team from './team';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h1>About</h1>
            <div className="row">
                <div className="col-3">
                    <ul>
                        <li>
                            <Link to={"/about/team"}>ourTeam</Link>
                        </li>
                        <li>
                            <Link to={"/about/company"}>ourCompany</Link>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <Route path={"/about/team"} component={Team}/>
                    <Route path={"/about/company"} component={Company}/>
                </div>
            </div>
            
            </>
         );
    }
}
 
export default About;