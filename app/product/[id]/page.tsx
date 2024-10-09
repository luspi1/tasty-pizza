type ProductPageProps = {
	params: {id: string}
}

export default function ProductPage ({params: {id}}: ProductPageProps){
	return (
		<h3>{id}</h3>
	)
}


