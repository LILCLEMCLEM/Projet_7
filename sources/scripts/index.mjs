import Recipes_Container from "./Recipes Container.mjs";
import { recipes } from "./recipes.mjs";
import Filter_container from "./filter_container.mjs";
import algorithm from "./algorithm.mjs";

const recipe_container = new Recipes_Container();
const filter_container = new Filter_container();
const algo = new algorithm();

recipe_container.load_recipes(recipes);
filter_container.load_filters(recipes)

algo.searchbar_event();



