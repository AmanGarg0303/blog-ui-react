import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="sp">
      <div className="spWrapper">
        <img
          src="https://www.wildlifeonline.me.uk/assets/ugc/images/fox_crossing_snowfield_pressland.jpg"
          alt=""
          className="spImg"
        />

        <h1 className="spTitle">
          Nature's beauty in the wild
          <div className="spEdit">
            <i className="spIcon fa-solid fa-pen-to-square"></i>
            <i className="spIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>

        <div className="spInfo">
          <span className="spAuthor">
            Author: <b>Aman</b>
          </span>
          <span className="spDate">1 hour ago</span>
        </div>
        <p className="spDesc">
          It can be difficult for animals to live in places that receive large
          amounts of snow, such as in the high latitudes and at high elevations.
          Snowy places tend to receive less sunlight, which decreases
          temperatures and makes it hard for animals to stay warm. Deep snow can
          also be difficult to move around in; animals must spend more time and
          energy walking through it or finding food beneath it. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Nihil illum natus nobis
          Voluptas, error? Mollitia reprehenderitf tenetur sapiente odit id
          quaerat sint laboriosam magni. Odit nihil quisquam eius dolores
          necessitatibus error, modi natus quas esse labore dolorum quidem?
          Voluptas, error? Mollitia reprehenderit tenetur sapiente odit id
          quaerat sint laboriosam magni. Odit nihil quisquam eius dolores
          necessitatibus error, modi natus quas esse aperiam inventore provident
          nisi ipsa velit. Quod enim officiis voluptates doloribus ea, sequi
          dolores vel laudantium veniam et impedit omnis facilis molestiae
          debitis facere aspernatur error magnam ducimus, voluptatibus id? Ab
          ullam eum hic consequatur unde laborum optio, cum delectus! Illum
          maxime sunt cupiditate delectus?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
