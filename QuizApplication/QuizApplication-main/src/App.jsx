import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Start} />
          <Route path="/home" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
