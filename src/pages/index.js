import React from "react"
// import { Link } from "gatsby"
import mixitup from "mixitup"
import Emoji from "react-emoji-render"
import Lottie from "react-lottie"
import * as moodbubble from "../images/5283-mood-bubble.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"
import { CardDeck, Card, Row, Col, Button } from "react-bootstrap"


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: moodbubble.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }




const IndexPage = () => {

    // MixItUp Settings
    const containerEl = document.querySelector(".project-grid")
    
    if (containerEl) {
      const mixer = mixitup(containerEl, {
        selectors: {
          target: ".project",
        },
        animation: { effects: "scale", easing: "ease" },
      })

      mixer.filter(".dev .js .rails")
    }

      

      return (
        <Layout>
          <SEO title="Home" />
          <div className="hero d-flex align-items-center">
            <div className="hero-copy flex-grow-1">
              <h1>
                Hi.
                <br />
                I'm <span>Kyle</span>.
              </h1>
              <h2>
                I'm a <span>Designer turned Developer</span> in Denver{" "}
                <Emoji text=":v:" style={{ fontSize: "1.7em" }} />
              </h2>
            </div>
            <div className="lottie-container">
              <Lottie
                options={defaultOptions}
                height={"60vh"}
                width={"60vh"}
                speed={0.1}
                isStopped={false}
                isPaused={false}
              />
              <h4>See My Work</h4>
            </div>
          </div>
          <div className="project-grid">
            <h2>Selected Projects</h2>
            <CardDeck>
              {/* Postpandemic */}
              <Card className="project dev js rails" data-cat="dev js rails">
                <Card.Body className="project-card">
                  <Row>
                    <Col>
                      <Card.Title className="project-title">
                        postpandemic
                      </Card.Title>
                    </Col>
                    <Col>
                      <p className="project-links">
                        <Button
                          size="sm"
                          href="https://github.com/lukekyl/postpandemic"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          size="sm"
                          href="https://postpandemic.herokuapp.com/"
                          target="_blank"
                        >
                          Demo
                        </Button>
                      </p>
                    </Col>
                  </Row>
                  <Card.Text>
                    <Row>
                      <Col md={8}>
                        <p className="project-description">
                          A single page web application providing messages of
                          hope for a world recovering from the Coronavirus
                          Pandemic.
                        </p>
                      </Col>
                      <Col>
                        <p className="project-type">
                          React Frontend + Rails Backend
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Ruby on Rails • React • Redux • Redux Thunk • React
                    Bootstrap • Unsplash API • CSS Animations
                  </small>
                </Card.Footer>
              </Card>
              {/* HellaFresh */}
              <Card className="project dev js rails" data-cat="dev js rails">
                <Card.Body className="project-card">
                  <Row>
                    <Col>
                      <Card.Title className="project-title">
                        HellaFresh
                      </Card.Title>
                    </Col>
                    <Col>
                      <p className="project-links">
                        <Button
                          size="sm"
                          href="https://github.com/lukekyl/HellaFresh"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          size="sm"
                          href="https://hellafresh.herokuapp.com/"
                          target="_blank"
                        >
                          Demo
                        </Button>
                      </p>
                    </Col>
                  </Row>
                  <Card.Text>
                    <Row>
                      <Col md={8}>
                        <p className="project-description">
                          A single page online ordering web application template
                          for all types of delivery services.
                        </p>
                      </Col>
                      <Col>
                        <p className="project-type">
                          Javascript Frontend + Rails Backend
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Ruby on Rails • ECMAScript 6 Vanilla Javascript • Foundation
                    Frontend Framework
                  </small>
                </Card.Footer>
              </Card>
              {/* Filtered. */}
              <Card className="project dev js rails" data-cat="dev js rails">
                <Card.Body className="project-card">
                  <Row>
                    <Col>
                      <Card.Title className="project-title">
                        Filtered.
                      </Card.Title>
                    </Col>
                    <Col>
                      <p className="project-links">
                        <Button
                          size="sm"
                          href="https://github.com/lukekyl/Filtered"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          size="sm"
                          href="https://filteredcoffee.herokuapp.com/"
                          target="_blank"
                        >
                          Demo
                        </Button>
                      </p>
                    </Col>
                  </Row>
                  <Card.Text>
                    <Row>
                      <Col md={8}>
                        <p className="project-description">
                          An app for coffee lovers. Filtered lets users review
                          the coffee they try and find new favorites.
                        </p>
                      </Col>
                      <Col>
                        <p className="project-type">
                          Ruby on Rails MVC Application with OmniAuth
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Ruby on Rails • Secure Login with Devise and OmniAuth •
                    Foundation Frontend Framework
                  </small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>

          {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
        </Layout>
      )
    }

export default IndexPage
