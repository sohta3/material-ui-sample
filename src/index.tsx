import * as React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import { Hello } from "./components/Hello";

ReactDOM.render(
    <MuiThemeProvider>
        <MyAwesomeReactComponent />
    </MuiThemeProvider>,
    document.getElementById("example")
);
