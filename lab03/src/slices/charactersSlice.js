import {createSlice} from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
    characterList: [
      {
        name: "Super Saiyan Goku",
        health: 100,
        fraction: "Saiyan",
        weapon: "Ki",
        damagePerHit: 25,
      },
      {
        name: "Tanijro Kamado",
        health: 80,
        fraction: "Villager",
        weapon: "Nichirin Katana",
        damagePerHit: 19,
      },
      {
        name: "Izuku Midoriya",
        health: 150,
        fraction: "Japanese",
        weapon: "One For All",
        damagePerHit: 10,
      },
      {
        name: "Yugi Muto",
        health: 50,
        fraction: "Student",
        weapon: "Dark Magician",
        damagePerHit: 15,

      },
    ],
    battleCharacters: [],
  },
  reducers: {
    //In canonical redux we can't mutate state directly, we need to return a new state
    //But slices use Immer library to do immutable state mutations behind the scenes,
    //so we can mutate state directly.
    //In this case reducer is not only reducer but also an action creator
    setBattleCharacters: (state, action) => {
      //state.battleCharacters = action.payload; will not work
      return {
        characterList: state.characterList,
        battleCharacters: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBattleCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;



