// import {postAPI} from "../api/api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const defaultState = {
    status: null,
    gamesList: [],
    isOpen: false,
    searchInput: '',
    page: 1,
    count: 1,
    isEndOfList: false,
    selectedPlatform: 0,
    selectedSort: 'none'
}
export const getAllGames = createAsyncThunk(
    'gameSlice/getAllGames',
    async ({ page, pageSize, search }, {getState}) => {
        const selectedPlatform = getState().game.selectedPlatform;
        const selectedSort = getState().game.selectedSort;
        const BASE_URL = 'https://api.rawg.io/api/'
        let url = new URL(`${BASE_URL}games?page=${page}&page_size=${pageSize}&search=${search}&search_exact=true`);
          
        selectedPlatform !==0 && url.searchParams.append('parent_platforms', selectedPlatform)
        selectedSort !== 'All' && url.searchParams.append('ordering', selectedSort)

        url.searchParams.append('key', '2602e4a916714a89a8d328d9f606b1aa') 

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        return await fetch(url,  requestOptions)
            .then(res => res.json())
    }
);

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState: defaultState,
    reducers: {
        setSearchInput: (state, action) => {
            state.page = 1;
            state.gamesList = [];
            state.searchInput = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setPlatform: (state, action) => {
            state.page = 1;
            state.gamesList = [];
            state.selectedPlatform = +action.payload  // +converts string to number
        },
        setSort: (state, action) => {
            state.page = 1;
            state.gamesList = [];
            state.selectedSort = action.payload
        },
        setIsOpen: (state, action) => {
            state.isOpen = action.payload
        }
    },
    extraReducers: {
        [getAllGames.pending]: (state, action) => {
            // console.log('pending')
            state.status = 'loading'

        },
        [getAllGames.fulfilled]: (state, { payload }) => {
            state.count = payload.count;
            if (payload.hasOwnProperty('results')) {
                if (payload.results.length > 0) {
                    state.gamesList = [...state.gamesList, ...payload.results];
                    state.isEndOfList = false;
                }
            }else{
                state.isEndOfList = true;
            }
            // console.log('fulfilled')
            // console.log(payload)
            state.status = 'success'
        },
        [getAllGames.rejected]: (state, action) => {
            state.status = 'failed'
            console.log('rejected')
        },
    }
})

export const { setSearchInput, setPage,setPlatform,setSort,setIsOpen } = gameSlice.actions
export default gameSlice.reducer