import { axiosInstance } from '@/services/instance'
import { Product } from '@prisma/client'
import { ApiRoutes } from '@/services/const'

export const search = async (query: string) => {
	return (await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {params: {query}})).data
}