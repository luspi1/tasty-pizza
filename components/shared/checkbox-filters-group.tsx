'use client'

import { FC } from 'react'
import {
	FilterCheckbox,
	FilterCheckboxProps
} from '@/components/shared/filter-checkbox'
import { Input } from '@/components/ui'

type CheckboxItem = FilterCheckboxProps

type CheckboxFiltersGroupProps = {
	title?: string
	items: CheckboxItem[]
	defaultItems?: CheckboxItem[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
	className?: string
}

export const CheckboxFiltersGroup: FC<CheckboxFiltersGroupProps> = ({
	title,
	items,
	defaultItems,
	searchInputPlaceholder = 'Поиск...',
	limit = 5,
	onChange,
	defaultValue,
	className
}) => {
	return (
		<div className={className}>
			{title && <p className="font-bold mb-3">{title}</p>}
			<div className="mb-5">
				<Input placeholder={searchInputPlaceholder}
				       className="bg-gray-50 border-none"/>
			</div>

			<div
				className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{
					items.map((item, idx) => (
						<FilterCheckbox onCheckedChange={(val) => console.log(val)} checked={false} key={idx} text={item.text}
						                value={item.value} endAdornment={item.endAdornment}/>
					))
				}
			</div>
		</div>
	)
}

