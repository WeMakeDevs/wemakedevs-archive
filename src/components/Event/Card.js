import React from "react";
import { Link } from "react-router-dom";

const CardContent = ({ event }) => {
  return (
    <>
      <img
        className="events_cont_2_card_1"
        src={event.image}
        alt={event.title}
      />
      {event.ongoing && (
        <p className="events_cont_2_card_1_head">🟢 On-Going </p>
      )}
      {!event.ongoing && (
        <p className="events_cont_2_card_1_head1">🔴 Completed </p>
      )}
      <p className="events_cont_2_card_1_heading"> {event.title} </p>
      <p className="events_cont_2_card_1_para_1">{event.description}</p>
      <p className="events_cont_2_card_1_date">{event.date}</p>
    </>
  );
};

const Card = ({ event }) => {
  if (event.link) {
    return (
      <Link to={event.link} className="events_cont_2_card">
        <CardContent event={event} />
      </Link>
    );
  }

  return (
    <div className="events_cont_2_card">
      <CardContent event={event} />
    </div>
  );
};


export default Card;
