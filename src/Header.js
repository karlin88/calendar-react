import React, { Component } from 'react';

class Header extends Component {

    render() {
        const { calendar } = this.props;

        return (
            <div>
                <div className="row">
                    <h2>{calendar.month}</h2>
                </div>

                <div className = "row">
                    {calendar.days.map(
                        (day, index) => <div className="col col-xs-1 col-md-1" key={index}>{day}</div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Header;