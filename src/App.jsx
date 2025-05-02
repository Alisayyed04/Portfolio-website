import { BrowserRouter, Route , Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import {Apple} from "./pages/Apple";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="apple" element={<Apple/>}/>
      </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
