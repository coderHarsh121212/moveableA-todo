import "./App.css";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from "./components/form.js/form";
function App() {
  return (
    <div className="App w-full h-fit">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<TopNavbar />}></Route>
          </Route>
          <Route path="/form/:id" element={<FormComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
