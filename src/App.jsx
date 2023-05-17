import { BrowserRouter as Router } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from "./routes/AppRoutes"
import Layout from "./layout/Layout"
import theme from "./assets/theme"
import "@fontsource/bangers"


function App() {

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Layout>
          <AppRoutes />
        </Layout>
      </ChakraProvider>
    </Router>
  )
}

export default App
