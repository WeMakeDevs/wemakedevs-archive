import React from 'react'
import Card from './Card'

const CardsList = ({ events }) => {
    return (
        <div className="events_cont_2">
            {
                events.map(event => <Card event={event} />)
            }
        </div>
    )
}

export default CardsList