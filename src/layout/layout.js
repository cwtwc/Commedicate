import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from './theme'
const Theme = props => {
    return (<ThemeProvider theme={theme}>{props.children}</ThemeProvider>  );
}
 
export default Theme