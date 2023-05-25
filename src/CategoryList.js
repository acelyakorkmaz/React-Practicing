import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
      }
  }
  componentDidMount(){
    this.getCategories();//component yerleşti, kategorileri doldur
  }
  getCategories=()=>{//api kullanımı
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}));

  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {
            this.state.categories.map(category => (
            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}//kategorinin ismi aktif kategoriye eşitse true değilse false
             onClick={()=>this.props.changeCategory(category)} //event set state
            key={category.id}>{category.categoryName}</ListGroupItem>//performans için her bir elemana id ver sanal domda daha hızlı yakalanır
            ))//categorie gez her biri için list item oluştur
          }


        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
