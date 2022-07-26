import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Nature</span>
          <span className="postCat">Wildlife</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>

      <div className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque facere
        ipsa enim nobis at quam aut nisi autem eaque culpa ut non animi error
        doloremque in, doloribus vero neque consequatur, ipsum nemo illo cum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque facere
        ipsa enim nobis at quam aut nisi autem eaque culpa ut non animi error
        doloremque in, doloribus vero neque consequatur, ipsum nemo illo cum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque facere
        ipsa enim nobis at quam aut nisi autem eaque culpa ut non animi error
        doloremque in, doloribus vero neque consequatur, ipsum nemo illo cum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque facere
        ipsa enim nobis at quam aut nisi autem eaque culpa ut non animi error
        doloremque in, doloribus vero neque consequatur, ipsum nemo illo cum.
      </div>
    </div>
  );
};

export default Post;
