import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://img.etimg.com/thumb/msid-78891889,width-640,resizemode-4,imgsize-85545/working-from-home-easier-said-than-done.jpg"
          alt=""
        />
        <p>
          Working from home is a lot more comfortable for lots of people.
          Employees can save a great deal of time and money since they do not
          have to travel so often, which means people will have more time for
          work and for themselves, too.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Work</li>
          <li className="sidebarListItem">Love</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-youtube"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
