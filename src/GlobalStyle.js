import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
	padding-top:50px;
	background-color: #1f1f20;
	color: white;
	/* min-height:100vh; */
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
