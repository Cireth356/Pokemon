import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import { bindActionCreators } from 'redux';
import { SelectId } from '../actions/SelectId';
import { connect } from 'react-redux';

const urlList = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';

const List = props => {
  const [PokeList, setList] = useState([]);
  const [PokeListFiltered, setListFiltered] = useState([]);
  const [value, setValue] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    fetch(`${urlList}`)
      .then(res => res.json())
      .then(resultPokemon => {
        console.log(resultPokemon);
        setList(resultPokemon.results);
        setListFiltered(resultPokemon.results);
      });
  }, []);

  const handleChange = e => {
    debugger;
    e.persist();
    const pokeFiltered = PokeList.filter(x =>
      x.name.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    setValue(e.target.value);
    setListFiltered(pokeFiltered);
  };

  return (
    <>
      <div className="screen">
        <Filter value={value} handleChange={handleChange}></Filter>
        <div className="touchLeft">
          <ul>
            {PokeListFiltered.map(function(item, i) {
              return (
                <div key={i}>
                  <span
                    onClick={e => {
                      console.log(i + 1);
                      setId(item.name);
                      props.SelectId({ id: item.name });
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      SelectId
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(List);

//export default List;
