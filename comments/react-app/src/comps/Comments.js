import CommentItem from './CommentItem'
import react from 'react'
const Comments = ({comments, keyGrabber})=>{
    
      
    
    
return(
<div>


{comments.map((elem)=>{
        return(<CommentItem elem ={elem}
            key = {elem.comment_id}/>)
        
    })}
</div>
    
)
            
        
    
        
         
         
        
       
    
}
export default Comments


