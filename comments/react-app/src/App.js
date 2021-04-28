
import React, { Component } from 'react';
import './App.css';
import CommentSection from './comps/commentsection'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoKey: 1,
      userID: 2
      
    };

    
    // this.keyGrabber = this.keyGrabber.bind(this)
  }

  // keyGrabber(videKey){
    
  //   this.setState({videoKey:videKey })

   
  // }
  render(){
    return(
      <div id="mainCommentContainer">
        <CommentSection
        userID={this.state.userID}
        videoKey = {this.state.videoKey}
        // keyGrabber = {this.keyGrabber}
        />

      </div>
    )
  }
}

export default App;
