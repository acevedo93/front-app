import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

Amplify.configure(outputs);

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(App);
