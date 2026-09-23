import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-wine px-5 py-4 text-white hover:-translate-y-1 hover:bg-wine/90',
        gold: 'bg-gold px-5 py-4 text-ink hover:-translate-y-1 hover:bg-white',
        ghost: 'border-b border-ink pb-1 text-ink hover:text-wine',
        icon: 'h-10 w-10 border-2 border-gold bg-ink text-paper hover:bg-gold hover:text-ink',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

const Button = forwardRef(({ asChild = false, className, variant, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp ref={ref} className={cn(buttonVariants({ variant, className }))} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
