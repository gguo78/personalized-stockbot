import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { IconGitHub } from '@/components/ui/icons'

async function UserOrLogin() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/" className="flex items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/trade-sphere.png"
            alt="TradeSphere Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-bold text-xl hidden md:inline-block">
            TradeSphere
          </span>
        </div>
      </Link>
      <div className="flex items-center font-semibold">
        <Link
          href="/new"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'bg-black hover:bg-black/90 text-white rounded-full'
          )}
        >
          Start New Chat
        </Link>
      </div>
    </div>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>

      <div className="flex items-center gap-2">
        <nav className="hidden md:flex items-center gap-6 mx-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#market" className="text-sm font-medium hover:text-primary transition-colors">
            Market
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <a
          target="_blank"
          href="https://github.com/gguo78/personalized-stockbot"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'hidden sm:flex gap-2'
          )}
        >
          <IconGitHub className="size-4" />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}
