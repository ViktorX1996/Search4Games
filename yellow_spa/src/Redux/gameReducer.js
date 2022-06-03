// import {postAPI} from "../api/api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getAllGames = createAsyncThunk(
    'gameSlice/getAllGames',
    async ({ page, pageSize, search }) => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        return await fetch(`https://api.rawg.io/api/games?page=${page}&page_size=${pageSize}&search=${search}&key=2602e4a916714a89a8d328d9f606b1aa`, requestOptions)
            .then(res => res.json())
    }
);
const defaultState = {
    status: null,
    gamesList: [],
    searchInput: '',
}
const gameSlice = createSlice({
    name: 'gameSlice',
    initialState: defaultState,
    reducers: {
        setSearchInput: (state, action) => {
            state.gamesList = [];
            state.searchInput = action.payload
        }
    },
    extraReducers: {
        [getAllGames.pending]: (state, action) => {
            console.log('pending')
            state.status = 'loading'

        },
        [getAllGames.fulfilled]: (state, { payload }) => {
            state.gamesList = [...state.gamesList, ...payload.results]
            console.log('POLUCHILI')
            console.log(payload)
            state.status = 'success'
        },
        [getAllGames.rejected]: (state, action) => {
            state.status = 'failed'
            console.log('rejected')
        },
    }
})

export const { setSearchInput } = gameSlice.actions
export default gameSlice.reducer