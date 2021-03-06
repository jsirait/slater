import React from "react";
import SubHeading from './SubHeading';
import stat from '../tableStat.png'

class Statistics extends React.Component {
    render() {
        return (
            <div id="Statistics">
                <SubHeading shTitle="International Students Statistics" genOrAlt="gen" />
                <div className="generalPar">
                    <h1>Here will be some statistics of international students at Wellesley College.</h1>
                    <p>Examples: diagram of countries of origin, majors percentage, etc etc</p>
                    <img className="statImg" src={stat} alt="International Students statistics"></img>
                </div>
            </div>
        )
    }
}

export default Statistics;