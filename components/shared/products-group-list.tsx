'use client'

import React, { FC, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use';
import { Title } from './title'
import { ProductCard } from './product-card'
import { useCategoryStore } from '@/store/category'
type ProductsGroupListProps = {
	title: string
	items: any[]
	categoryId: number
}

export const ProductsGroupList: FC<ProductsGroupListProps> = ({
	title,
	items,
	categoryId
}) => {

	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title])

	return (
		<div id={title} ref={intersectionRef}>
			<Title size="lg" className="font-extrabold mb-5">{title}</Title>
			<div className="grid grid-cols-3 gap-[50px]">
				{items.map((item, i) => (
					<ProductCard
						id={i}
						key={item.id}
						name={item.name}
						imageUrl={item.url}
						price={item.variants[0].price}
						count={i % 2}
						ingredients={item.ingredients}/>
				))}
			</div>
		</div>
	)
}
