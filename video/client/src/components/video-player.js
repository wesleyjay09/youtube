import React from 'react'
import axios from 'axios'



const VideoPlayer = (props) =>{
  // if(props.previousVideoName !== null){
  //   axios.get(`https://localhost:3201/removeVideoSteam/${props.previousVideoName}`)
  //   .then(res=>{
  //     console.log(res)
  //   })
  //}
  console.log('boop')
    return(
      <video id='video-player' style={props.style} controls>
        <source src={`http://localhost:3201/video/${props.videoName}`} type='video/mp4'></source>
      </video>
    )
}

export default VideoPlayer