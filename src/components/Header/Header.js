import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="small-container">
            <div className="header__box">
              <div className="header__logo-box">
                <a href="#" className="header__logo-link">
                  <img
                    src="./images/logo.png"
                    alt="logo"
                    className="header__logo"
                  />
                  <div className="header__logo-text">
                    <p className="header__logo-name">Cross-Fit</p>
                    <p className="header__logo-descr">
                      Магазин найкращих кросівок
                    </p>
                  </div>
                </a>
              </div>
              <ul className="header__info-list">
                <li className="header__item">
                  <a href="#" className="header__likes-link header-backet">
                    <img
                      src="./images/backet.svg"
                      alt=""
                      className="header__like-img"
                    />
                    <p className="header__price"> 1205 грн.</p>
                  </a>
                </li>
                <li className="header__item">
                  <a href="#" className="header__likes-link">
                    <img
                      src="./images/like.svg"
                      alt=""
                      className="header__like-img"
                    />
                  </a>
                </li>
                <li className="header__item">
                  <a href="#" className="header__likes-link">
                    <img
                      src="./images/user.svg"
                      alt=""
                      className="header__like-img"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
