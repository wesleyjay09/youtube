import './App.css';
import SearchbarInput from './Components/SearchbarInput'
const { React, Component } = require('react')

class App extends Component {
  state = {
    videoKey : null,
    userInput : null
  }

  handleSearchButton = async (e) => {
    e.preventDefault();
    const input = e.target[0].value
    this.setState({userInput : input})
    const response = await fetch(`http://localhost:3202/api/searchbar/${input}`)
    if(response.status !== 200){
      e.target[0].value = `Error Encountered`
      return
    }
    const responseJson = await response.json();
    if(responseJson.length !== 0){
      this.setState({
        videoKey : responseJson[0].videokey
      })
      let changeVideoKey = new CustomEvent('changeVideoKey', {
        detail:{
          videoKey: this.state.videoKey
        }
      })
      dispatchEvent(changeVideoKey);
    }else{
      e.target[0].value = `No Results Found.`
    }
  }

  render(){
    return (
      <div className="App">
        <div id="topbar">
          <div id="hamburger"><i class="fa fa-bars"></i></div>
          <img id="youtubeIcon" src="http://localhost:3202/static/images/youtubeIcon.png"></img>
          <SearchbarInput handleSearchButton={this.handleSearchButton}/>
        </div>
      </div>
    );
  }
}

export default App;
