import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
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
                <EventList>
                    {events.map(event => {
                        return (
                            <EventPanel key={`event-id-${event.id}`}>
                                <img src={event.imageurl} />
                                <div className="details">
                                <h4>{event.eventname}</h4>
                                {
                                    event.tickets &&
                                    <span>Tickets available</span>
                                }
                                
                                </div>
                            </EventPanel>
                        )
                    })}
                </EventList>
                :
                <p>No events for this artist</p>
            }
        </Fragment>
    )
}

const EventList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const EventPanel = styled.li`
    flex: 0 0 250px;
    display: flex;
    padding: 5px;
    background: rgba(0, 0, 0, 0.4);
    margin: 5px;
    img {
        width: 80px;
        height: 80px;
        flex: 0 0 80px;
    }
    .details {
        padding: 0px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex: 1 1 100px;
        h4 {
            margin: 0;
        }
        span {
            font-size: 0.8rem;
        }
    }
`;