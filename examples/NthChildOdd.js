var NthChildOdd = React.createClass ({
  render: function () {
    return (
      <ul>
        {this.props.items.map(function (item, i) {
          return (
            <Item highlight={!(i % 2)}>
              {item}
            </Item>
          );
        })}
      </ul>
    );
  }
});
