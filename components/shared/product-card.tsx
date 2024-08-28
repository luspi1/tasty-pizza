import { FC } from 'react'
import Link from 'next/link'
import { Title } from '@/components/shared/title'
import { CountButton } from '@/components/shared'
import { Button } from '@/components/ui'
import { Plus } from 'lucide-react'


type ProductCardProps = {
	id: number
	name: string
	price: number
	imageUrl: string
	count?: number
	ingredients: string[]
}

export const ProductCard: FC<ProductCardProps> = ({
	imageUrl,
	name,
	id,
	price,
	ingredients,
	count
}) => {
	return (
		<div>
			<Link href={`/product/${id}`}>
				<div
					className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
					<img className="w-[215px] h-[215px]" src={imageUrl} alt={name}/>
				</div>
				<Title size="sm" className="mb-1 mt-3 font-bold">{name}</Title>
				<p>
					{ingredients?.map((el, i) => (
						<span key={i}>{
							ingredients.length - 1 !== i ? `${el}, ` : `${el}`
						}</span>
					))}
				</p>
			</Link>
			<div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <b>{price} ₽</b>
        </span>

				{count ? (
					<CountButton value={count} size="lg"/>
				) : (
					<Button variant="secondary">
						<Plus size={20} className="mr-1"/>
						Добавить
					</Button>
				)}
			</div>
		</div>
	)
}

