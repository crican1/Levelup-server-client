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
    <Card.Header>Title: {game}</Card.Header>
    <Card.Body>
      <Card.Title>Description: {description}</Card.Title>
    </Card.Body>
    <Card.Footer className="text-muted">Date: {date} Time: {time} Organizer: {organizer}
    </Card.Footer>
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
