import Form from "./components/Form";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import GlobalStyles from "./styles/GlobalStyles";

import React, { useState, useEffect } from "react";

interface Product {
	id: number;
	nome: string;
	valor: number;
	descricao: string;
}

const App: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("http://localhost:8080/api/produto");
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error("Erro ao buscar os produtos:", error);
			}
		};

		fetchProducts();
	}, []);

	const handleSaveProduct = (newProduct: Product) => {
		setProducts((prevProducts) => [...prevProducts, newProduct]);
	};

	const handleRemoveProduct = async (id: number) => {
		try {
			await fetch(`http://localhost:8080/api/produto/${id}`, {
				method: "DELETE",
			});
			setProducts((prevProducts) =>
				prevProducts.filter((product) => product.id !== id)
			);
		} catch (error) {
			console.error("Erro ao remover o produto:", error);
		}
	};

	return (
		<>
			<GlobalStyles />
			<Header />
			<Form onSave={handleSaveProduct} />
			<ProductList products={products} onRemove={handleRemoveProduct} />
		</>
	);
};

export default App;
