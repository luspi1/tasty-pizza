import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar
} from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className="mt-9">
				<Title className="font-extrabold" size="lg">Все пиццы</Title>
			</Container>
			<TopBar/>
			<Container className="pt-10 pb-14">
				<div className="flex gap-[80px]">
					<div className="w-[250px]">
						<Filters/>
					</div>
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList title="Пиццы" categoryId={1} items={[{
								id: 2,
								name: 'Маргарита',
								url: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
								variants: [{ size: 'sm', price: 330 }, {
									size: 'lg',
									price: 400
								}, { size: 'xl', price: 550 }],
								ingredients: ['Чеснок', 'томатный соус']
							}, {
								id: 3,
								name: 'Чизбургер-пицца',
								url: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
								variants: [{ size: 'sm', price: 380 }, {
									size: 'lg',
									price: 400
								}, { size: 'xl', price: 550 }],
								ingredients: ['Чеснок', 'томатный соус', 'моцарелла']
							}]}
							/>
							<ProductsGroupList title="Комбо" categoryId={2} items={[{
								id: 2,
								name: 'Маргарита',
								url: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
								variants: [{ size: 'sm', price: 330 }, {
									size: 'lg',
									price: 400
								}, { size: 'xl', price: 550 }],
								ingredients: ['Чеснок', 'томатный соус']
							}, {
								id: 3,
								name: 'Чизбургер-пицца',
								url: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
								variants: [{ size: 'sm', price: 380 }, {
									size: 'lg',
									price: 400
								}, { size: 'xl', price: 550 }],
								ingredients: ['Чеснок', 'томатный соус', 'моцарелла']
							}]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
