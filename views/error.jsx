var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (

      <DefaultLayout>
        <h1>error jsx</h1>
      </DefaultLayout>
    );
  }
});
module.exports = HelloMessage;
