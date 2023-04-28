import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Head from "./components/Head";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Head account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
