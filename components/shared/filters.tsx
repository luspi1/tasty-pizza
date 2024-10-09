'use client'

import { FC } from 'react'
import {
	CheckboxFiltersGroup,
	FilterCheckbox,
	RangeSlider,
	Title
} from '@/components/shared'
import { Input } from '@/components/ui'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'

export const Filters: FC = () => {
	const {ingredients} = useFilterIngredients()

	const preparedIngredients = ingredients.map((el) => ({value: String(el.id), text: el.name}))

	return (
		<div>
			<Title size="sm" className="mb-5 font-bold">
				Фильтрация
			</Title>
			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Можно собирать" value="1"/>
				<FilterCheckbox text="Новинки" value="2"/>
			</div>
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input type="number" placeholder="0" min={0} max={1000}
					       defaultValue={0}/>
					<Input type="number" min={100} max={1000} placeholder="1000"/>
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]}/>
			</div>
			<CheckboxFiltersGroup title="Ингредиенты" className="mt-5" limit={4}
			                      defaultItems={preparedIngredients.slice(0, 6)}
			                      items={preparedIngredients}/>
		</div>
	)
}

