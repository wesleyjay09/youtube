import './App.css';
import React, {Component}  from 'react';
import List from './Component/List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    recommendedVideos: [],
    videoKey: 0
    }

    this.changeVideoKey = this.changeVideoKey.bind(this);
  }

  

  componentDidMount() { 
    fetch('http://localhost:3203/api/recommended')
    .then(res => res.json())
    .then(result => this.setState({recommendedVideos:result}))
  }

  mouseOver(event) {
    event.target.style.background = 'white';
    event.target.style.color = 'black'
  }
  mouseOut(event){
    event.target.style.background="";
    event.target.style.color=''
  }
  changeVideoKey(){
    console.log('HITTING THE STUFF')
    let newKey = Math.floor(Math.random() * 103);
    if(newKey === this.videoKey && newKey < 102){
      newKey += 1;
    }else{
      newKey -= 1;
    }
    let changeKey = new CustomEvent("changeVideoKey", {
      detail:{
        videoKey: newKey
      } 
    })
    this.setState({videoKey: newKey})

    dispatchEvent(changeKey)
  }


  
  render(){
    return (
      <div >
        <div className='buttons'> 
        <button onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}id="allButton">All</button>
        <button onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id='relatedButton'>Related</button>
        <button onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id='recentButton'>Recently Uploaded</button>
      </div>
       
        <List recommendedVideos={this.state.recommendedVideos} 
        componentDidMount={this.componentDidMount}
        changeVideoKey={this.changeVideoKey}
      />
      </div>
    )
  }
}

export default App;
