import React, { Component } from 'react'
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";


export default class App extends Component {
  state = {
    currentCategory: "", products: []
  }
  componentDidMount(){
    this.getProducts();
  }

  changeCategory = category => {//fonksiyon
    this.setState({ currentCategory: category.categoryName });
  };

  
  getProducts = () => {//api kullanımı
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => this.setState({ products: data }));

  }
  render() {
    let productInfo = { title: "ProductList" }
    let CategoryInfo = { title: "CategoryList" }//encapsulation 



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
              <ProductList //props
                products={this.state.products}
                currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}

