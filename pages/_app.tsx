import React from "react";
import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import Head from "next/head";
import Web3sdkioGuideFooter from "../components/guide/Web3sdkioGuideFooter";
import "./styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdkio Signature Based Minting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="web3sdkio Example Repository to Showcase signature based minting on an NFT Collection contract"
        />
        <meta name="keywords" content="web3sdkio signature based minting" />
      </Head>
      <Component {...pageProps} />
      <Web3sdkioGuideFooter />
    </Web3sdkioProvider>
  );
}

export default MyApp;
