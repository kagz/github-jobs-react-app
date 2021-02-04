import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
	background-color: #1f1f20;
}
.form-group {
    margin: 1rem;
}
 .nav-bar ,.navbar-dark,.bg-dark{
	background-color: #151e27 !important;
	z-index: 9999999;
 }
 `;
export default GlobalStyle;
