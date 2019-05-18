import React, { Component } from 'react';
class Chif extends Component {
    render() {
        return (
            <div >
                <div className="" style={this.props.style}>
                    <h4>
                        <h6 >{this.props.chif}</h6>
                        <h6><p >{this.props.para4}</p></h6></h4 >
                </div>
            </div>
        )
    }

}
export default Chif;