import { Routes, Route } from "react-router-dom"

// import pages
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage"
import DaftarPage from "./pages/DaftarPage"
import DetailPage from "./pages/DetailPage"
import FinishPage from "./pages/FinishPage"
import OrderPage from "./pages/OrderPage"
import StatusPage from "./pages/StatusPage"

function App() {
  
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/cart" Component={CartPage} />
      <Route path="/daftar" Component={DaftarPage} />
      <Route path="/detail" Component={DetailPage} />
      <Route path="/finish" Component={FinishPage} />
      <Route path="/order" Component={OrderPage} />
      <Route path="/status" Component={StatusPage} />
    </Routes>
  )
}

export default App
