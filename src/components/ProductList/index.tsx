import React from "react";
import {
	ProductListContainer,
	ProductItem,
	RemoveButton,
	ProductField,
	ButtonContainer,
} from "./style";

interface Product {
	id: number;
	nome: string;
	valor: number;
	descricao: string;
}

const ProductList: React.FC<{
	products: Product[];
	onRemove: (id: number) => void;
}> = ({ products, onRemove }) => {
	return (
		<ProductListContainer>
			{products.map((product) => (
				<ProductItem key={product.id}>
					<ProductField>
						<strong>Nome</strong>
						<span>{product.nome}</span>
					</ProductField>
					<ProductField>
						<strong>Preço</strong>
						<span>R$ {product.valor ? product.valor.toFixed(2) : "-"}</span>
					</ProductField>
					<ProductField>
						<strong>Descrição</strong>
						<p>{product.descricao}</p>
					</ProductField>
					<ButtonContainer>
						<RemoveButton onClick={() => onRemove(product.id)}>
							Remover
						</RemoveButton>
					</ButtonContainer>
				</ProductItem>
			))}
		</ProductListContainer>
	);
};

export default ProductList;
