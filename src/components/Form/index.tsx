import React, { useState } from "react";
import {
	FormContainer,
	Input,
	TextArea,
	Button,
	StyledParagraph,
} from "./style";

interface Product {
	id: number;
	nome: string;
	valor: number;
	descricao: string;
}

const Form: React.FC<{ onSave: (product: Product) => void }> = ({ onSave }) => {
	const [nome, setNome] = useState("");
	const [valor, setValor] = useState("");
	const [descricao, setDescricao] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const newProduct = { nome, valor: parseFloat(valor), descricao };
		console.log(newProduct);

		try {
			const response = await fetch("http://localhost:8080/api/produto", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			});

			const savedProduct = await response.json();
			console.log(savedProduct);
			onSave(savedProduct);

			window.alert("Produto salvo com sucesso!");

			// Reset form fields
			setNome("");
			setValor("");
			setDescricao("");
		} catch (error) {
			console.error("Erro ao salvar o produto:", error);
		}
	};

	return (
		<div className="container">
			<FormContainer onSubmit={handleSubmit}>
				<label>
					Nome:
					<Input
						type="text"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
						required
					/>
				</label>
				<label>
					Preço:
					<Input
						type="text"
						value={valor}
						onChange={(e) => setValor(e.target.value)}
						required
					/>
				</label>
				<label>
					Descrição:
					<TextArea
						value={descricao}
						onChange={(e) => setDescricao(e.target.value)}
					/>
				</label>
				{valor && nome ? (
					<Button type="submit">Salvar</Button>
				) : (
					<StyledParagraph>
						Digite os dados para cadastrar um produto!
					</StyledParagraph>
				)}
			</FormContainer>
		</div>
	);
};

export default Form;
