import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MOVIES_LIST } from "../../actions/actions";
import { movieRouteApi } from "../../routes/apiRoutes";

export const movieMiddleWare = createAsyncThunk(
    MOVIES_LIST,
  async (_,{ rejectWithValue }) => {
    try {
      const { data } = await axios.get(movieRouteApi);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error?.response);
      return rejectWithValue(error);
    }
  }
);
