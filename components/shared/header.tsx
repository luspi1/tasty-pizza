import { FC } from 'react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/shared/container'
import { Button } from '@/components/ui'
import Image from 'next/image'

type Props = {
  className?: string
}

export const Header: FC<Props> = ({className}) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32}/>
          <div>
            <h1 className="text-2xl uppercase font-black">
              Tasty Pizza
            </h1>
            <p className="text-sm text-gray-400 leading-3">Вкусно с первого
              кусочка!</p>
          </div>
        </div>
        {/*<div className="mx-10 flex-1">*/}
        {/*  <SearchInput/>*/}
        {/*</div>*/}
        <div className="flex items-center gap-3">
          <Button variant="outline">Войти</Button>
        </div>
      </Container>
    </header>
  )
}

