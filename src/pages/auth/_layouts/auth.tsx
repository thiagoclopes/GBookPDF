import { RouterView } from 'vue-router'

export default function AuthLayout() {
    return (
      <div class="antialised grid min-h-screen grid-cols-2 bg-zinc-300">
        <div class="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
          <div class="flex items-center gap-3 text-lg text-foreground">
            aladsksadk
            <span class="font-semibold">GBookPDF</span>
          </div>
          <footer class="text-sm">
            Painel &copy; GBookPDF - {new Date().getFullYear()}
          </footer>
        </div>
  
        <div class="relative flex flex-col items-center justify-center">
          <RouterView/>
        </div>
      </div>
    )
  }