import { hashSync } from 'bcrypt'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
		data: [
			{
				name: 'Пиццы'
			},
			{
				name: 'Завтрак'
			},
			{
				name: 'Закуски'
			},
			{
				name: 'Коктейли'
			},
			{
				name: 'Напитки'
			},
		]
	})

}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
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