import { Link } from "react-router-dom";
import './post.css';

function Post({post}) {
   const PF = "http://localhost:8000/images/"
   console.log(post.photo)
    return (
      <div className="post">
         {post.photo &&(
           <img className="postImg"
           src={ PF + post.photo}
           
           alt=""
           /> 
           )}
        <div className="postinfo">
            <div className ="postCats">
               {
                 post.catagories.map((elem)=>(
                  
                   <span className="postCat">{elem.name}</span>
    ))
               }
            </div>
            <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        
        <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam? */}
        {post.desc}
      </p>
        
      </div>
    );
  }
  
  export default Post;