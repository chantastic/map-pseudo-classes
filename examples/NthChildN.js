var NthChildN = React.createClass ({
  getDefaultProps: function () {
    return { n: -1 }
  },

  render: function () {
    var that = this;

    return (
      <ul>
        {this.props.items.map(function (item, i) {
          return (
            <Item highlight={i === that.props.n}>
              {item}
            </Item>
          );
        })}
      </ul>
    );
  }
});
