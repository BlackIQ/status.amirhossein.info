import "@/styles/globals.css";

import { ApplicationLayout } from "@/layouts";

export default function App({ Component, pageProps }) {
  return (
    <ApplicationLayout>
      <Component {...pageProps} />
    </ApplicationLayout>
  );
}
