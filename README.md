# Cursiva Backend

Cursiva Backend is an Express application and API that works as the server and core of the **Cursiva: University academic manager** project. To view all the project, visit the [project page](https://github.com/users/lejito/projects/4?pane=info).

## How to run

### Setting environmental variables

To run the application, you need to set the following environmental variables:

```bash
PORT=3000 # Port number the server will use
```

You can create a `.env` file in the root directory of the project and add these variables there.

### Installing dependencies

The list of dependencies is in the [`package.json`](package.json) file. To install them, use the following command:

```bash
# For npm:
npm install

# For pnpm:
pnpm install

# For yarn:
yarn install
```

This will install all the required dependencies for the project.

### Running in development mode

To run the application in development mode, use the following command:

```bash
# For npm:
npm run dev

# For pnpm:
pnpm dev

# For yarn:
yarn dev
```

This will start the server with hot-reloading enabled, so any changes you make to the code will automatically restart the server.

### Building and running in production mode

To build the application for production, use the following command:

```bash
# For npm:
npm run build

# For pnpm:
pnpm build

# For yarn:
yarn build
```

This will compile the TypeScript code into JavaScript and place it in the `build` directory. To run the compiled code, use the following command:

```bash
# For npm:
npm start

# For pnpm
pnpm start

# For yarn
yarn start
```

This will start the server using the compiled code from the `build` directory.

## License

The software is licensed under the **GNU General Public License v3.0**. For more details, check the [LICENSE](LICENSE) file.

### Copyright (c) 2025 Alejandro Córdoba Ríos
