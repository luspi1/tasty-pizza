'use client'

import { FC, useState } from 'react'
import {
	FilterCheckbox,
	FilterCheckboxProps
} from '@/components/shared/filter-checkbox'
import { Button, Input, Skeleton } from '@/components/ui'
import { Minus, Plus } from 'lucide-react'

type CheckboxItem = FilterCheckboxProps

type CheckboxFiltersGroupProps = {
	title?: string
	items: CheckboxItem[]
	limit?: number
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	className?: string
	loading?:boolean
	selectedIds?: Set<string>,
	name?: string
}

export const CheckboxFiltersGroup: FC<CheckboxFiltersGroupProps> = ({
	title,
	items,
	searchInputPlaceholder = 'Поиск...',
	limit = 5,
	loading = false,
	onClickCheckbox,
	defaultValue,
	selectedIds,
	className,
	name
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
	if (loading) {
		return <div className={className}>
			{title && <p className="font-bold mb-3">{title}</p>}
			{
				Array.from({length: limit}).map((_, idx) => (
					<Skeleton key={idx} className='h-6 mb-4 rounded-[8px]'/>
				))
			}
			<Skeleton className='w-28 h-6 mb-4 rounded-[8px]'/>

		</div>
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
						<FilterCheckbox onCheckedChange={() => onClickCheckbox?.(item.value)}
						                checked={selectedIds?.has(item.value)} key={idx} text={item.text}
						                value={item.value}
						                endAdornment={item.endAdornment} name={name}/>
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

