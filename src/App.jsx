import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import AppNavbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductsForm from "./Components/ProductForm";

function App() {
  return(
    <Router>
        <AppNavbar/>
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1 p-3">
            <Routes>
                   <Route path="/" element={<Dashboard/>}/>
                   <Route path="/products" element={<Products/>}/>
                   <Route path="/products/new" element={<ProductsForm/>}/>
                   <Route path="/products/edit/:id" element={<ProductsForm/>}/>
            </Routes>
               
          </div>
        </div>
    </Router>
  );
}

export default App;