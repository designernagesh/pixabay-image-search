import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'
import SearchForm from './components/SearchForm'
import ImagesList from './components/ImagesList'
const api_key = "854371-808e42fe775fb0ba9da516096"

class App extends Component {
  state = {
    images: [],
    error: null
  }

  searchHandle = (e) => {      
    e.preventDefault()

    const searchTerm = e.target.elements.searchInput.value
    axios.get(`https://pixabay.com/api/?key=${api_key}&q=${searchTerm}&image_type=photo`)
    //.then( response =>  { searchTerm ? this.setState({ images: response.data.hits }) : this.setState({ error: "Please, enter any serach value" }) }
    //console.log(searchTerm)
    .then( response =>  { 
      if(searchTerm){
        this.setState({ images: response.data.hits, error: null })
       }
       else {
         this.setState({ error: "Please, enter any serach value" }) 
      }
    });
  }
  render(){
  return (
    <div className="App">
      <div className="container">        
        <h2 className="text-center my-4">Pixabay Image Search App</h2>
          <SearchForm searchHandle={this.searchHandle} />
          <div className="row">
            {
                this.state.error === null ? 
                <ImagesList images={ this.state.images } /> :      
                <p className="text-center mt-4" style={{ width: '100%', color: 'red' }}>{ this.state.error }</p>    
            }
          </div>
      </div>
    </div>
  );
  }
}

export default App;
