import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Api } from '@/services/api-client'
import { useSet } from 'react-use'

type ReturnProps = {
	ingredients: Ingredient[]
	loading: boolean
	selectedIds: Set<string>
	onAddId: (id: string) => void
}

export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(true)
	const [selectedIds, { toggle }] = useSet(new Set<string>([]));

	useEffect(() => {
		(async () => {
			try {
				setLoading(true)
				const ingredients =  await Api.ingredients.getAll()
				setIngredients(ingredients)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		})()
	}, [])

	return {ingredients, loading, selectedIds, onAddId: toggle}
}