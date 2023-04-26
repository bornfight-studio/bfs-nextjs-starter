# GraphQL

## Installation

```bash
yarn add
```

## Setup

Create `codegen.ts` in project root:

```typescript
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: process.env.GRAPHQL_ENDPOINT,
    generates: {
        './types/': {
            preset: 'client',
            plugins: [],
        },
        './libs/{cms}/graphql.json': {
            plugins: ['introspection'],
        },
    },
};

export default config;
```

## Script

Add this to the `package.json` scripts:

```bash
"codegen": "graphql-codegen --require dotenv/config --config codegen.ts dotenv_config_path=.env.local && yarn format"
```

## WebStorm/PhpStorm config file

Create `.graphqlconfig` and `graphql.json` files in your `/libs/{cms}` folder:

```json
{
    "name": "GQL schema",
    "schemaPath": "graphql.json"
}
```
