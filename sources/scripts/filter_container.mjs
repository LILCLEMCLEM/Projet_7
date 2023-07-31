
import algorithm from "./algorithm.mjs";
import searcher from "./functions.mjs"
//test

class Filter_container {
  constructor() {
    this.s = new searcher()
  }

  load_filters(recipes) {
    this.load_ingredients(recipes);
    this.load_appareil(recipes);
    this.load_ustenciles(recipes);
    
  }


  load_ingredients(recipes) {
    //-FILTRES INGREDIENTS------------------------------------------------------------------------
    const filter_ingredients = document.getElementById("filter_ingredient_items");
    let ingredients_list = [];
    recipes.forEach((element) => {
      element.ingredients.forEach((items) => {
        if (!this.s.findElem(ingredients_list , items.ingredients)) {
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

    ingredientInput.addEventListener("input", () => {
      var filtered_list = [];
     
      filter_ingredients.innerHTML = "";

      ingredients_list.forEach((element) => {
        if (this.s.findElem(element , ingredientInput.value) == true) {
          filtered_list.push(element);
        }
      });

      

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
      if (!this.s.findElem(appareil_list , element.appliance)) {
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

    appareilInput.addEventListener("input", () => {
      var filtered_list = [];
     
      filter_appareils.innerHTML = "";

      appareil_list.forEach((element) => {
        if (this.s.findElem(element , appareilInput.value)) {
          filtered_list.push(element);
        }
      });

      

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
        
        if (!this.s.findElem(ustensils_list , items)) {
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

    ustencilsInput.addEventListener("input", () => {
      var filtered_list = [];
     
      filter_ustensils.innerHTML = "";

      ustensils_list.forEach((element) => {
        if (this.s.findElem(element , ustencilsInput.value)) {
          filtered_list.push(element);
        }
      });

     

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

          
      let al = new algorithm();
      const inputSearchBar = document.getElementById("header_search");
      const container = document.createElement("div");
      container.setAttribute("class", "filterActive");
      container.setAttribute("id", item.innerText);
      const text = document.createElement("p");

      const icon = document.createElement("i");
      icon.setAttribute("class", "fa-solid fa-xmark");
      icon.addEventListener("click", () => {
        let close = document.getElementById(item.innerText);
        
        close.remove();
        al.searchbar_filter_items(String(inputSearchBar.value))
        al.setRecettesValue();
      });
      text.innerText = item.innerHTML;
      container.appendChild(text);
      container.appendChild(icon);
      filtered.appendChild(container);
      
      al.searchbar_filter_items(String(inputSearchBar.value))
      al.setRecettesValue()
      

    });
  }
}

export default Filter_container;
