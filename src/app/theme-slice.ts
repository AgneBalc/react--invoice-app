import { createSlice } from "@reduxjs/toolkit";

interface ThemeInicialState {
  theme: "light" | "dark";
}

const getTheme = () => {
  let theme = localStorage.getItem("theme");

  if (theme) return JSON.parse(theme);
  else return "light";
};

const initialState: ThemeInicialState = {
  theme: getTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const toggledTheme = state.theme === "light" ? "dark" : "light";
      state.theme = toggledTheme;

      localStorage.setItem("theme", JSON.stringify(toggledTheme));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
