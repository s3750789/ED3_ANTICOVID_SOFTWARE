import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Col, Container, Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header >
        <Container fluid>

          {/* Warning logs */}
          <Row className="warning-container">
            <div className="warning-logs">
              <h1>Warning logs</h1>
            </div>
          </Row>

          <Row>
            {/* Room condition  */}
            <Col xs lg="3">
              <div className="room-container">

                {/* Show date time  */}
                <Card.Body className="date-time-container">
                  <Card.Title id="Date">Mon 25, 2021</Card.Title>
                </Card.Body>
                
                {/* Temperature  */}
                <div className="temperature-container">
                  <Row>
                    <Col>
                      <p id="title">Temperature</p>

                      <div className="temperature-value">
                          <p>27 °<span>C</span></p>
                      </div>
                    </Col>
                    <Col>
                      <div id="room-image">
                        <img src="./icons/temperature.png" alt=""></img>
                      </div>
                    </Col>
                  </Row>
                  <div id="bottom"></div>
                </div>

                {/* <!-- humidity number  --> */}
                <div className="humidity-container">
                  <Row>
                    <Col>
                      <p id="title">Humidity</p>
                      <div className="humidity-value">
                        <p>45 <span>%</span></p>
                      </div>
                      <div className="humidity-description">
                        <p>Normal</p>
                      </div>
                    </Col>
                    <Col id="room-image">
                      <img src="./icons/humidity.png" alt=""/>
                    </Col>
                  </Row>
                  <div id="bottom"></div>
                </div>

                {/* Moisture container */}
                <div className="moisture-container">
                  <Row>
                    <Col>
                      <p id="title">Moisture</p>

                      <div className="moisture-value">
                        <p>45 <span>%</span></p>
                      </div>
                      <div className="moisture-description">
                        <p>Normal</p>
                      </div>
                    </Col>
                    <Col id="room-image">
                      <img src="./icons/moisture.png" alt=""></img>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            {/* Video stream */}
            <Col xs lg="9">

              {/* video stream row  */}
              <div className="video-container">
                <Row>
                  <Col className="social-image" id="video-stream">

                  </Col>
                  <Col className="QR-image" id="video-stream">
                    
                  </Col>
                </Row>
              </div>
              
              {/* Number of people  */}
              <div className="people-container">
                <Row >
                  <Col className="in-out-container">
                    <Row>

                      <Col className="people-in" id="card-people">
                        <div id="people-title">
                          <p>PEOPLE IN </p>
                        </div>
                        <div id="people-num">
                          <h1>10</h1>
                        </div>
                      </Col>

                      <Col className="people-out" id="card-people">
                        <div id="people-title">
                          <p>PEOPLE OUT </p>
                        </div>
                        <div id="people-num">
                          <h1>20</h1>
                        </div>
                      </Col>

                      
                    </Row>
                  </Col>

                  <Col className="existing-people">
                    <Row>
                      <Col className="align-items-center justify-content-center text-center">
                        <h2>Number people in the room</h2>
                      </Col>
                      <Col className="align-items-center">
                        <div className="circle">50</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              
            </Col>
            
          </Row>
          
        </Container>
      </header>
    </div>
  );
}

export default App;
