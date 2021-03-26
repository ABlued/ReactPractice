const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');
const WordRelayHooks = require('./WordRelayHooks');

ReactDom.render(<WordRelayHooks/>, document.querySelector('#root'));