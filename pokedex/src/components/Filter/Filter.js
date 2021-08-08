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
  const {pokemons, setPokemons} = useContext(GlobalStateContext)
  const [pokemonByName, setPokemonByName] = useState([])
  console.log("aaaa",pokemons)
  
  const filtrarPokemon = pokemons && pokemons
  .sort((a,b)=>{
      if (a.name < b.name){
          return -1
      }
      if (a.name > b.name){
          return 0
      }
  })
  
const handleChange = (event) => {
    //setPokemonByName(filtrarPokemon);
    console.log(pokemons)
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Selecione</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={pokemons}
          onChange={handleChange}
        >
          <MenuItem value="Id">
          </MenuItem>
          <MenuItem value={"A-Z"}>A-Z</MenuItem>
          <MenuItem value={"Id"}>Id</MenuItem>
        </Select>
        <FormHelperText>Selecione por Id ou Nome</FormHelperText>
      </FormControl>
      
      
    </div>
  );
}
export default Filter