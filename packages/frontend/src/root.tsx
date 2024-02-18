import {
  component$,
  createContextId,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "virtual:uno.css";

import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer as ReactToastContainer } from "react-toastify";
import { qwikify$ } from "@builder.io/qwik-react";
const ToastContainer = qwikify$(ReactToastContainer);
export const GuardedRoutes = [];

interface UserInfo {
  isLogged: boolean;
  publicAdress: string;
  signature: string;
  username: string;
}

export const UserContext = createContextId<UserInfo>("userContext");

export const GuardedRoutesContext = createContextId<Array<String>>(
  "guardedRoutesContext",
);
export default component$(() => {
  const userInfo = useStore<UserInfo>({
    isLogged: false,
    publicAdress: "",
    signature: "",
    username: "",
  });
  useContextProvider(UserContext, userInfo);

  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ToastContainer />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
