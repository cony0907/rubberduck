import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/header";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/:tokenId" element={<Detail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
