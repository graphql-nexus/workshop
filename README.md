## Nexus Workshop 2020 @ Prisma Day

This repository contains a very basic starter that will help you get up and running quicker for the workshop.

### Installation

1. Clone the repository

```sh
git clone https://github.com/graphql-nexus/workshop2020.git
```

2. Install the dependencies

```sh
npm install
```

3. Start the GraphQL server

You should be prompted with a warning telling you that "[...] Your GraphQL schema is empty.".
This is all fine and expected, we'll start building that schema during the workshop!

```sh
npm run dev
```

4. Open the playground

If the server started properly, you should see the following log:

```
● nexus:server listening  --  url: 'http://localhost:4000/'
```

CMD + Click that URL, it should open the GraphQL Playground.

5. You're all set! 