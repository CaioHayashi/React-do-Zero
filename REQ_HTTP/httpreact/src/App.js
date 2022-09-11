import "./App.css";

import { useState, useEffect } from "react";

function App() {
	const [products, setProducts] = useState([]);

	const url = "http://localhost:3000/products";

	// 1 - resgatando dados
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url);

			const data = await response.json();

			setProducts(data);
		}
		fetchData();
	}, []);

	return (
		<div className="App">
			<h1>Lista de Produtos</h1>
			<ul>
				{products.map((products) => (
					<li key={products.id}>
						{products.name} - R${products.price}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
