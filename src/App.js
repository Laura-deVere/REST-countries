import React, { Component } from 'react';
import Nav from './Components/Nav';
import Search from './Components/Search';
import CountryCard from './Components/CountryCard';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: [] }
  }

  componentDidMount() {
    // makes a GET request to the API endpoint
    fetch('https://restcountries.eu/rest/v2/all')
    // parse the response/data
    .then(res => res.json())
    // sets data as state 
    .then((data) => {
      this.setState({ countries: data })
    })
    // logs any errors
    .catch(console.log);
  }
  render() {
    console.log(this.state.countries); 
    return (
      <div className="App">
        <Nav />
        <Search />
        <CountryCard countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
