import './globals.css'
import './globals.js'
import Nav from './nav.js'
import Footer from './footer.js'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="Deltasoft" property="og:title" />
        <meta content="© Deltasoft 2023" property="og:site_name" />
        <meta name="description"
          content="Discover the future with Deltasoft, the leading AI and Software platform built for endless possibilities. Explore our powerful tools, advanced algorithms, and cutting-edge technology to unlock new horizons. Join us on a journey of innovation, collaboration, and limitless potential. Together, let's shape the world of tomorrow." />
        <meta
          content="Discover the future with Deltasoft, the leading AI and Software platform built for endless possibilities."
          property="og:description" />
        <meta content='https://deltasoft-ai.netlify.app/apple-touch-icon.png' property='og:image' />
        <meta name="keywords"
          content="Deltasoft AI, Deltasoft Ai, Deltasoft, AI, Ai, Deltasoft-AI, Deltasoft-Ai, deltasoft, deltasoft ai, deltasoft-ai, ai" />
        <script src="https://kit.fontawesome.com/f9d40dbe97.js" crossorigin="anonymous"></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#202020" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@DeltasoftAI" />
        <meta name="twitter:title" content="Deltasoft: Empowering Developers, Inspiring Software Solutions for All" />
        <meta name="twitter:description" content="Transform ideas to reality with Deltasoft&#039;s innovative tools and unwavering support. Join us on this journey to shape a better future!" />
        <meta name="twitter:image" content="https://i.ibb.co/C9FJ3D3/deltasoft-logo.png" />
        <meta name="twitter:image:alt" content="Deltasoft logo" />
        <title>Deltasoft</title>
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
