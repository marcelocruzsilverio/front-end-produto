import styled from "styled-components";

export const ProductListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 20px;
`;

export const ProductItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;

	@media (max-width: 470px) {
		display: block;
	}
`;

export const ProductField = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	width: 20%; /* Define uma largura fixa para os campos */

	p {
		max-width: 100%;
		white-space: normal; /* Permite quebra de linha */
		word-wrap: break-word; /* Quebra palavras longas */
		text-align: justify;
	}

	@media (max-width: 470px) {
		width: 100%;
		margin-bottom: 10px;
	}
`;

export const ButtonContainer = styled.div`
	margin-right: 60px;

	@media (max-width: 770px) {
		margin-right: 40px;
	}

	@media (max-width: 470px) {
		display: flex;
		justify-content: center;
		margin-right: 0;
	}
`;

export const RemoveButton = styled.button`
	padding: 5px 10px;
	border: none;
	border-radius: 5px;
	background-color: #ff0000;
	color: #fff;
	cursor: pointer;
	width: fit-content; /* Ajusta a largura do botão para caber no conteúdo */

	&:hover {
		background-color: #cc0000;
	}
`;
