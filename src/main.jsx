import React from "react";
import ReactDOM from "react-dom/client";
import ProductPage from "./ProductPage";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <ProductPage/>
            </DevSupport>
        </BrowserRouter>
    </React.StrictMode>
);
