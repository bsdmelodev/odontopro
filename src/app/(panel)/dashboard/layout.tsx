import { SidebarDashboard } from "./_components/sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SidebarDashboard>
            {children}
            </SidebarDashboard>
        </>
    )
}
// este layout so afeta as rotas dentro da pasta dashboard
// o sidebar fica padrão em todos sem precisar adicionar em cada pagina