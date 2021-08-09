import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GlobalStateContext from '../../global/GlobalStateContext';
import Homepage from '../../pages/Homepage/Homepage';
import getAllPokemons from '../../utils/getAllPokemons';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = () => {
  const classes = useStyles();
  const {pokemons, setPokemons, count, setCount,byName , setByName } = useContext(GlobalStateContext)
  console.log("aaaa",byName)
  

  function compararId(a,b){
    return a-b
  }
  const filtrarPokemonById = pokemons.sort(compararId)
  console.log(filtrarPokemonById)

  const handleChange = (event) => {
    console.log(event.target.value)
    if (event.target.value === "Id") {
      const pokemonsById =  pokemons.sort((a, b) => a.id - b.id)
       console.log('pokemonsByID: ', pokemonsById)
      setPokemons(pokemonsById)
      setCount(count+1)
      // console.log('reserva: ',reserva)
    } else {
  const pokeOrderedByName =  byName.sort(function (a, b)  {
    return a.name.localeCompare(b.name)
  })
      setPokemons(pokeOrderedByName)
      setCount(count+1)
      console.log('BYNAME:  ', pokeOrderedByName)
      
    }
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Selecione</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          //value={}
          onChange={handleChange}
        >
          <MenuItem value={"A-Z"}>A-Z</MenuItem>
          <MenuItem value={"Id"}>Id</MenuItem>
        </Select>
        <FormHelperText>Selecione por Id ou Nome</FormHelperText>
      </FormControl>
      
      
    </div>
  );
}
export default Filter