import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionEvolution = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  padding: 20px 0;
  border-color: blue;
`;

export const EvolutionPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: gray
  }

  h4 {
    text-transform: capitalize;
    font-size: 23px;
    line-height: 26px;
    color: black;
  }
`;

export const EvolutionPokemonImage = styled(Link)`
  position: relative;
  display: flex;
  align-content: center;
  width: 180px;
  height: 180px;
  margin-bottom: 10px;

  img {
    margin: auto;
    width: 140px;
    height: 140px;
    z-index: 2;
    transition: transform 0.4s ease;
  }

  svg {
    position: absolute;
    right: 0;
    top: 0;
    height: inherit;
    width: initial;
    transition: transform 0.8s ease;

    path {
      fill: rgba(0, 0, 0, 0.06);
    }
  }

  &:hover {
    img {
      transform: scale(1.15);
    }
    svg {
      transform: rotate(180deg);
    }
  }
`;
