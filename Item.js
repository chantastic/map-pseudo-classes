var Item = React.createClass({
  render: function () {
    var styles = {};

    if(this.props.highlight) {
      styles = { backgroundColor: "#c0ffee" };
    }

    return <li style={styles}>{this.props.children}</li>;
  }
});
