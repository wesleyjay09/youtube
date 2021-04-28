import React, { Component } from 'react';


class PostComment extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            post:null,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        console.log(e)
        e.preventDefault();
        this.setState({
            post: e.target[0].value
        })
        this.PostSend(e)
        this.props.reloadComments();
    }

    async PostSend(e){
        e.preventDefault()
        fetch(`http://localhost:3208/api/comments/`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             id: this.props.userID, post: e.target[0].value, videoKey: this.props.videoKey
          })
        })
        e.target[0].value = "";
    }

    render(){
        return(
            <form onSubmit ={(e)=>{this.handleChange(e)}}>
                <input class="input" type='text' placeholder='Add a public comment...'></input>
                <div className = "btns">
                    <button className = 'cancel'>CANCEL</button> 
                    <input className="post" type="submit" className= "post" ></input>
                </div>
            </form>
        )

    }
    
}

export default PostComment;