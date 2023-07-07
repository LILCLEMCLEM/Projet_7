class Filter_container{
    constructor (recipes) {
        this.recipes = recipes
    }

    load_filters() {
        this.load_ingredients();
        this.load_appareil();
        this.load_ustenciles();
    }

    load_ingredients() {
        //-FILTRES INGREDIENTS------------------------------------------------------------------------
        const filter_ingredients = document.getElementById("filter_ingredients");
        let ingredients_list = []
        this.recipes.forEach(element => {
            element.ingredients.forEach(items => {
                if(!ingredients_list.includes(items.ingredients))
                {
                    ingredients_list.push(items.ingredient)
                    
                }
            });
        });

       
        ingredients_list = ingredients_list.filter(function(item) {
            return ingredients_list.hasOwnProperty(item) ? false : (ingredients_list[item] = true);
        })

        
        ingredients_list.forEach(element => {
            const item_list = document.createElement("p");
            item_list.setAttribute("class" , "item_list")
            item_list.textContent = element;

            filter_ingredients.appendChild(item_list)

            
        })
        
        return filter_ingredients
        

    }

    load_appareil() {
        //-FILTRES APPAREIL ------------------------------------------------------------------------
        const filter_appareils = document.getElementById("filter_appareils");
        let appareil_list = []
        this.recipes.forEach(element => {
              
            if(!appareil_list.includes(element.appliance))
            {
                appareil_list.push(element.appliance)
                      
            }
            
        });
  
         
        appareil_list = appareil_list.filter(function(item) {
            return appareil_list.hasOwnProperty(item) ? false : (appareil_list[item] = true);
        })
  
          
        appareil_list.forEach(element => {
            const item_list = document.createElement("p");
            item_list.setAttribute("class" , "item_list")
            item_list.textContent = element;
            filter_appareils.appendChild(item_list)
  
              
        })
          
        return filter_appareils
          
  
    }

    load_ustenciles() {
        //-FILTRES USTENSILS------------------------------------------------------------------------
        const filter_ustensils = document.getElementById("filter_ustenciles");
        let ustensils_list = []
        this.recipes.forEach(element => {
            element.ustensils.forEach(items => {
                
                if(!ustensils_list.includes(items))
                {
                    ustensils_list.push(items)
                     
                }
            });
        });
 
        
        ustensils_list = ustensils_list.filter(function(item) {
            return ustensils_list.hasOwnProperty(item) ? false : (ustensils_list[item] = true);
        })
 
         
        ustensils_list.forEach(element => {
            const item_list = document.createElement("p");
            item_list.setAttribute("class" , "item_list")
            item_list.textContent = element;
 
            filter_ustensils.appendChild(item_list)
 
             
        })
         
        return filter_ustensils

    }
}

export default Filter_container;