import { configureStore } from "@reduxjs/toolkit";
import typingSpeed from "./typingSpeed";

export const store = configureStore({
    reducer:{
        typingSpeed : typingSpeed
    }
})