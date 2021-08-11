import React from "react";

export default class DynamicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [],
      nums: [],
    };

    const APP_ID = "51a353f2";
    const APP_KEY = "480a9349965ab2c4dc491fe714b9cea9";
  }

//   componentDidMount() {
//       getRecipes();
//   }


  updateMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }

  handleClick() {
    var items = this.state.items;
    var nums = this.state.nums;

    items.push(this.state.message);
    nums.push(1);

    this.setState({
      items: items,
      message: "",
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i] = event.target.value;

    this.setState({
      items: items,
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items,
    });
  }

  handleNumChanged = (i, event) => {
    var nums = this.state.nums;
    nums[i] = event.target.value;

    this.setState({
      nums: nums,
    });
  };

  renderRows() {
    var context = this;

    return this.state.items.map(function (o, i) {
      return (
        <tr key={"item-" + i}>
          <td>{i+1}</td>
          <td>
            <input
              type='text'
              value={o}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <input
              type='number'
              value={context.state.nums[i]}
              onChange={context.handleNumChanged.bind(context, i)}
            />
          </td>
          <td>Calorie</td>
          <td>
            <button onClick={context.handleItemDeleted.bind(context, i)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>Add Item</button>

        <hr />

        <table className=''>
          <thead>
            <tr>
              <th>Index</th>
              <th>Food</th>
              <th>Quantity</th>
              <th>Kcal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}
