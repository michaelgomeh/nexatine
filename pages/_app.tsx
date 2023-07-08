import { AppProps } from "next/app"
import Head from "next/head"
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core"
import { SessionProvider } from "next-auth/react"
import "./global.css"
import Layout from "@components/global/Layout"
import { useAtom } from "jotai"
import { darkModeAtom } from "@utils/atoms"
export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <>
      <Head>
        <title>Nexatine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <ColorSchemeProvider
          colorScheme={"light"}
          toggleColorScheme={toggleDarkMode}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: darkMode ? "dark" : "light",
              colors: {
                aqua: [
                  "#C5F0EA",
                  "#90E6D9",
                  "#62DECB",
                  "#38D9C1",
                  "#27BBA5",
                  "#239987",
                  "#1F7D6F",
                  "#1B665B",
                  "#18544B",
                  "#15443D",
                ],
              },
              primaryColor: "aqua",
              primaryShade: { light: 4, dark: 8 },
              headings: {
                sizes: {
                  h1: { fontSize: "3rem", fontWeight: 700, lineHeight: 3 },
                  h2: { fontSize: "2.6rem", fontWeight: 700, lineHeight: 2 },
                  h3: { fontSize: "2.2rem", fontWeight: 700, lineHeight: 2 },
                  h4: { fontSize: "1.8rem", fontWeight: 700, lineHeight: 1.5 },
                  h5: { fontSize: "1.4rem", fontWeight: 700, lineHeight: 1.5 },
                  h6: { fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.2 },
                },
              },
            }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MantineProvider>
        </ColorSchemeProvider>
      </SessionProvider>
    </>
  )
}
