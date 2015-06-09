var FirstChild = React.createClass ({
  render: function () {
    return (
      <ul>
        {this.props.items.map(function (item, i) {
          return (
            <Item highlight={i === 0}>
              {item}
            </Item>
          );
        })}
      </ul>
    );
  }
});
