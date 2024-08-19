import { FC } from 'react'
import { cn } from '@/lib/utils'
import { Categories, Container, SortPopup } from '@/components/shared'

type TopBarProps = {
	className?: string;
}

export const TopBar: FC<TopBarProps> = ({ className }) => {
	return (
		<div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
			<Container className='flex items-center justify-between'>
				<Categories/>
				<SortPopup/>
			</Container>
		</div>
	)
}

