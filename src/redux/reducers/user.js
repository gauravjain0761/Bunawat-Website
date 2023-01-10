import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'users',
    initialState: {
      loggedUser: '',
      userData: [],
      userProfileData: [],
      loader:false
    },
    reducers: {
      setLoggedUser: (state, { payload }) => {
        state.loggedUser = { ...state.loggedUser, ...payload }
      },
  
      userLogin(state, action) {
        state.userData = action.payload
      },
  
      profileData(state, action) {
        state.userProfileData = action.payload
      },
  
      loaderData(state, action) {
        state.loader = action.payload
      },
    },
  })

export const { setLoggedUser, userLogin, profileData, loaderData } = userSlice.actions

export default userSlice.reducer
