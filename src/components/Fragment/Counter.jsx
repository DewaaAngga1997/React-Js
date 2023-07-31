import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  //componentDidMount()
  //apa yang ada di konstruktor akan di timpa oleh komponen didmount
  componentDidMount() {
    this.setState({ count: 1 });
  }

  //dia akan melihat setiap perubahan yang terjadi pada komponen tersebut
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="flex justify-center items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button className="bg-black text-white p-2 " onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
export default Counter;
