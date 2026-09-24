import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Sheet({ children, open, onOpenChange }) {
  return <Dialog.Root open={open} onOpenChange={onOpenChange}>{children}</Dialog.Root>
}

export const SheetTrigger = Dialog.Trigger

export function SheetContent({ children, className }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="sheet-overlay fixed inset-0 z-40 bg-ink/45 backdrop-blur-sm" />
      <Dialog.Content className={cn('sheet-panel fixed inset-y-0 right-0 z-50 flex w-[min(24rem,90vw)] flex-col border-l-[3px] border-gold bg-paper/90 p-5 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.35)] outline-none backdrop-blur-xl', className)}>
        {children}
        <Dialog.Close className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-wine transition-colors hover:border-gold hover:text-wine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" aria-label="Fechar painel">
          <X size={20} strokeWidth={1.8} />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export const SheetHeader = ({ children }) => <div className="mb-8 border-b border-line pb-6">{children}</div>
export const SheetTitle = ({ children }) => <Dialog.Title className="font-display text-4xl font-extrabold uppercase leading-[.9]">{children}</Dialog.Title>
