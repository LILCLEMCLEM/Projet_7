import Recipes_Container from "./Recipes Container.mjs";
import { recipes } from "./recipes.mjs";
import Filter_container from "./filter_container.mjs";
const r_container = new Recipes_Container();
const f_container = new Filter_container(recipes);

r_container.load_recipes(recipes);
f_container.load_filters()
