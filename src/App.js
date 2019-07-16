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
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then((data) => {
      this.setState({ countries: data })
    })
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
