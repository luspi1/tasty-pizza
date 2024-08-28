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
				<div className="flex gap-[60px]">
					<div className="w-[250px]">
						<Filters/>
					</div>
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList title="Пиццы" items={[{
								id: 2,
								name: 'Маргарита',
								url: 'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
								price: 330,
								ingredients: ['Чеснок', 'томатный соус']
							}]} categoryId={1}/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
