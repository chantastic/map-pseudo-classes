var LastChild = React.createClass ({
  render: function () {
    return (
      <ul>
        {this.props.items.map(function (item, i, items) {
          return (
            <Item highlight={i === items.length - 1}>
              {item}
            </Item>
          );
        })}
      </ul>
    );
  }
});
