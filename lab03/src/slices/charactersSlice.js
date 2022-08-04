import {createSlice} from "@reduxjs/toolkit";

//CreateAsyncTunk is a function that allows us to get data asynchrously
// It takes type and a function that returns a promise
// Type has to be of the slice, slash, name of the action
export const getCharacters = createAsyncThunk('characters/getCharacters', async () => {
  const response = await fetch('http://localhost:3000/characters');
  const data = await response.json();
  return data;
})

//Slice in redux is a container that holds the state of the part of the application
//provides actions and reducers to manage the state
export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characterList: [],
    status: "idle",
    error: null,
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
  extraReducers(builder) {
    builder
      .addCase(getCharacters.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characterList = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setBattleCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;



