const React = require('react');
const ReactDom = require('react-dom');

const NumberBaseball = require('./NumberBaseball')
const NumberBaseball1 = require('./NumberBaseball1')
const Test = require('./RenderTest')

ReactDom.render(<><Test/><NumberBaseball/><NumberBaseball1/></>, document.querySelector('#root'));