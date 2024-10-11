import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ExploreNow = () => {
  const navigate = useNavigate();

  const states = [
    {
      name: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1516442719522-e0c1da18a0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Explore the vibrant culture and majestic palaces of Rajasthan.',
    },
    {
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1585842259708-02d3c585e042?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Enjoy the sunny beaches and lively nightlife in Goa.',
    },
    {
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1582213782179-1c87a6500b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Experience the serene backwaters and lush greenery of Kerala.',
    },
    {
      name: 'Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1585238342020-d0a9690c8e9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Discover the stunning landscapes and hill stations in Himachal Pradesh.',
    },
  ];

  const handleExplore = (stateName) => {
    navigate(`/state/${stateName}`);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Explore Now</h2>
      <Row>
        {states.map((state, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={state.image} alt={state.name} />
              <Card.Body>
                <Card.Title>{state.name}</Card.Title>
                <Card.Text>{state.description}</Card.Text>
                <Button variant="primary" onClick={() => handleExplore(state.name)}>
                  Explore More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreNow;
