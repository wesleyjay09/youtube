import React, { Component } from 'react';
import Comments from './Comments';
import PostComment from './PostComment';

class CommentSection extends Component {
    constructor(props){
      super(props);
      this.state = {
          userID: this.props.userID,
          videoKey : 1,
          comments: [],
          pinned: [],
          post: null,
          flipper: false
      };
      this.tester = this.tester.bind(this)
      this.keyGrabber = this.keyGrabber.bind(this)
      this.reloadComments = this.reloadComments.bind(this)
    }
async componentDidMount(){
  window.addEventListener('changeVideoKey',(e)=>{
    let vidKey = e.detail.videoKey;
    this.keyGrabber(vidKey)
})
  this.getPosts();
  console.log('mounted')
    
}
tester(){
  fetch(`http://localhost:3208/api/comments/${this.state.videoKey}`)
  .then(result=>
        result.json()
  )
         .then(result =>{
             this.setState({
                comments : result,
                flipper : true
           })
         }
       )
}

getPosts(){
  fetch(`http://localhost:3208/api/comments/${this.state.videoKey}`)
        .then(result=>
              result.json()
        )
               .then(result =>{
                   this.setState({
                      comments : result,
                 })
               }
             )
}

reloadComments(){
  this.getPosts();
}

keyGrabber(videKey){
    
  this.setState({
    videoKey:videKey,
    flipper: false
   })

 
}

    render(){
      
      if (this.state.flipper === false){
        this.tester()
      }
      return(
        <div>
          <div className = 'container'>
            <div className = 'text'>
             <h4>{this.state.comments.length} Comments</h4> 
            </div>
            <div className= 'sortBy'>
              <h4 id= 'test'><i className="fa">&#xf0c9;</i>  SORT BY</h4>
            </div>
          </div>
            
            <PostComment
            userID = {this.state.userID}
            videoKey = {this.state.videoKey}
            reloadComments = {this.reloadComments}
            />
            
            <Comments 
            comments = {this.state.comments}
            
            />
          
          
          
        </div>
      )
    }
  }
  
  export default CommentSection
//notes add comp for post comments and one fro view comments perhaps pinned 