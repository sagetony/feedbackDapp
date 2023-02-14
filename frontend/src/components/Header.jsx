import { Button, Col, Row } from "react-bootstrap";

function Header({account, WebHandler}) {
  return (
    <div>
      <header id="header">
        <div className="header-fixed-height"></div>
        <div className="menu-area sticky-header">
          <div className="container custom-container">
            <Row>
                <Col>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      {/* <a href="/">
                        <img src="" alt="lOGO" />
                      </a> */}
                    </div>
                    <div className="navbar-wrap main-menu d-lg-flex">
                      <ul className="navigation">
                        <li className="active menu-item-has-children">
                          <a href="/" className="section-link">
                            Home
                          </a>
                        </li>
                        
                        <li className="active menu-item-has-children">
                          <a href="#feedback" className="section-link">
                            Feedbacks
                          </a>
                        </li>
                        <li className="active menu-item-has-children">
                          <a href="/" className="section-link">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                    {account ? (
                      <Button>
                        {account.slice(0, 5) + "..." + account.slice(38, 42)}
                      </Button>
                    ) : (
                      <Button onClick={WebHandler}>Connect Wallet </Button>
                    )} 
                  </nav>
                </div>
                </Col>
            </Row>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
