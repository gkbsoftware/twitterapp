var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (

      <DefaultLayout title={this.props.title}>
        <h1>Change this</h1>
        <div>{this.props.message}</div>
      </DefaultLayout>
    );
  }
});
module.exports = HelloMessage;
