// //styling
// import "./App.css" ;
// import JuiceList from "../src/components/JuiceList";

// // components
// import Home from "../src/components/Home";

// function App() {

//   return (
//     <div className="mainDiv">
//       <Home/>
//     <div className="productsParent">
//       <JuiceList/>
//       </div>
//       </div>
//   );
// }

// export default App;







// library
import {ThemeProvider} from "styled-components";

// styling
import "./App.css" ;
import JuiceList from "../src/components/JuiceList";
import { theme, ProductsParent, GlobalStyle} from "./styles";

// components
import Home from "../src/components/Home";



function App() {

  return (
    <ThemeProvider theme={theme} >
      <Home />
      <GlobalStyle />

      <ProductsParent>
      <JuiceList />
      </ProductsParent>
      </ThemeProvider>
  );
}

export default App;