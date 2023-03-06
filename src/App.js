import "./App.scss";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="container">
        <div className="slider">
          <div className="small-container">SLIDER</div>
        </div>
      </div>

      <section className="items">
        <div className="container">
          <div className="items__inner">
            <div className="small-container items__innner">
              <div className="items__wrapper">
                <h1 className="items__title">Всі кросівки</h1>
                <div className="input">
                  <button className="input__search">
                    <img
                      src="./images/search.svg"
                      alt=""
                      className="input__search-img"
                    />
                  </button>
                  <input
                    type="text"
                    className="input__block"
                    placeHolder="Пошук..."
                  />
                </div>
              </div>

              <ul className="tovars">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
