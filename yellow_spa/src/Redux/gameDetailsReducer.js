// import {postAPI} from "../api/api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const defaultState = {
    status: null,
    statusScreenshots: null,
    currentGameId : null,
    title: '',
    description: '',
    rating: null,
    website: '',
    screenshots: [],

    reddit_url: '',
    released: '',
    developers_name: '',
    genres_name: '',
    esrb_rating_name: '',

}
export const getGameDetails = createAsyncThunk(
    'gameDetailsSlice/gameDetails',
    async ({ id }, {getState}) => {
        // const selectedPlatform = getState().game.selectedPlatform;
        // const selectedSort = getState().game.selectedSort;
        const BASE_URL = 'https://api.rawg.io/api/games/'
        let url = new URL(`${BASE_URL}${id}`);

        url.searchParams.append('key', '2602e4a916714a89a8d328d9f606b1aa') 

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        return await fetch(url,requestOptions)
            .then(res => res.json())
    }
);
export const getGameScreenshots = createAsyncThunk(
    'gameDetailsSlice/gameScreenshots',
    async ({ id }, {getState}) => {
        const BASE_URL = 'https://api.rawg.io/api/games/'
        let url = new URL(`${BASE_URL}${id}/screenshots`);
        url.searchParams.append('key', '2602e4a916714a89a8d328d9f606b1aa') 

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        return await fetch(url,requestOptions)
            .then(res => res.json())
    }
)

const gameDetailsSlice = createSlice({
    name: 'gameDetailsSlice',
    initialState: defaultState,
    reducers: {
        resetDetailsToDefault: (state, action) => {
            state.title = ''
            state.description = ''
            state.rating = ''
            state.website = ''
            state.screenshots = []
        }
    },
    extraReducers: {
        [getGameDetails.pending]: (state, action) => {
            console.log('pending')
            state.status = 'loading'
        },
        [getGameDetails.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.statusScreenshots = 'success'
            state.title = payload.name
            state.description = payload.description
            state.rating = payload.rating
            state.website = payload.website

            state.reddit_url = payload.reddit_url
            state.released = payload.released
            state.developers_name = payload.developers[0].name
            state.genres_name = payload.genres[0].name
            state.esrb_rating_name = payload.esrb_rating.name
        },
        [getGameDetails.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [getGameScreenshots.pending]: (state, action) => {
            console.log('pending')
            state.statusScreenshots = 'loading'
        },
        [getGameScreenshots.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.statusScreenshots = 'success'
            state.screenshots = payload.results.map(item => item.image)
        },
        [getGameScreenshots.rejected]: (state, action) => {
            state.statusScreenshots = 'failed'
        },
    }
})

export const { resetDetailsToDefault } = gameDetailsSlice.actions
export default gameDetailsSlice.reducer