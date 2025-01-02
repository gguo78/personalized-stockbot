import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@/components/ui/icons'
import Image from 'next/image'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="mt-8 flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-3 mb-4">
          <div className="rounded-full bg-primary/20 p-2">
            <div className="size-20 rounded-full bg-primary flex items-center justify-center p-1">
              <Image
                src="/trade-sphere-logo.png"
                alt="TradeSphere Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Welcome to TradeSphere
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Your intelligent trading companion powered by AI. Get real-time market insights,
          analyze stocks, and make informed investment decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-8">
          {features.map((feature, i) => (
            <div key={i} className="p-4 border rounded-lg bg-background/50 backdrop-blur">
              <div className="text-primary mb-2 text-xl">{feature.icon}</div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: "📈",
    title: "Market Analysis",
    description: "Real-time stock data and advanced market analytics"
  },
  {
    icon: "🤖",
    title: "AI-Powered",
    description: "Intelligent insights powered by advanced AI models"
  },
  {
    icon: "📊",
    title: "Interactive Charts",
    description: "Dynamic visualization of market trends and patterns"
  }
]
