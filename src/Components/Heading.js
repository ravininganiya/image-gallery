import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    max-width: 70rem;
    margin: 2rem auto;
    text-algin: center;
`;

const H1 = styled.h1`
    font-family:'Oswald',sans-serif;
    margin-bottom:1em;
`;

export const Heading = () => {
    return (
        <Header>
            <H1>Gallery of images-Assignment(UnSplash API)</H1>
            <p>The most powerful photo engine in the world.</p>
        </Header>
    )
}
