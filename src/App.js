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
    console.log(category);
    this.getProducts(category.id);
  };

  
  getProducts = (categoryId) => {//api kullanımı
    let url="http://localhost:3000/products";
    if(categoryId){
      url+="?categoryId="+categoryId;//Eğer parametre ile seourl gönderilmişse urlin sonuna ekle
    }
    fetch(url)//fetch apiye ulaşmayı sağlar
      .then(response => response.json())//response jasona döndür
      .then(data => this.setState({ products: data }));//statei ve kategorisini değiştirme

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

