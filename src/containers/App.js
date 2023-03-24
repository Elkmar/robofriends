import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    //we set the state of the robots array to an empty array, and the state of the searchfield to an empty string, this will allow us to filter the robots array based on the searchfield state
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    //we use fetch to get the data from the API, then we convert the response to json, and then we set the state of the robots array to the data we got from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  //this function is passed to the SearchBox component as a prop, and it is called when the input field changes
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
    console.log(event);
  }
  render() {
    const {robots, searchfield} = this.state;
    //we use the filter method to filter the robots array based on the searchfield state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;