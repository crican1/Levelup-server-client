import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  game, //
  description,
  date,
  time,
  organizer,
}) => (
  <Card className="text-center">
    <Card.Header>{game}</Card.Header>
    <Card.Body>
      <Card.Title>Description: {description}</Card.Title>
      <Card.Text>{date}</Card.Text>
      <Card.Text>{time}</Card.Text>
      <Card.Text>{organizer}</Card.Text>
    </Card.Body>
  </Card>
);

EventCard.propTypes = {
  game: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
};

export default EventCard;
