import Header from "./components/header";
import Story from "./components/story";
import ProductList from "./components/product-list";
import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Story />
      <ProductList />
    </div>
  );
};

export default App;
