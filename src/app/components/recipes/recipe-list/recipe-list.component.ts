import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit {
    recipes = Recipe[''] = [
        new Recipe('A Test Recipe', 'This is simply a test recipe description', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/egg-fried-cauliflower-rice.jpg')
    ];

    constructor() { }

    ngOnInit() {
        console.log(this.recipes);
    }
}