import React, {
  useState,
  useEffect
} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StarDiv = styled.div `
display: flex;
/* border: 3px solid red; */
width: 80%;
height: 60vh;
margin: 0 auto;
flex-wrap:wrap;
justify-content: space-evenly;

`;

export default function CharacterList() {
  const [items, setStar] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    console.log("inside use effect: " + searchTerm);

    // take the search term and build an api query from it
    var query = "https://rickandmortyapi.com/api/character/?name=" + searchTerm;

    axios
      .get(query)
      .then(response => 
        {
          setStar(response.data.results);
          
        })
  }, [searchTerm]);

  useEffect((
    searchTerm,
    items
  ) => {
    console.log(searchTerm)
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        const starPeople = response.data.results;

        items = response.data.results;

        console.log("rawdata", starPeople)
        setStar(starPeople);

        const trial = items.filter((item, index) =>
          item.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(trial);
      }, [searchTerm])

      .catch(error => {
        console.log("oh geez", error);
      });
  }, []);

  const handleChange = e => {

    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };


  return ( <
    StarDiv >

    <
    div >
    <
    input type = "text"
    placeholder = "Search"
    value = {
      searchTerm
    }
    onChange = {
      handleChange
    }
    /> <
    ul > {
      searchResults.map(item => ( <
        li > {
          item
        } < /li>
      ))
    } <
    /ul> < /
    div >



    {
      items.map((item, index) => {
        return (

          <
          CharacterCard key = {
            item.id
          }
          image = {
            item.image
          }
          name = {
            item.name
          }
          status = {
            item.status
          }
          location = {
            item.location.name
          }
          species = {
            item.species
          }
          />
        )
      })
    } <
    /StarDiv>
  )
}