import IMGlogo from "../image/logo.png";
function Header() {
  return (
    <>
      <nav className="flex justify-between bg-slate-500 items-center max-w-full px-10 py-0">
        <img src={IMGlogo} alt="" className="max-w-20" />

        <a href="/" className="underline p-2 bg-black-600 text-white text-3xl m">
          หน้าหลัก
        </a>
      </nav>
    </>
  );
}

export default Header;
