import React from "react";
import ReactDOM from "react-dom/client";
import ProductPage from "./ProductPage";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import Navbar from "./components/Nav.tsx";
import {ThemeProvider} from "@mui/material";
import theme from "./styles/themes.ts";
import Footer from "./components/Footer.tsx";



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>

            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >

                <ThemeProvider theme={theme}>
                <Navbar/>
                <ProductPage/>
                    <Footer/>
                </ThemeProvider>
            </DevSupport>
        </BrowserRouter>
    </React.StrictMode>
);
