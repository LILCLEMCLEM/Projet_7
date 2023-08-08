import { recipes } from "./recipes.mjs";
import Recipes_Container from "./Recipes Container.mjs"
import Filter_container from "./filter_container.mjs";
var t;
class algorithm {
    constructor (){
        this.search_length = 0;
        this.R = new Recipes_Container()
        this.F = new Filter_container();
        
    }
    
    searchbar_event() {
        
        //fonction pour récupérer la taille de la chaine de caractère inséré dans la searchbar
        //si elle est > 2 , alors on filtres les données
        const inputSearchBar = document.getElementById("header_search");
        inputSearchBar.addEventListener("input" , () => {
           
            this.search_length = String(inputSearchBar.value).length;   
            t = timer("Input -> load")
            if(this.search_length > 2) {
                this.searchbar_filter_items(String(String_Flat(inputSearchBar.value)));
                
            }
            else {
                this.R.load_recipes(recipes);
                this.setRecettesValue()
                
                this.F.load_filters(recipes)
                t.stop();
                
            }
        })    
    }

    

    searchbar_filter_items(input) {
       
        //fonction pour filtrer les items selon la searchbar et les filtres
        var searchbar_list = [];
       
        
        //insere les élément dont le titre contient la chaine de caractère "input"
        recipes.forEach(element => {
            if(String(String_Flat(element.name)).includes(input)){
                searchbar_list.push(element.id);
                return 0;   // passe a l'itération suivante
                
                
            } 

             if(String(String_Flat(element.description)).includes(input)) {
                searchbar_list.push(element.id);
                
                return 0; // passe a l'itération suivante
                
            }
            element.ingredients.forEach(items => {
                if(String(String_Flat(items)).includes(input)) {
                    searchbar_list.push(element.id);
                    return 0;
                }
            })

            
                  
            
            
        })


        
        
       

        
        
        //rechargement de la partie cartes avec les éléments trié
        
        this.R.load_recipes_by_id(recipes , searchbar_list)
        this.setRecettesValue()
        this.F.load_filters(recipes)
        updateFilters(searchbar_list)
        t.stop();
       
        
    }

    setRecettesValue() {
        const recipes_value = document.getElementById("nav_recettes");
        const recipe_count = document.querySelectorAll("main article .card_recette");
        recipes_value.innerText = recipe_count.length + " recettes"
    }
}



//supprimer les majuscules et les accents
function String_Flat(value) {
    return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}


//a patcher
function updateFilters(array) {
    const filter_element = document.querySelectorAll("main nav .nav_selector .filter_box .item_list");
    const ingredients_item = document.getElementById("filter_appareils_items");
    ingredients_item.innerHTML = "";

    const ustensils_item = document.getElementById("filter_ustensils_items");
    ustensils_item.innerHTML = "";

    const ingredient_list = document.getElementById("filter_ingredient_items");
    ingredient_list.innerHTML = "";
    
    
    let r = new Filter_container();
    
    let filtered = []
    filter_element.forEach(element => {
        
        recipes.forEach(elem =>{
            if(array != undefined && array.includes(elem.id)) {
                
                if(String_Flat(elem.appliance) == String_Flat(element.innerText)) {
                    
                    filtered.push(elem);
                    return 0;
                }

                elem.ustensils.forEach(e => {
                    if(e == element.innerText) {
                        filtered.push(elem);
                        return 0;
                    }
                })
            }

            
        })
    })
    if(array == undefined) {
        r.load_filters(recipes);
    }
    else{r.load_filters(filtered);}

}

var timer = function(name) {
    var start = new Date();
    return {
        stop: function() {
            var end  = new Date();
            var time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
};


export default algorithm