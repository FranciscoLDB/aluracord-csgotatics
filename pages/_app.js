function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
          box-sizing: border-box; 
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
      `}</style>
    )
}

export default function MyApp({ Component, pageProps}) {
    //roda em todas as paginas
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    );
}