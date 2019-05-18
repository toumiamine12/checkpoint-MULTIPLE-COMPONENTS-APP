import React, { Component } from 'react';
class Imge extends Component {
    render() {
        return (
            <div>
                <center>
                    <img className="img14" src={this.props.img} alt="Logo" />
                    <h5><p >{this.props.locate}</p></h5></center>
            </div>
        )
    }
}
export default Imge;