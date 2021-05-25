import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SammerImg from '../assets/sammer.jpg';
import SpringImg from '../assets/sprin.jpg';
import OtemImg from '../assets/otem.jpg';

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SpringImg}
            alt="Spring"
          />
          <Carousel.Caption>
            <h3>Spring image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={OtemImg}
            alt="Otem"
          />
          <Carousel.Caption>
            <h3>Autumn image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SpringImg}
            alt="Spring"
          />
          <Carousel.Caption>
            <h3>Spring image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;