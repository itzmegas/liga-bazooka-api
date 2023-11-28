import { Router } from "express";
import requireDir from "require-dir";

export const router = (router: Router) => {
  const routes = requireDir(".", { recurse: true });

  Object.keys(routes).forEach((name: string) => {
    console.log(`Loading ${name} api...`);
    router.use(`/${name}`, routes[name].router(Router()));
  });
  return router;
};
