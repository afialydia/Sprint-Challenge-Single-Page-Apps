import React from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
margin: .5%;
width:225px;
height:225px;
border-radius: 12px;
border: 3px solid rgb(208,196,182, 0.3);
text-align:center;
background-image: linear-gradient(to bottom right,rgb(246,170,84),rgb(166,190,212));

color:rgb(164,87,48);
`;

const StarName = styled.h2`
font-size:1.5rem;
`;

const CharacterCard= props =>{

    return(


        <Container key ={props.id}>
                 {/* <img src={props.image} alt="character" /> */}
        <h3>{props.name}</h3>
        <h4>Status: {props.status}</h4>
        <h4>Species: {props.species}</h4>
        <h4>Location: {props.location}</h4>


        </Container>
        
     
    )
}

export default CharacterCard;