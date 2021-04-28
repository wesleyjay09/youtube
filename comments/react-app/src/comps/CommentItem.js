import React, { Component } from 'react';
import ImgSelector from './imgSelector'
class CommentItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            thumbsUp: 0,
            thumbsDown: 0
        }
    }


    async Postlike(e){
        if (e.target.className === 'fas fa-thumbs-up' && this.state.thumbsUp === 0){
            this.setState({
            thumbsUp:this.props.elem.thumbsup += 1})
        console.log('its a thumbsup')

            fetch(`http://localhost:3208/api/likes/`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: this.props.elem.comment_id, thumbsup: this.state.thumbsUp
                    })
                    })
        }else{console.log(e.target.className)}
        
  
        
    }

    render(){
        
        
        return(

            <div className = 'ybd'>
                <div className = 'toNamelater'>
                   <img className = 'toName' src = {ImgSelector(this.props.elem.profile_id)}></img> 
                </div>
                
                <div>
                    <div className = 'text'>
                    <h3> name:{this.props.elem.profile_id}<br></br>{this.props.elem.post} </h3>   
                    </div>
                    <div className = 'votes'>
                        <div className = 'Upvotes' onClick = {(e)=>{this.Postlike(e)}}>
                                <div>
                                <i className='fas fa-thumbs-up'></i>  
                                </div>
                        </div>
                        <div className = 'UpVoteCounts'>
                            <h4>{this.props.elem.thumbsup}</h4>
                        </div>
                        <div className = 'Downvotes'>
                            <div>
                                <i className='fas fa-thumbs-down'></i> 
                            </div>
                        </div>
                        <div className = 'UpVoteCounts'>
                                <h4>{this.props.elem.thumbsdown}</h4>
                        </div>
                        <div className ='anything'>
                            <button className = "reply"> <p className ='text'>REPLY</p></button>
                        </div>
                    </div>
                </div>
            </div>
            
         )
    }
    
}
export default CommentItem


//add compdid mount to query for replies
//add conditional for query if it exisit