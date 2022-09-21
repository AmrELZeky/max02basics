import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
  selectedRecipeItem:Recipe=new Recipe('','','');
  constructor() { }

  ngOnInit(): void {
  }
  recipeItemClicked(recipeItem:Recipe){
   this.selectedRecipeItem=recipeItem;
  }

  

}
