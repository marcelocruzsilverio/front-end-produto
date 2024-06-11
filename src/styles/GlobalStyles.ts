import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 700px) {
		.container {
			width: 80%;
		}
	}
}

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Adicione aqui outros estilos globais conforme necessário */
`;

export default GlobalStyles;
