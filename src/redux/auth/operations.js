import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/Api";

const token = {
    set(token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        api.defaults.headers.common.Authorization = '';
    }
};

export const register = createAsyncThunk(
    'auth/register',
     async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  
  export const logIn = createAsyncThunk(
    'auth/login',
     async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  
  export const logOut = createAsyncThunk(
    'auth/logout',
     async (thunkAPI) => {
    try {
      await api.post('/users/logout');
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  
  export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
  
      token.set(persistedToken);
      try {
        const { data } = await api.get('/users/current');
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );

  //OK