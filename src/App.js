import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container" style={{ width: "650px" }}>
        <div class="row">
          <div class="col-lg-12">
            <h1 class="text-center">
              SharU Token ICO Sale
              {/* <h5> ENERGY UNIT == TOKEN</h5> */}
              <br />
              <br />
            </h1>
          </div>
          <div class="loader">
            <p class="text-center">
              Loading...
            </p>
          </div>
          <div id="content" class="text-center">
            <p>Introducing SharU Token!
              Token price is <span class="token-price"></span> Ether.
              You currently have <span class="sharu-balance"></span>&nbsp; SharU.
            </p>
            <br />
            <br />
            <form onSubmit="App.buyTokens(); return false;" role="form">
              <div class="form-group">
                <div class="input-group">
                  <input id="numberOfToken" class="form-control input-lg" type="number"
                    name="number" value="1" min="1" pattern="[0-9]" />

                  <span class="input-group-btn">
                    <button type="submit" class="btn btn-primary btn-lg">Buy Tokens</button>
                  </span>
                </div>
              </div>
            </form>
            <br />
            <div class="progress">
              <div id="progress" class="progress-bar progress-bar-striped active" aria-valuemin="0"
                area-valuemax="100">

              </div>
            </div>
            <p> <span class="tokens-sold"> </span>/
              <span class="tokens-available"></span>
              tokens sold
            </p>
            <br />
            <p id="accountAddress">

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
