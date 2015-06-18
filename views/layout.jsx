var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <h1>layout</h1>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
