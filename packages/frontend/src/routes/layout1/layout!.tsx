import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};
//
// export const onRequest: RequestHandler = async ({ pathname, redirect }) => {
//   if (pathname == "/") {
//     throw redirect(308, "/asd");
//   }
// };
//
export const GuardedRoutes = [];

interface UserInfo {
  publicAdress: string;
  signature: string;
  username: string;
}

const useAuthGuard = routeLoader$(async (req) => {
  if (req.pathname == "/a/") throw req.redirect(308, "/asd");
});

export const UserContext = createContextId<UserInfo>("userContext");

export const GuardedRoutesContext = createContextId<Array<String>>(
  "guardedRoutesContext",
);
export default component$(() => {
  useAuthGuard();
  const userInfo = useStore<UserInfo>({
    publicAdress: "",
    signature: "",
    username: "",
  });
  useContextProvider(UserContext, userInfo);
  return (
    <>
      <Slot />
    </>
  );
});
