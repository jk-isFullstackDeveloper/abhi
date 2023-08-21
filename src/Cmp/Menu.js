import "./menu.css";
const Menu = () => {
  return (
    <>
      <input type="checkbox" id="openSidebarMenu" />
      <label for="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner buttom"></div>
      </label>

      <img
        alt="jitendra"
        src="https://www.redchillies.com/wp-content/themes/redchillies/img/red_logo_old.png"
      />

      <div id="sidebarMenu">
        <ul className="menu">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">OUR STORY</a>
          </li>
          <li>
            <a href="#">THE COMPANY</a>
          </li>
          <li>
            <a href="#">MOVIE</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONNECT</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
