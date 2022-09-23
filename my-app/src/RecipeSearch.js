import './App.css';
import React from "react";

export default class RecipeSearch extends React.Component {
    state = {recipes: [
        "Apple Pie",
     "Cherry Pie",
     "Cookie",
      "Pizza Pie",
       "Hamburger",
        "Ham Steak",
        "CHocolate Mousse",
        "Chocolate Ice Cream"
    ],
    searchTerm: ""
};

render() {

    // pulling out matching recipies for search terms
    let matchedRecipes = this.state.recipes.filter((recipes) => {
        // return true;
        // return recipe.includes("Pie");
        return recipes.toLocaleUpperCase()
        .includes(this.state.searchTerm.toLocaleUpperCase());

        console.log(matchedRecipes);
    });
    //    this precreate a set of html before we drop it 
            // let recipesList = this.state.recipies.map((recipes) => {
                let recipesList = matchedRecipes.map((recipes) => {
                return <div>{recipes}</div>;
            });
            console.log(recipesList);
            
    return(
        <div className="recipes">
            <h2> Recipes</h2>
            <input 
            value={this.state.searchTerm}
            onChange={(event) => {
            this.updateSearch(event);
             }}
        />
            <ul>{recipesList}</ul> 
            </div>
        );
    }

    updateSearch(event) {
        this.setState({searchTerm: event.target.value});
    }
}
