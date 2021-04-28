import React from 'react';
import ListItem from './ListItem'


function List(props) {
    return (
        <div className='list'>
            
            
           
            <ListItem  recommendedVideos={props.recommendedVideos}
            changeVideoKey={props.changeVideoKey}/>
           
        </div>
    )
}

export default List;