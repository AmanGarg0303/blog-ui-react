import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://p1.pxfuel.com/preview/1018/609/254/deer-forest-nature-england.jpg"
        alt=""
        className="writeImg"
      />

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" style={{ display: "none" }} id="fileInput" />
          <input
            type="text"
            className="writeInput"
            autoFocus={true}
            placeholder="Title"
            maxLength={50}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
