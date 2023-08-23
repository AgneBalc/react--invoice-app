import { createSlice } from "@reduxjs/toolkit";

interface ThemeInicialState {
  darkMode: boolean;
}

const initialState: ThemeInicialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
