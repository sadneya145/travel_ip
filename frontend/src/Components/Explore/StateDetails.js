import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const StateDetails = () => {
  const { stateName } = useParams();

  const stateDetails = {
    Rajasthan: {
      food: 'Dal Baati Churma, Laal Maas, Ghevar',
      places: ['Jaipur', 'Udaipur', 'Jaisalmer', 'Pushkar'],
      hotels: ['Taj Lake Palace, Udaipur', 'Umaid Bhawan Palace, Jodhpur', 'The Oberoi Rajvilas, Jaipur'],
      image: 'https://images.unsplash.com/photo-1516442719522-e0c1da18a0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    Goa: {
      food: 'Fish Curry, Bebinca, Prawn Balchao',
      places: ['Calangute Beach', 'Baga Beach', 'Dudhsagar Falls', 'Fort Aguada'],
      hotels: ['Taj Exotica', 'The Leela Goa', 'Alila Diwa'],
      image: 'https://images.unsplash.com/photo-1585842259708-02d3c585e042?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    Kerala: {
      food: 'Appam, Puttu, Kerala Sadya',
      places: ['Munnar', 'Alleppey', 'Kochi', 'Wayanad'],
      hotels: ['The Leela Kovalam', 'Taj Bekal', 'Kumarakom Lake Resort'],
      image: 'https://images.unsplash.com/photo-1582213782179-1c87a6500b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    'Himachal Pradesh': {
      food: 'Chana Madra, Siddu, Dham',
      places: ['Shimla', 'Manali', 'Dharamshala', 'Kasol'],
      hotels: ['The Oberoi Cecil, Shimla', 'Wildflower Hall', 'Solang Valley Resort'],
      image: 'https://images.unsplash.com/photo-1585238342020-d0a9690c8e9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  };

  const details = stateDetails[stateName];

  if (!details) {
    return <h2 className="text-center">State not found</h2>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={details.image} alt={stateName} />
            <Card.Body>
              <Card.Title>{stateName}</Card.Title>
              <Card.Text><strong>Popular Foods:</strong> {details.food}</Card.Text>
              <Card.Text><strong>Places to Visit:</strong> {details.places.join(', ')}</Card.Text>
              <Card.Text><strong>Nearby Hotels:</strong> {details.hotels.join(', ')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StateDetails;
