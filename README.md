# Como rodar o projeto

1. Clone este repositório:
   `git clone https://github.com/JeffersonMeira99/matchmaking.git`

2. Instale as dependências:
   `npm install`

3. Rode o servidor:
   `npm run dev`

4. Acesse o projeto no navegador:
   `http://localhost:5173/)`

# Decisões tomadas

- Utilize o Zustand para gerenciar o estado global da aplicação.
- O Tailwind CSS foi escolhido para estilização devido à sua flexibilidade e rapidez na prototipação.

# O que eu faria diferente com mais tempo
Implementaria testes unitários e de integração com Jest
Garantiria maior confiabilidade do código, prevenindo regressões e facilitando a manutenção.

Criaria uma API backend com autenticação e persistência em banco de dados
Utilizaria Nestjs ou Espress com autenticação via JWT e banco de dados como PostgreSQL ou MongoDB para gerenciar conexões e usuários.

Aprimoraria a experiência do usuário (UX)
Com animações suaves, feedbacks mais intuitivos, e tratamento adequado de carregamentos e erros.

Adicionaria paginação e filtros avançados
Permitiria uma navegação mais eficiente entre os resultados de conexões.

Melhoraria a responsividade e acessibilidade da interface
Tornando a aplicação amigável a todos os dispositivos e acessível a usuários com diferentes necessidades.

Exploraria a integração com a API da OpenAI
Se tivesse mais tempo, exploraria o uso da OpenAI para sugerir conexões de forma mais personalizada, analisando os dados do usuário com linguagem natural. Isso daria um toque mais inteligente e moderno à experiência.
