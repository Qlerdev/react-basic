import IMGlogo from "../image/logo.png";
function Header() {
  return (
    <>
      <nav>
        <img src={IMGlogo} alt="" />
        <a href="/" className="text-black underline">
          หน้าแรก
        </a>
      </nav>
    </>
  );
}

export default Header;
