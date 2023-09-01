// @refresh reload
import { Suspense } from "solid-js";
import Navbar from "./components/Navbar";

import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  ROute
} from "solid-start";
import "./root.css";
export default function Root() {
  const location = useLocation();
  const active = (path) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <Html lang="en" data-theme="night">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Navbar></Navbar>
        <Suspense>
          <ErrorBoundary>

            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Body>
    </Html>
  );
}
