import React, { useContext } from "react";
import { BlogContext } from "./BlogContext.js"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./view/homepage/MainPage.js"
import { makeStyles } from '@mui/styles';
import PrimarySearchAppBar from "./components/NavBar.js";
import "./App.css"
import { Divider } from "@mui/material";
import Typography from '@mui/material/Typography';


const { createContext, useState } = React;

const ThemeContext = createContext(null);

function Content() {
  const { style, visible, toggleStyle, toggleVisible } = useContext(
    ThemeContext
  );

  return (
    <div>
      <p>
        The theme is <em>{style}</em> and state of visibility is
        <em> {visible.toString()}</em>
      </p>
      <button onClick={toggleStyle}>Change Theme</button>
      <button onClick={toggleVisible}>Change Visibility</button>
    </div>
  );
}
const useStyles = makeStyles({
  MainContainer: {
    
    margin: "100px 50px ",
    display:"flex",
    flexDirection:"column"
    
  },

})

export default function App() {
  const [style, setStyle] = useState("light");
  const [visible, setVisible] = useState(true);
  const { user } = useContext(BlogContext);
  const classes = useStyles();




  function toggleStyle() {
    setStyle(style => (style === "light" ? "dark" : "light"));
  }
  function toggleVisible() {
    setVisible(visible => !visible);
  }

  return (
    <ThemeContext.Provider
      value={{ style, visible, toggleStyle, toggleVisible }}
    >
      <Box >

        <Paper elevation="3" className={classes.MainContainer}  >
          <PrimarySearchAppBar></PrimarySearchAppBar>
          <Divider sx={{marginBottom:"20px"}}/>
          <MainPage>


          </MainPage>


        </Paper>




      </Box>

    </ThemeContext.Provider>
  );
}