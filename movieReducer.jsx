import { createSlice } from "@reduxjs/toolkit";
import { movieMiddleWare } from "./movieMiddleware";
// import { MovieDataState } from "./movieTypes";

const initialState = {
  isLoading: false,
  error: "",
  data: { res: "",state: "", firstName:"",role: ""},
};

const movieDataReducer = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(movieMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(movieMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log(state.data.results);
    });
    builder.addCase(movieMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const movieDataReducers = movieDataReducer.reducer;
