import React from 'react'

const Card = ({ event }) => {
    return (
        <div className="events_cont_2_card">
            <img className="events_cont_2_card_1" src={event.image} alt={event.title} />
            {event.ongoing && <p className="events_cont_2_card_1_head"><span>🟢</span> On-Going </p>}
            {!event.ongoing && <p className="events_cont_2_card_1_head1"><span>🔴</span> Completed </p>}
            <p className="events_cont_2_card_1_heading"> {event.title} </p>
            <p className="events_cont_2_card_1_para_1">
                {event.description}
            </p>
            <p className="events_cont_2_card_1_date">{event.date}</p>
        </div>
    )
}

export default Card