import Recipes_Container from "./Recipes Container.mjs";
import { recipes } from "./recipes.mjs";
import algorithm from "./algorithm.mjs";
class Filter_container {
  constructor() {}

  load_filters(recipes) {
    this.load_ingredients(recipes);
    this.load_appareil(recipes);
    this.load_ustenciles(recipes);
  }


  load_ingredients(recipes) {
    //-FILTRES INGREDIENTS------------------------------------------------------------------------
    const filter_ingredients = document.getElementById(
      "filter_ingredient_items"
    );
    let ingredients_list = [];
    recipes.forEach((element) => {
      element.ingredients.forEach((items) => {
        if (!ingredients_list.includes(items.ingredients)) {
          ingredients_list.push(String(items.ingredient).toLowerCase());
        }
      });
    });

    ingredients_list = ingredients_list.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    });

    ingredients_list.forEach((element) => {
      const item_list = document.createElement("p");
      item_list.setAttribute("class", "item_list");
      item_list.textContent = element;

      filter_ingredients.appendChild(item_list);

      this.addToList(item_list);
    });
    const ingredientInput = document.getElementById("ingredient_input");

    ingredientInput.addEventListener("input", (element) => {
      var filtered_list = [];
      console.log(ingredientInput.value);
      filter_ingredients.innerHTML = "";

      ingredients_list.forEach((element) => {
        if (element.includes(String(ingredientInput.value).toLowerCase())) {
          filtered_list.push(element);
        }
      });

      console.log(ingredients_list);

      filtered_list.forEach((element) => {
        const item_list = document.createElement("p");
        item_list.setAttribute("class", "item_list");
        item_list.textContent = element;

        filter_ingredients.appendChild(item_list);
        this.addToList(item_list);
      });
      return filter_ingredients;
    });

    return filter_ingredients;
  }


  load_appareil(recipes) {
    //-FILTRES APPAREIL ------------------------------------------------------------------------
    const filter_appareils = document.getElementById("filter_appareils_items");
    let appareil_list = [];
    recipes.forEach((element) => {
      if (!appareil_list.includes(element.appliance)) {
        appareil_list.push(String(element.appliance).toLowerCase());
      }
    });

    appareil_list = appareil_list.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    });

    appareil_list.forEach((element) => {
      const item_list = document.createElement("p");
      item_list.setAttribute("class", "item_list");
      item_list.setAttribute("id", "item_list");
      item_list.textContent = element;
      filter_appareils.appendChild(item_list);

      this.addToList(item_list);
    });

    const appareilInput = document.getElementById("appareil_input");

    appareilInput.addEventListener("input", (element) => {
      var filtered_list = [];
      console.log(appareilInput.value);
      filter_appareils.innerHTML = "";

      appareil_list.forEach((element) => {
        if (element.includes(String(appareilInput.value).toLowerCase())) {
          filtered_list.push(element);
        }
      });

      console.log(appareil_list);

      filtered_list.forEach((element) => {
        const item_list = document.createElement("p");
        item_list.setAttribute("class", "item_list");
        item_list.setAttribute("id", "item_list");
        item_list.textContent = element;

        filter_appareils.appendChild(item_list);

        this.addToList(item_list);
      });

      return filter_appareils;
    });

    return filter_appareils;
  }


  load_ustenciles(recipes) {
    //-FILTRES USTENSILS------------------------------------------------------------------------
    const filter_ustensils = document.getElementById("filter_ustensils_items");
    let ustensils_list = [];
    recipes.forEach((element) => {
      element.ustensils.forEach((items) => {
        if (!ustensils_list.includes(items)) {
          ustensils_list.push(String(items).toLowerCase());
        }
      });
    });

    ustensils_list = ustensils_list.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    });

    ustensils_list.forEach((element) => {
      const item_list = document.createElement("p");
      item_list.setAttribute("class", "item_list");
      item_list.textContent = element;

      filter_ustensils.appendChild(item_list);

      this.addToList(item_list);
    });

    
    const ustencilsInput = document.getElementById("ustencil_input");

    ustencilsInput.addEventListener("input", (element) => {
      var filtered_list = [];
      console.log(ustencilsInput.value);
      filter_ustensils.innerHTML = "";

      ustensils_list.forEach((element) => {
        if (element.includes(String(ustencilsInput.value).toLowerCase())) {
          filtered_list.push(element);
        }
      });

      console.log(filtered_list);

      filtered_list.forEach((element) => {
        const item_list = document.createElement("p");
        item_list.setAttribute("class", "item_list");
        item_list.textContent = element;

        filter_ustensils.appendChild(item_list);

        this.addToList(item_list);
      });
      return filter_ustensils;
    });
    
    return filter_ustensils;
  }


  addToList(item) {
    //add verification for doublons
    item.addEventListener("click", () => {
      const filtered = document.getElementById("active_filters");
      //doublons
      for (const child of filtered.children) {
        if (child.innerText == item.innerText) {
          return 0;
        }
      }

      //end doublons

      let tc = new Recipes_Container();     
      let al = new algorithm()
      const inputSearchBar = document.getElementById("header_search");
      const container = document.createElement("div");
      container.setAttribute("class", "filterActive");
      container.setAttribute("id", item.innerHTML);
      const text = document.createElement("p");

      const icon = document.createElement("i");
      icon.setAttribute("class", "fa-solid fa-xmark");
      icon.addEventListener("click", () => {
        close = document.getElementById(item.innerHTML);
        
        close.remove();
        al.searchbar_filter_items(String(inputSearchBar.value))
      });
      text.innerText = item.innerHTML;
      container.appendChild(text);
      container.appendChild(icon);
      filtered.appendChild(container);
      
      al.searchbar_filter_items(String(inputSearchBar.value))
      

    });
  }
}

export default Filter_container;
