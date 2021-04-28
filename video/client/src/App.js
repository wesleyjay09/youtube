import React from 'react'
import VideoPlayer from './components/video-player'
import axios from 'axios'
const initalVideo = 'Code-Monkey'
const arrOfColorsForPubliserImg = ['red','yellow','pink','purple','orange','silver']

class App extends React.Component{
  constructor (props){
    super(props)

    this.state = {
      videoName: initalVideo,
      videoKey:1,
      numberOfViews: 3029417,
      dateOfCreation: 'Jul 4, 2007',
      likes: 24000,
      dislikes: 543,
      videoDescription: 'This AMV features the song Code Monkey by Jonathan Coulton, using footage from the anime Black Heaver.',
      publisher: 'Nic Neidenbach',
    }
    this.changeVideoSrc = this.changeVideoSrc.bind(this)
  }
  async changeVideoSrc(videoKey){
    
    await axios.get(`http://localhost:3201/db/${videoKey}`)
    .then(res =>{

      this.setState({
      videoName: res.data.name,
      videoKey: videoKey,
      numberOfViews: res.data.view_count,
      dateOfCreation: res.data.created_on,
      likes:res.data.likes,
      likes:res.data.dislikes,
      videoDescription: res.data.discription,
      publisher:res.data.publisher
    })
    })
  }

  componentDidMount(){
    window.addEventListener('changeVideoKey',(e)=>{
      this.changeVideoSrc(e.detail.videoKey)})
  }
  render(){
    
    let displayVideoName = this.state.videoName.split('-').join(' ')
    let displayNumberOfViews = parseInt(this.state.numberOfViews)
    return(
      <div id='videoPlayerContainer'>
        <VideoPlayer
          key={this.state.videoKey}
          videoName={this.state.videoName}
          previousVideoName={this.state.previousVideoName}
          />
        <div id='videoPlayerFooter'>
          <div id='videoPlayerFooterLeft'>
            <p id='nameOfVideo'>{displayVideoName}</p>
            <p id='numberOfViews'>{displayNumberOfViews} Views * {this.state.dateOfCreation}</p>
          </div>
          <div id='videoPlayerFooterRight'>
            <div id='innerVideoPlayerFooterRight'>
              <p id='likeAndDislike'><i className='fas fa-thumbs-up'></i>  {this.state.likes}</p>
              <p id='likeAndDislike'><i className='fas fa-thumbs-down'></i> {this.state.dislikes}</p>
              <button id='videoShareBtn'>Share</button>
              <button id='videoSaveBtn'>Save</button>
              <button id='videoMoreBtn'>...</button>
            </div>
          </div>
        </div>
        <hr id='videoHr'></hr>
          <div id='publisher'> 
            <div id='publisherImg'></div>
            <div id='publisherInfo'>
              <p id='publisherName'>{this.state.publisher}</p>
              <p id='publisherSubCount'>{Math.floor(Math.random() * 1000000)} Subscribers</p>
            </div>
          </div>
          <p id='videoDescription'>{this.state.videoDescription}</p>
      </div>
    )
  }
}

export default App;
