

import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProduckList from "./ProduckList";
function App() {
  return (
    <div className="App">
     <Navi/>
     <CategoryList/>
     <ProduckList/>
    </div>
  );
}

export default App;
