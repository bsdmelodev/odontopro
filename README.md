# OdontoPro 🦷

Aplicação web para exibição de clínicas odontológicas, com autenticação via GitHub, painel administrativo e pagamentos via Stripe.

## ✨ Tecnologias

- **Next.js**
- **TypeScript**
- **TailwindCSS 4**
- **Prisma ORM**
- **Stripe Payments**
- **Login OAuth com GitHub**

## ✅ Requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (recomendado LTS)
- **npm** (ou yarn/pnpm, mas aqui usamos npm)
- **Banco de dados** compatível com Prisma (ex.: PostgreSQL/MySQL/SQLite)
- Conta/configuração no **Stripe**
- App OAuth criado no **GitHub** (Client ID/Secret)

---

## 🚀 Como rodar o projeto

### 1) Clonar o repositório

```bash
git clone https://github.com/bsdmelodev/odontopro.git odontopro
cd odontopro
```

### 2) Instalar dependências

```bash
npm i
```

### 3) Gerar secret de autenticação

```bash
npm exec auth secret
```

> Isso cria um arquivo .env.local e um secret seguro para autenticação (ex.: `AUTH_SECRET`).

### 4) Configurar variáveis de ambiente

Renomeie o arquivo .env.local que foi gerado:

```bash
mv .env.local .env
```

Abra o `.env` e cole suas configurações.

Exemplo de estrutura:

```env
# Auth
AUTH_SECRET=coloque_o_secret_gerado_aqui

# OAuth GitHub
GITHUB_CLIENT_ID=seu_client_id
GITHUB_CLIENT_SECRET=seu_client_secret

# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

# Stripe
STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

> **Importante:** não commite seu `.env`.

### 5) Gerar client do Prisma

```bash
npx prisma generate
```

> Se você precisar aplicar migrations:

```bash
npx prisma migrate dev
```

### 6) Rodar o projeto

```bash
npm run dev
```

Acesse no navegador:

```
http://localhost:3000
```

---

## 🔐 Login com GitHub

O login do app é feito via OAuth do GitHub.

1. Crie um OAuth App em:  
   **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**

2. Configure:
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
     > (caso o projeto use NextAuth. Se o callback for diferente, ajuste conforme o código)

3. Copie o **Client ID** e **Client Secret** para o `.env`:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`

---

## 📦 Scripts úteis

```bash
npm run dev        # roda em desenvolvimento
npm run build      # build de produção
npm run start      # inicia build de produção
npm run lint       # lint do projeto
```

---

## 🗂 Prisma

Para abrir o Prisma Studio:

```bash
npx prisma studio
```

---

## 💳 Stripe (Pagamentos)

Certifique-se de ter no `.env`:

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET` (caso use webhooks)

Se estiver usando webhooks localmente, você pode usar o Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## 👤 Autor

**Bruno Melo**  
GitHub: [@bsdmelodev](https://github.com/bsdmelodev)  
<!-- LinkedIn: [link do LinkedIn](https://linkedin.com/in/seu-linkedin)  
Email: email@email.com -->




---

## 📄 Licença

Este projeto está sob a licença MIT.  
Sinta-se livre para usar e contribuir.
