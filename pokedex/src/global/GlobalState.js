import React, { useState, useEffect } from 'react';
import GlobalStateContext from './GlobalStateContext';
import getAllPokemons from '../utils/getAllPokemons';
import { message } from 'antd';
import Footer from "../components/Footer/Footer"

const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState([0])
  const [byName, setByName] = useState([])
  useEffect(() => {
    setLoading(true);
    const allPokemons = async () => {
      const result = await getAllPokemons(30, (currentPage * 20));
      setPokemons(result);
      setLoading(false);
    };
    allPokemons();
  }, [setPokemons, currentPage]);

  useEffect(() => {
    const allByName = async() =>{
      const res = await getAllPokemons(150)
      setByName(res)
    } 
    allByName()
  },[setByName])

  useEffect(() => {
    const pokedexData = localStorage.getItem('pokedex');
    if (pokedexData) {
      setPokedex(JSON.parse(pokedexData));
      setLoading(false);
    }
  }, [setPokedex]);

  useEffect(() => {
    localStorage.setItem('pokedex', JSON.stringify(pokedex));
  }, [pokedex]);

  const changeCurrentPage = (currentPage) => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  }

  

  const successAlert = (msg) => {
    message.success({
      content: `${msg}`,
      duration: 1,
      className: 'custom-class',
      style: {
        marginTop: '10vh',
      },
    });
  };

  const errorAlert = (msg) => {
    message.error({
      content: `${msg}`,
      className: 'custom-class',
      style: {
        marginTop: '10vh',
      },
    });
  };

  const pokemonRegistered = (poke) => {
    const index = pokedex.findIndex((i) => i.id === poke.id);
    if (index === -1) {
      return false;
    }
    return true;
  };

  const addToPokeDex = (poke) => {
    const pokeNameCapitalized = poke.name.replace(/^\w/, (c) =>
      c.toUpperCase()
    );
    const confirm = window.confirm(
      `Voc?? deseja adicionar ${pokeNameCapitalized} a sua pokedex?`
    );
    if (confirm) {
      if (!pokemonRegistered(poke)) {
        setPokedex([...pokedex, poke]);
        successAlert(`${pokeNameCapitalized} foi adicionado a sua Pokedex!`);
      } else {
        errorAlert(`${pokeNameCapitalized} j?? est?? na sua Pokedex!`);
      }
    }
  };

  const removeFromPokedex = (poke) => {
    const pokeNameCapitalized = poke.name.replace(/^\w/, (c) =>
      c.toUpperCase()
    );
    const confirm = window.confirm(
      `Voc?? deseja remover ${pokeNameCapitalized} da sua pokedex?`
    );
    if (confirm) {
      const newPokedex = pokedex.filter((register) => register.id !== poke.id);
      setPokedex(newPokedex);
      successAlert(`${pokeNameCapitalized} foi removido da sua pokedex`);
    }
  };


  return (
    <GlobalStateContext.Provider
      value={{
        pokedex,
        pokemons,
        loading,
        addToPokeDex,
        removeFromPokedex,
        setLoading,
        changeCurrentPage,
        currentPage,
        pokemonRegistered,
        setPokemons,
        setCount,
        count,
        byName,
        setByName
      }}
    >
      {props.children}
      <Footer />
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
