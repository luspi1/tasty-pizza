import { Container, Title, TopBar } from '@/components/shared'

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <Title className="font-extrabold" size="lg">Все пиццы</Title>
      </Container>
      <TopBar/>
      <div className='h-[2000px]'></div>
    </>
  )
}
