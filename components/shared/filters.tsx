import { FC } from 'react'
import { FilterCheckbox, Title } from '@/components/shared'

export const Filters: FC = () => {
	return (
		<div>
			<Title size="sm" className="mb-5 font-bold">
				Фильтрация
			</Title>
			<div className="flex flex-col gap-4">
				<FilterCheckbox text='Можно собирать' value='1'/>
				<FilterCheckbox text='Новинки' value='2'/>
			</div>
		</div>
	)
}

