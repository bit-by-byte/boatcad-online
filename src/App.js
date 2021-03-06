import JsDos from './JsDos';
import FilePicker from './FilePicker';
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const [jsDosIsReady, setJsDosIsReady] = useState(false);

  return (
    <div className="mainBg">
      <Tabs className="topLevelTabs" defaultActiveKey="boatcad" onSelect={(key, ev) => ev?.currentTarget.blur()}>
        <Tab eventKey="boatcad" title="BoatCAD">
          <div className="jumbotron jumbotron-fluid mainBg">
            <Container>
              <Row>
                <Col xs={12}>
                  <JsDos setJsDosIsReady={setJsDosIsReady}/>
                </Col>
              </Row>
            </Container>
          </div>
        </Tab>
        <Tab eventKey="files" title="Files">
          <div className="jumbotron jumbotron-fluid mainBg">
              <FilePicker jsDosIsReady={jsDosIsReady}/>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
