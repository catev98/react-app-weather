import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="weather-app">
            <form className="search-form" id="search-form">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    autofocus="on"
                    autocomplete="off"
                    id="city-input"
                    className="form-control shadow-sm"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm w-100"
                  />
                </div>
              </div>
            </form>
            <h1 id="city">Lisbon</h1>
            <ul>
              <li id="date">Last updated: Tuesday 10:00</li>
              <li id="description">Cloudy</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <div className="clearfix">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="Cloudy"
                    className="float-left"
                  />
                  <div className="float-left value">
                    <span className="temperature" id="temperature">
                      26
                    </span>
                    <span class="units">
                      <a href="/">°C</a> | <a href="/">°F</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: 10%</li>
                  <li>Wind: 25 km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
