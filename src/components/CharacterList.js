import React, {
  useState,
  useEffect
} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StarDiv = styled.div`
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

  useEffect(()=> {
      axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then( response =>{
          console.log(response.data.results);
          const starPeople = response.data.results;
          console.log("rawdata", starPeople)
          setStar(starPeople);

      })
      .catch(error=> {
          console.log("oh geez", error);
      });
  }, []);

  return(
      <StarDiv>
      {items.map((item, index) => {
          return( 

              <CharacterCard
              key={item.index}
              name= {item.name}
              status= {item.status}
              species= {item.species}
              created= {item.created}
          />
          )
      })
      }
  </StarDiv>
  )
}