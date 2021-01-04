import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="title">Forest Sound</div>
        <div className="wrapper">
          <div className="button search">カートボタン</div>
          <div className="button search">検索ボタン</div>
        </div>
      </div>
      <div className="story">
        <img src={`${process.env.PUBLIC_URL}/image.png`} />
        <div className="content">
          <div className="title">Our Story</div>
          <div className="sentence">
            In the early 1960s at Tokyo’s Bridgestone Museum of Art, curator
            Hideo Matsushita hosted LP listening concerts, where people would
            experience vinyl records played on high-quality audio equipment.
            Matsushita was moved by the positive reactions guests had to the
            music, but was frustrated that the expense of high-fidelity
            listening prevented many people from experiencing it.
          </div>
          <div className="title">Founded in 1962</div>
          <div className="sentence">
            In 1962, Matsushita founded Forest Audio with the vision of
            producing high-quality audio for everyone. And following this
            vision, he soon created the first truly affordable phono cartridge,
            the AT-1, in the company’s small flat in Shinjuku, Tokyo.
          </div>
          <div className="title">A Passion for Listening</div>
          <div className="sentence">
            Building on our passion for listening we have grown to design
            critically acclaimed headphones, turntables and microphones,
            remaining a family business and retaining the belief that
            high-quality audio should be accessible to all.
          </div>
        </div>
      </div>
      <div className="products">
        <div className="title">Products</div>
        <div className="product-list">
          <div className="product">
            <img
              src={`${process.env.PUBLIC_URL}/product_images/wh-1000xm4.png`}
            />
            <div className="name">WH-1000XM4</div>
            <div className="maker">Sony</div>
            <div className="description">
              Next-level music with Edge-AI, co-developed with Sony Music
              Studios Tokyo. Up to 30-hour battery life with quick charging (10
              min charge for 5 hours of playback)...
            </div>
            <div className="sub-menu-wrapper">
              <div className="price-stock-wrapper">
                <div className="price">
                  <span className="label">$</span>278.00
                </div>
                <div className="stock">
                  <span className="label">stock: </span>4
                </div>
              </div>
              <div className="button-wrapper">
                <div className="button ml">
                  <span className="button-label">-</span>
                </div>
                <div className="button">
                  <span className="button-label">+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product">
            <img src={`${process.env.PUBLIC_URL}/product_images/n700nc.png`} />
            <div className="name">N700C</div>
            <div className="maker">AKG</div>
            <div className="description">
              Great ideas are born in silence.Optimized for travel and blending
              first class Adaptive Noise Cancelling technology with sleek and
              elegant design accents, the AKG N700NC Wireless...
            </div>
            <div className="sub-menu-wrapper">
              <div className="price-stock-wrapper">
                <div className="price">
                  <span className="label">$</span>349.00
                </div>
                <div className="stock">
                  <span className="label">stock: </span>2
                </div>
              </div>
              <div className="button-wrapper">
                <div className="button ml">
                  <span className="button-label">-</span>
                </div>
                <div className="button">
                  <span className="button-label">+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product">
            <img
              src={`${process.env.PUBLIC_URL}/product_images/surface_headphones2.png`}
            />
            <div className="name">Surface Headphones 2</div>
            <div className="maker">Microsoft</div>
            <div className="description">
            Experience your favorite music and shows like never before. Designed for all-day comfort, improved...
            
            </div>
            <div className="sub-menu-wrapper">
              <div className="price-stock-wrapper">
                <div className="price">
                  <span className="label">$</span>249.00
                </div>
                <div className="stock">
                  <span className="label">stock: </span>0
                </div>
              </div>
              <div className="button-wrapper">
                <div className="button ml disable">
                  <span className="button-label">-</span>
                </div>
                <div className="button disable">
                  <span className="button-label">+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product">
            <img
              src={`${process.env.PUBLIC_URL}/product_images/mini_plug_cable.png`}
            />
            <div className="name">3.5mm Mini Plug Cable</div>
            <div className="maker">Millso</div>
            <div className="description">
            Connect speakers, car or headphones with smartphones, tablets, PCs, CD players, Mp3 players and other 3.5mm output devices. Compatible with all digital...
            </div>
            <div className="sub-menu-wrapper">
              <div className="price-stock-wrapper">
                <div className="price">
                  <span className="label">$</span>18.00
                </div>
                <div className="stock">
                  <span className="label">stock: </span>42
                </div>
              </div>
              <div className="button-wrapper">
                <div className="button ml">
                  <span className="button-label">-</span>
                </div>
                <div className="button">
                  <span className="button-label">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
