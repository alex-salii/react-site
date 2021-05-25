import React, { Component } from 'react';
import { Card, CardDeck, Col, Container, ListGroup, Media, Row } from 'react-bootstrap';

class Blog extends Component {
  render() {
    return (
      <Container style={{
        marginTop: '70px'

      }}>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://lh3.googleusercontent.com/proxy/L2MyXhBteTHrg00SSPzmXPmhFw-1CAEe_HzKkIdHlp29-KeV6RGWpbOtcTXqTXx2BxPHfa6I60KXLVF7ebIsPF4iPHWt_yQGAAo5CblyomHExqRlc20Y"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://lh3.googleusercontent.com/proxy/L2MyXhBteTHrg00SSPzmXPmhFw-1CAEe_HzKkIdHlp29-KeV6RGWpbOtcTXqTXx2BxPHfa6I60KXLVF7ebIsPF4iPHWt_yQGAAo5CblyomHExqRlc20Y"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://lh3.googleusercontent.com/proxy/L2MyXhBteTHrg00SSPzmXPmhFw-1CAEe_HzKkIdHlp29-KeV6RGWpbOtcTXqTXx2BxPHfa6I60KXLVF7ebIsPF4iPHWt_yQGAAo5CblyomHExqRlc20Y"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://lh3.googleusercontent.com/proxy/L2MyXhBteTHrg00SSPzmXPmhFw-1CAEe_HzKkIdHlp29-KeV6RGWpbOtcTXqTXx2BxPHfa6I60KXLVF7ebIsPF4iPHWt_yQGAAo5CblyomHExqRlc20Y"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Blog;