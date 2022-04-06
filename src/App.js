import React, { useContext } from "react";
import { BlogContext } from "./BlogContext.js"
import { Box, Grid, Toolbar, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./view/homepage/MainPage.js"
import { makeStyles } from '@mui/styles';
import PrimarySearchAppBar from "./components/NavBar.js";
import "./App.css"
import Categories from "./components/Categories.js";
import { Divider } from "@mui/material";
import Footer from "./components/Footer.js";
import BlogPage from "./view/blogpage/BlogPage.js"

const BlogPost = {
  title: "Algoritmanın Tarihi",
  content: "Günümüzde sıkça karşımıza çıkan algoritma kelimesinin nereden geldiğini hiç merak etmiş miydiniz? Her ne kadar yazılım ile alakalı başlıklarda duymaya alışık olsak da algoritma kavramı, bilgisayarlardan çok daha köklü bir geçmişe sahip. Bu yazıda amacımız, kısaca algoritma kavramının kökenine inip tarih boyuncaki gelişim sürecinden bahsetmektir. Dilerseniz, yazımıza bir algoritma tanımıyla başlayalım. Corman, Leiserson, Rivest ve Stein tarafından yazılan Algoritmalara Giriş kitabının birinci bölümünde algoritma için şöyle bir tanım yapılır Sözgelimi bir algoritma, girdi olarak bir değer veya değer kümesi alan ve çıktı olarak bir değer veya değer kümesi üreten herhangi bir hesaplama prosedürüdür. [7] Dolayısıyla algo",
  date: Date.now(),
  writer: "karahan saritas",
  categories: ["bilim", "teknoloji"]
}
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

    margin: "50px 50px ",
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    height: "80vh"
  }

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
          <Divider sx={{ marginBottom: "20px" }} />
          <Box className={classes.wrapper}>
            <Grid container className={classes.MainPage} spacing={2}>
              <Grid item className={classes.side} xs={2}>
                <Toolbar />
                <Categories></Categories>
              </Grid>
              <Grid item xs={10}  >
                <Router>
                  <Routes>
                    <Route exact path="/blog" element={<BlogPage blogPost={BlogPost} />} />
                    <Route path="/" element={<MainPage />} />

                  </Routes>
                </Router>

              </Grid>
            </Grid>
          </Box>
          <Footer></Footer>


        </Paper>




      </Box>

    </ThemeContext.Provider>
  );
}