// const React = require('react');
// const { Component } = React;
import React from 'react';

class Try extends React.Component {

    render(){
        // console.log(this.props);
        return(
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </li>
        )
    }
}

// module.exports = Try;
export default Try;