declare module "redux-promise-middleware" {
  export default function (): Redux.Middleware;
}

interface Window { devToolsExtension: any; }