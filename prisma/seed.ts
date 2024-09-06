import { hashSync } from 'bcrypt'
import { _ingredients, categories, products } from './const'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


const randomDecimalNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
	productId,
	type,
	size,
}: {
	productId: number;
	type?: 1 | 2;
	size?: 20 | 30 | 40;
}) => {
	return {
		productId,
		price: randomDecimalNumber(190, 600),
		type,
		size,
	}
};


async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User',
				email: 'user@mail.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Igor Babin',
				email: 'igbabin566@gmail.com',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		]
	})

	await prisma.category.createMany({
		data: categories,
	})

	await prisma.ingredient.createMany({
		data: _ingredients,
	})

	await prisma.product.createMany({
		data: products
	})

	const pizza1 = await prisma.product.create({
		data: {
			name: 'Пепперони фреш',
			imageUrl:
				'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
			categoryId: 1,
			ingredients: {
				connect: [],
			},
		},
	});

	const pizza2 = await prisma.product.create({
		data: {
			name: 'Сырная',
			imageUrl:
				'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
			categoryId: 1,
			ingredients: {
				connect: _ingredients.slice(5, 10),
			},
		},
	});

	const pizza3 = await prisma.product.create({
		data: {
			name: 'Чоризо фреш',
			imageUrl:
				'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
			categoryId: 1,
			ingredients: {
				connect: _ingredients.slice(10, 40),
			},
		},
	});

	await prisma.variation.createMany({
		data: [
			// Пицца "Пепперони фреш"
			generateProductItem({ productId: pizza1.id, type: 1, size: 20 }),
			generateProductItem({ productId: pizza1.id, type: 2, size: 30 }),
			generateProductItem({ productId: pizza1.id, type: 2, size: 40 }),

			// Пицца "Сырная"
			generateProductItem({ productId: pizza2.id, type: 1, size: 20 }),
			generateProductItem({ productId: pizza2.id, type: 1, size: 30 }),
			generateProductItem({ productId: pizza2.id, type: 1, size: 40 }),
			generateProductItem({ productId: pizza2.id, type: 2, size: 20 }),
			generateProductItem({ productId: pizza2.id, type: 2, size: 30 }),
			generateProductItem({ productId: pizza2.id, type: 2, size: 40 }),

			// Пицца "Чоризо фреш"
			generateProductItem({ productId: pizza3.id, type: 1, size: 20 }),
			generateProductItem({ productId: pizza3.id, type: 2, size: 30 }),
			generateProductItem({ productId: pizza3.id, type: 2, size: 40 }),
		]
	})


}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Variation" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
	// await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	// await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main().then(async () => {
	await prisma.$disconnect()
}).catch(async (e) => {
	console.error(e)
	await prisma.$disconnect()
	process.exit(1)
})