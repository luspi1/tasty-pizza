import React from 'react'
import { Title } from './title'
import { ProductCard } from './product-card'

type ProductsGroupListProps = {
	title: string
	items: any[]
	categoryId: number
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
	title,
	items,
	categoryId
}) => {
	return (
		<div>
			<Title size="lg" className="font-extrabold mb-5">{title}</Title>
			<div className="grid grid-cols-3 gap-[50px]">
				{items.map((item, i) => (
					<ProductCard
						id={i}
						key={item.id}
						name={item.name}
						imageUrl={item.url}
						price={item.price}
						count={i % 2}
						ingredients={item.ingredients}/>
				))}
			</div>
		</div>
	)
}
