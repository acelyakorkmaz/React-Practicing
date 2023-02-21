import React, { Component } from 'react'
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";


export default class App extends Component {
  state={
    currentCategory:""
  }

  changeCategory=category=>{//fonksiyon
    this.setState({currentCategory:category.categoryName});
  };
 
  render() {
   let productInfo = { title: "ProductList" }
   let  CategoryInfo = { title: "CategoryList" }//encapsulation 
  
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>
          {/* bir row ekranı 12 parçaya ayırıyor */}
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={CategoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}

