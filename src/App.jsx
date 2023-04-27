import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-200">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/:tokenId" element={<Detail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
