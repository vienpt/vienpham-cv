# Migration to Nextjs 13 with App Router Architect

Basically, this project is base on `creat-react-app` with `vite` config generation

So I wanna upgrade this project to using Nextjs with highly customization and catch up Nextjs 13

And because that I have to installation manually.

Okay. Let's see!

Ref: https://www.inngest.com/blog/migrating-from-vite-to-nextjs

1. Check out the [doc](https://nextjs.org/docs/getting-started/installation#manual-installation)
2. Npm install
  - `npm install next@latest`
  - update `react, react-dom, @types/react, @types/react-dom` in package.json to `latest`
  - update `scripts` execute in `package.json` to use `next` cli.
3. Create new file next config `next.config.mjs`, this file will hold next [config](https://nextjs.org/docs/app/api-reference/next-config-js)
4. Update TypeScript configuration `tsconfig.json`
  - Update project `reference` to `tsconfig.node.json`
  - Add `./dist/types/**/*.ts` and `./next-env.d.ts` to the `include` array
  - Add `./node_modules` to `exclude` property array
  - Add `{ "name": "next" }` to `plugins` array in `compilerOptions`
  - Update `esModuleInterop` to `true`
  - Update `jsx` to `preserve`
  - Add `allowJs` to `true`
  - Add `forceConsistentCasingInFileNames` to `true`
  - Add `incremental` to `true`
5. Create the Root Layout
  - It's closest equivalent to Vite app `index.html`
    - Create a new `app` directory in `src` directory
    - Create new file `layout.tsx` in `./app/`
    - Following `layout.tsx` to check detail
