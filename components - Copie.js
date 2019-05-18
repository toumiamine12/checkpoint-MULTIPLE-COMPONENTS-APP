import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            <div className="..">
                <div className="program" style={this.props.style}>
                    <center>
                        <center className="name">{this.props.name}</center> 
                        <p className="para3">{this.props.par}</p>
                        <center><button className="button">En savoir plus</button></center>
                    </center>
                </div>
            </div>
        )
    }

}
export default Card;