import { Router } from "express";
import requireDir from "require-dir";

export const router = (router) => {
  const routes = requireDir(".", { recurse: true });
  console.log(
    "🚀 ~ file: index.ts:6 ~ router ~ routes:",
    Object.keys(routes),
    routes["mcs"]
  );
  Object.keys(routes).forEach((name: string) => {
    console.log("🚀 ~ file: index.ts:8 ~ Object.keys ~ name:", name);
    console.log(`Loading ${name} api...`);
    router.use(`/${name}`, routes[name].router(Router()));
  });
  return router;
};
