var React = require('react');
var ReactDom = require('react-dom');

var HelloWord = React.createClass({
  render: function () {
    return (
      <div> This is react </div>
    )
  }
});

ReactDom.render(
  <HelloWord />,
  document.getElementById('app')
)
