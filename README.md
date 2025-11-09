# OmniPredict Points Frontend

A modern points dashboard frontend application built with **Next.js 15**, **React 19**, and **TypeScript** using the **App Router**.  
This project consumes REST APIs and supports both server rendering and client-side interactive features.

## Tech Stack

- **Next.js 15**
- **React 19**
- **TypeScript**
- App Router architecture
- Yarn package manager
- REST-ready client structure

## Requirements

| Dependency | Version |
|-----------|--------|
| **Node.js** | >= **18.17** (recommended: LTS >= 20) |
| **Yarn** | >= **3.x** |
| **Next.js** | 15.x |
| **React** | 19.x |

### Check versions

```bash
node -v
yarn -v
```

If you have not enabled corepack:

```bash
corepack enable
corepack prepare yarn@stable --activate
```

## Project Structure

```
omnipredict-point/
├─ app/
│  ├─ api/            # optional route handlers
│  ├─ layout.tsx
│  └─ page.tsx
├─ public/
├─ next.config.ts
├─ tsconfig.json
├─ package.json
└─ yarn.lock
```

## Install Dependencies

```bash
yarn install
```

## Development

```bash
yarn dev
```

Open:

```
http://localhost:3000
```

## Testing

> Placeholder test command.

Run tests:

```bash
yarn test
```

Example to set up Vitest:

```bash
yarn add -D vitest @testing-library/react jsdom
yarn test
```

## Build for Production

```bash
yarn build
```

### Start production server

```bash
yarn start
```

## Static Export (Static HTML Build)

```bash
yarn build
yarn export
```

Output folder:

```
/out
```

## Environment Variables

Create `.env.local` for local dev:

```
NEXT_PUBLIC_API_BASE_URL=
```

## Scripts

| Command | Description |
|--------|------------|
| `yarn dev` | Start development server |
| `yarn build` | Build production output |
| `yarn start` | Start production server |
| `yarn export` | Export static HTML build |
| `yarn test` | Run tests (placeholder) |

## License

MIT © OmniPredict
