import "./App.css";

import { useState, useEffect } from "react";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

function App() {
	const [products, setProducts] = useState([]);

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	const url = "http://localhost:3000/products";

	// 4 - custom
	const { data: items } = useFetch(url);

	// 1 - resgatando dados
	// useEffect(() => {
	// 	async function fetchData() {
	// 		const res = await fetch(url);
	// 		const data = await res.json();

	// 		setProducts(data);
	// 	}
	// 	fetchData();
	// }, []);

	// 2 - adicionando dados
	const handleSubmit = async (e) => {
		e.preventDefault();

		const product = {
			name,
			price
		};

		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(product)
		});

		// 3 - carregamento dinâmico
		const addedProduct = await res.json();

		setProducts((prevProducts) => [...prevProducts, addedProduct]);
	};

	return (
		<div className="App">
			<h2>Lista de Produtos</h2>
			<ul>
				{items &&
					items.map((product) => (
						<li key={product.id}>
							{product.name} - R$ {product.price}
						</li>
					))}
			</ul>

			<div className="add-product">
				<form onSubmit={handleSubmit}>
					<label>
						Nome:
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label>
						Preço:
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</label>
					<input type="submit" value="Criar" />
				</form>
			</div>
		</div>
	);
}

export default App;
