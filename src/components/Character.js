// Write your Character component here
import React from 'react';
import styled from 'styled-components';
const LegoStarWars = styled.div`
display: flex;
justify-content: center;
padding: 16px;
border: 2px dotted white;
color: limegreen;
margin:6px;
`
const Dudes = props => {
    const {character} = props;
return (
    <div>
        <LegoStarWars>
            <h2>{character.name}</h2>
        </LegoStarWars>
    </div>
)
}
export default Dudes;