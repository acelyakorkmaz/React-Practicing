import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
  let productInfo={title:"ProductList"}
  let CategoryInfo={title:"CategoryList"}//encapsulation 
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>
        {/* bir row ekranı 12 parçaya ayırıyor */}
        <Row>
          <Col xs="3">
            <CategoryList info={CategoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}/>
            </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
