import Card from "./components/Card";
import Link from "./components/Link";
import Button from "./components/Button";
import Tag from "./components/Tag";
import variety from "./data/variety.json";
import articles from "./data/articles.json";



function App() {
  return (
    <>

      <div className="main-container">

        <header className="main-navbar">

          <img src="src/images/logos/logo PauPei.jpg" alt="Logo Pau Pei"></img>
          <img src="src/images/logos/dibujo.jpg" alt="Logo Pau Pei"></img>

          <nav>
            <ul className="nav-list">

              <li>
                <Link isActive={true}><a href="#"><img src="./src/images/logos/logoInst.png" alt="logo instagram" width="50" height="50"></img></a></Link>
              </li>

              <li>
                <Link><a href="#"><img src="./src/images/logos/logoWsp.png" alt="logo wsp" width="50" height="50"></img></a></Link>
              </li>

              <li>
                <Button>Contactanos</Button>
              </li>

            </ul>
          </nav>

        </header>



        <main>

          <section className="post-list-container">

            <nav className="tags-filter">

              <ul className="nav-list">
                {variety.map((item) => (
                  <Tag>{item}</Tag>
                ))}
              </ul>

              <input className="input" type="text" placeholder="Buscar"></input>
            </nav>


            <div className="post-list">

              {articles.map((article, index) => {

                const isExtended = (index + 1) % 4 === 0;
                const isReversed = (index + 1) % 8 === 0;

                return (
                  <Card key={index} {...article}
                    isExtended={isExtended}
                    isReversed={isReversed}
                  />)

              })}
            </div>

          </section>

        </main>


      </div>

      <footer>
    
          <span>Realizado por
            <a href="https://github.com/mpchaneton"><img src="./src/images/logos/github-mark.png" alt="logo github" width="50" height="50"></img></a>
          </span>

      </footer>

    </>
  )
}

export default App;