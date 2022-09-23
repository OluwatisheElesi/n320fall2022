import './App.css';
import React from "react";

export default class RecipeSearch extends React.Component {
    state = {recipes: [
        "Apple Pie",
     "Cherry Pie",
      "Pizza Pie",
       "Hamburger",
        "Ham Steak",
        "CHocolate Mousse",
        "Chocolate Ice Cream"
    ]};

    render() {
    //    this precreate a set of html before we drop it 
            let recipesList = thisn.state.recipies.map((recipes) => {
                return <div>{recipes}</div>;
            });
            console.log(recipesList);
            
            return(
            <div className="recipes">
                <h2> Recipes</h2>
                <ul>{recipesList}</ul>
               
            </div>
        );
    }
}
