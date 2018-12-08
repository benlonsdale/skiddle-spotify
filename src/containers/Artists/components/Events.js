import React, {Fragment, useState} from 'react';
import { useEvents } from '../hooks';

export default ({match}) => {
    // console.log(props)
    const [ page, setPage ] = useState(1);
    const { artist } = match.params;
    const events = useEvents(artist);
    console.log(events);
    
    return (
        <Fragment>
            <h1>Events for {artist}</h1>
            {
                events !== undefined && events.length > 0 
                ?
                <ul>
                    {events.map(event => {
                        return <li key={`spotify-id-${event.id}`}>{event.description}</li>
                    })}
                </ul>
                :
                <p>No events for this artist</p>
            }
        </Fragment>
    )
}