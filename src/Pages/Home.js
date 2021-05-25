import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import Carousel from 'react-bootstrap/Carousel'
import { Card, CardDeck, Container, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck className="m-4" >
            <Card bg="warning">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </Card.Text>
                <Button variant="primary" >About team</Button>
              </Card.Body>
            </Card>
            <Card border="warning" text="primary">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </Card.Text>
                <Button variant="primary" >About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </Card>
            <Card bg="warning">
              <Card.Img
                variant="top"
              src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </Card.Text>
                <Button variant="primary" >About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}

export default Home;