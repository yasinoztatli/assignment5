import { useState } from "react";
import ProductList from "./components/ProductList.jsx";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>React Product Dashboard</h1>
      
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Type your name..."
        />
        <p>Hello, {name}</p>
      </div>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {/* showProducts true ise ProductList bileşenini ekranda göster */}
      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
