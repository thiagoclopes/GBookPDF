export default function SignIn() {
    return(
        <>
            <div class="p-8">
                <button class="absolute right-8 top-8">Cadastrar</button>
                <div class="flex flex-col gap-2 text-center">
                    <h1 class="text-2xl font-semibold tracking-tight">
                    Acessar plataforma
                    </h1>
                    <p class="text-sm text-muted-foreground">
                    texto
                    </p>
                </div>
                <form class="space-y-4">
                    <div class="space-y-2">
                        <div class="flex flex-col">
                            <label for="email">Seu e-mail</label>
                            <input id="email" type="email" name="email" required />
                        </div>
                        <div class="flex flex-col">
                            <label for="email">Senha</label>
                            <input id="senha" type="senha" name="senha" required />
                        </div>
                    </div>

                    <button class="w-full" type="submit">
                        Acessar
                    </button>
                </form>
            </div>
        </>
    )
}