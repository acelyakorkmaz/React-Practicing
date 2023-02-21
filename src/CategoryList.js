import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Baverages" },
        { categoryId: 2, categoryName: "Condiments" },]
      }
  }
  
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {
            this.state.categories.map(category => (
            <ListGroupItem onClick={()=>this.props.changeCategory(category)} //event set state
            key={category.categoryId}>{category.categoryName}</ListGroupItem>//performans için her bir elemana id ver sanal domda daha hızlı yakalanır
            ))//categorie gez her biri için list item oluştur
          }


        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    )
  }
}
