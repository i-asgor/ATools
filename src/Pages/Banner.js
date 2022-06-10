import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import banner from '../img/banner.png';

const Banner = () => {
    return (
        <Row xs={1} className="g-4">
        
          <Col>
            <Card>
              <Card.Img variant="top" src={banner}/>
            </Card>
          </Col>
      </Row>
    );
};

export default Banner;