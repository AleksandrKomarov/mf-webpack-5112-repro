# @module-federation/enhanced + webpack 5.112.0 repro

Minimal reproduction: `@module-federation/enhanced@2.9.2` cannot be loaded with `webpack@5.112.0`.

## Steps

```sh
npm install
npm run build
```

## Actual

```
[webpack-cli] Error: Cannot find module 'webpack/lib/util/extractUrlAndGlobal'
```

## Expected

The build succeeds, as it does with `webpack@5.111.1`:

```sh
npm install webpack@5.111.1
npm run build
```

## Cause

webpack/webpack#22239 moved `lib/util/extractUrlAndGlobal.js` to `lib/externals/extractUrlAndGlobal.js`
and `lib/util/semver.js` to `lib/sharing/semver.js`. `@module-federation/enhanced` still requires both by their old paths.
