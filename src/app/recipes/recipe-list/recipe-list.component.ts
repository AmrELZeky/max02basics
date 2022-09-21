import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemClicked=new EventEmitter<Recipe>();
  recipes: Recipe[]= [
    new Recipe("A test recipe","test recipe test description","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"),
    new Recipe("A nother test recipe 2","test recipe test description","https://i.guim.co.uk/img/media/f5f1cd47f9197dda3fadee7760afc51b4e28a956/0_235_4333_4897/master/4333.jpg?width=620&quality=85&fit=max&s=8af65b5507136d4f1e6e0c9ff279d4a8")
  ];
   
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeItem:Recipe){
    this.recipeItemClicked.emit(recipeItem);
  }

}
