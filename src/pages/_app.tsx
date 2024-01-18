import "@/styles/globals.scss";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import theme from "@/theme/themeConfig";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </ConfigProvider>
  );
}
