import styled from 'styled-components';

export const AppWrapper = styled.div`
    width: 100%;
    font-size: 1rem;
    height: 100vh;
    background: url('/images/concert.jpg');
    background-size: cover;
    background-position: bottom;
    position: relative;
    color: #ffffff;
    &:before {
        content: '';
        height: 100vh;
        width: 100vw;
        background: rgba(0,0,0,0.6);
        position: absolute;
        z-index: 0;
    }
    div {
        z-index: 1;
    }
    .content {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Header = styled.div`
    background: #e066ff;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
        height: 4rem;
    }
`

export const Card = styled.div`
    border-radius: 5px;
    background: rgba(0,0,0,0.6);
    max-width: 1200px;
    width: 100%;
    margin: 5px;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    max-height: calc(100vh - 4rem);
    overflow: auto;
`