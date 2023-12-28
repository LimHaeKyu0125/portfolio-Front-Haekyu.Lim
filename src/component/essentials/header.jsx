import '../../assets/styles/css/essentials.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="blind">LOGO</span>
        </div>
        <nav className="nav-section">
          <ul className="header-menu-list">
            <li>
              <a href="#">INFO</a>
            </li>
            <li>
              <a href="#">HISTORY</a>
            </li>
            <li>
              <a href="#">MY SKILL</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
