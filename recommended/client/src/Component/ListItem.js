import React, { Component } from 'react'

class ListItem extends Component {
    render() {
        return(
            <div>
                {this.props.recommendedVideos.map(recommendedVideos => {
                    return(
                        <div key={recommendedVideos.id} className='listItem'>
                            <img id='thumbnail' onClick={() => {this.props.changeVideoKey()}} src={recommendedVideos.thumbnail}></img>
                            <div className='stats'>
                                <div id='title' onClick={(e) => {console.log(recommendedVideos.video_key)}}>{recommendedVideos.title}</div>
                                <div id='publisher'>{recommendedVideos.publisher}</div>
                                <div id='totalViews'>{recommendedVideos.total_views} views</div>
                                <div id='createdOn'>{recommendedVideos.created_on} ago</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ListItem
//onClick={() => {dispatchEvent(this.props.changeVideoKey}}