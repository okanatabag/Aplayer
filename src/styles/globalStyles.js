import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: #eee;
    font-family: Open-Sans, Helvetica, Sans-Serif;
}

*:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    outline: none;
    display: revert;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

a, button {
    cursor: revert;
}

ol, ul, menu {
    list-style: none;
}

img {
    max-width: 100%;
}

table {
    border-collapse: collapse;
}

textarea {
    white-space: revert;
}

meter {
    -webkit-appearance: revert;
    appearance: revert;
}

::placeholder {
    color: unset;
}

:where([hidden]) {
    display: none;
}

:where([contenteditable]) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
}

:where([draggable="true"]) {
    -webkit-user-drag: element;
}
`;

export default GlobalStyle;
