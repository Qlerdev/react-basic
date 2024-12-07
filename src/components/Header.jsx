import IMGlogo from "../image/logo.png";
import "./Header.css";
function Header(props) {
  return (  
    <>
      <nav className="text-black">
        <img src={IMGlogo} alt="" className="max-w-11" />
        <a href="/">{props.title}</a>
      </nav>
    </>
  );
}

export default Header;
