import "./style/main.css"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import store, { persistor } from "./redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { NextUIProvider } from "@nextui-org/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from "./components/Auth"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <NextUIProvider>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer theme="dark" autoClose={2000} closeOnClick />
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Authentication><App /></Authentication>} />
            </Routes>
          </BrowserRouter>
          {/* <Footer /> */}
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </NextUIProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
