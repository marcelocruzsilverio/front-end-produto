import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 100%;
	margin-top: 20px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
	background-color: #fff;
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
	resize: vertical;
`;

export const Button = styled.button`
	padding: 10px;
	border: none;
	border-radius: 5px;
	background-color: #0a4a99;
	color: #fff;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: #0000cd;
		font-weight: bold;
	}
`;

export const StyledParagraph = styled.p`
	padding: 10px;
	border: none;
	border-radius: 5px;
	background-color: #0a4a99;
	color: #fff;
	font-size: 16px;
	text-align: center;
`;
