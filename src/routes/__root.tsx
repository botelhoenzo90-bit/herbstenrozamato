import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent(){return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold">404</h1><h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2><p className="mt-2 text-sm text-muted-foreground">A página que você procura não existe.</p><div className="mt-6"><Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Voltar ao início</Link></div></div></div>}

function ErrorComponent({error,reset}:ErrorComponentProps){console.error(error);const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"});},[error]);return <div className="flex min-h-screen items-center justify-center px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold">Não foi possível carregar a página</h1><p className="mt-2 text-sm text-muted-foreground">Atualize a página e tente novamente.</p><div className="mt-6 flex justify-center gap-2"><button onClick={()=>{router.invalidate();reset();}} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Tentar novamente</button><a href="/" className="rounded-md border px-4 py-2 text-sm">Início</a></div></div></div>}

export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
 staticData: { sitemap: false },
 head:()=>({meta:[
  {charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},
  {name:"author",content:"Herbsten Rozamato Sousa"},
  {property:"og:site_name",content:"Herbsten Rozamato Sousa — Psicanálise e Terapias"}
 ],links:[{rel:"stylesheet",href:appCss},{rel:"icon",href:"/favicon.png",type:"image/png"}]}),
 shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent
});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>}
