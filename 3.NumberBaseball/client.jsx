// const React = require('react');
// const ReactDom = require('react-dom');

// const NumberBaseball = require('./NumberBaseball')
// const NumberBaseball1 = require('./NumberBaseball1')
// const Test = require('./RenderTest')

// ReactDom.render(<><Test/><NumberBaseball/><NumberBaseball1/></>, document.querySelector('#root'));

import React from 'react';
import ReactDOM  from 'react-dom';
import NumberBaseball from './NumberBaseball'
import NumberBaseball1 from './NumberBaseball1'
import NumberBaseballHooks from './NumberBaseballHooks'

ReactDOM.render(
    <><NumberBaseball /></>,
    document.getElementById('root')
);