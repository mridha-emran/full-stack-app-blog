import './post.css';

function Post() {
    return (
      <div className="post">
        
        <img className="postImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> 
        <div className="postinfo">
            <div className ="postCats">
                <span className="postCat">music</span>
                <span className="postCat">life</span>
            </div>
            <span className="postTitle">
              Lorem ipsum dolor sit amet
         
             </span>
        <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
        
      </div>
    );
  }
  
  export default Post;