



import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";

const Posts = () => {
 
  
  
 
  return (
    
    <div className="postss">
      
      <div className="postss__first">
        
        <div className="posts__first__img">
          <img src="/images/profile-pic.jpg" alt="profile img" />
        </div>
        
        <div className="posts__first__name">
          <strong>Jay Bharat</strong> <FaRegCheckCircle className="verify" />
        </div>
        
        <div className="posts__first__username">
          @jaybharat1508 <span>7m</span>
        </div>
      </div>
      
      <div className="postss__details">
        
        <div className="postss__details__msg">
          Happy Independence Day!
        </div>
        
        <div className="postss__details__img">
          <img src="/images/Red_fort_pic.jpg" alt="post" />
        </div>
        
        <div className="reactions">
                                              {/* Post Button */}
          
          <button className="post_btn" >
          <span>
            <FaComment className="re" /> 45
          </span>
          </button>
          
          <button className="post_btn">
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          </button >
         
          <button className="post_btn" >
          <span>
            <FaHeart className="re"  /> 347
          </span>
          </button>
          
          <button className="post_btn">
          <span>
            <FaLeaf className="re" /> 234
          </span>
          </button>
          
         </div>
        
       </div>
    
    </div>
  );
  };

export default Posts;