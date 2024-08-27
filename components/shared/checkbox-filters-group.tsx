'use client'

import { FC, useState } from 'react'
import {
	FilterCheckbox,
	FilterCheckboxProps
} from '@/components/shared/filter-checkbox'
import { Button, Input } from '@/components/ui'
import { Minus, Plus } from 'lucide-react'

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

	const [isExpanded, setIsExpanded] = useState<boolean>(false)
	const [searchInputValue, setSearchInputValue] = useState<string>('')
	const filteredList = isExpanded ?
		items
			.filter(el => el.text.toLowerCase().includes(searchInputValue.toLowerCase()))
		:
		items.slice(0, limit)

	const handleToggleExpanded = () => {
		setIsExpanded(!isExpanded)
		setSearchInputValue('')
	}

	return (
		<div className={className}>
			{title && <p className="font-bold mb-3">{title}</p>}
			{
				isExpanded && (
					<div className="mb-5">
						<Input placeholder={searchInputPlaceholder}
						       className="bg-gray-50 border-none"
						       onChange={(e) => setSearchInputValue(e.target.value)}/>
					</div>
				)
			}

			<div
				className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{
					filteredList.map((item, idx) => (
						<FilterCheckbox onCheckedChange={(val) => console.log(val)}
						                checked={false} key={idx} text={item.text}
						                value={item.value}
						                endAdornment={item.endAdornment}/>
					))
				}
			</div>
			<Button className="flex items-center gap-1 px-0 mt-3" variant="secondary"
			        onClick={handleToggleExpanded}>
				{
					isExpanded ?
						<>
							<Minus size={16}/>
							Свернуть
						</>
						:
						<>
							<Plus size={16}/>
							Показать всё
						</>
				}

			</Button>
		</div>
	)
}

