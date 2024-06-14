npx next build

npx @fastly/next-compute-js

cd compute-js

After the smylink version.. you need to install raw-body and fix events bug

`npm install raw-body`
&&
`npm install @fastly/http-compute-js`

followed by `npm run build`

```(not sure if this is needed)
npx @fastly/compute-js-static-publish --build-static --suppress-framework-warnings
```

```
fastly compute serve
```
