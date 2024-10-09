import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Api } from '@/services/api-client'

type ReturnProps = {
	ingredients: Ingredient[]
}



export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])


	useEffect(() => {
		(async () => {
			try {
				const ingredients =  await Api.ingredients.getAll()
				setIngredients(ingredients)
			} catch (error) {
				console.log(error)
			}
		})()
	}, [])

	return {ingredients}
}