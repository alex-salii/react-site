import React, { Component } from 'react';
import { Container, Nav, Row, Col, Tab } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="https://lh6.googleusercontent.com/_Y_JAvcB5iAkT1iaEKJHtaS17acrfQS5IELbuTVJU31opXTrcCMXTfZ1r5u1q38H4XrjWv4tdtxTG13feChba60L9lvTIHcRbQOD2a_97luyb7mczIYhXGbwBNz1HZyUQvIFADv6" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2018/01/21105317/compensation-trends-project-brainstorm-700x467.jpg" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://cdn.britannica.com/30/199930-131-B3D1D347/computer.jpg" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://treewebsolutions.com/uploads/article/19/top-front-end-frameworks-in-2020_M1yLHvWwc4IhY3NL.jpg" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://cdn.hackernoon.com/hn-images/1*aalTd6nKuVR31c3-bEED8g.jpeg" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

