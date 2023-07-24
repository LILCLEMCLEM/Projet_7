import { recipes } from "./recipes.mjs";
import Recipes_Container from "./Recipes Container.mjs"
class algorithm {
    constructor (){
        this.search_length = 0;
        this.R = new Recipes_Container()
    }
    
    searchbar_event() {
        const recipes_value = document.getElementById("nav_recettes")
        //fonction pour récupérer la taille de la chaine de caractère inséré dans la searchbar
        //si elle est > 2 , alors on filtres les données
        const inputSearchBar = document.getElementById("header_search");
        inputSearchBar.addEventListener("input" , () => {
           
            this.search_length = String(inputSearchBar.value).length;   
            
            if(this.search_length > 2) {
                this.searchbar_filter_items(String(String_Flat(inputSearchBar.value)));
            }
            else {
                this.R.load_recipes(recipes);
                recipes_value.innerText = "50 recettes";
            }
        })    
    }

    

    searchbar_filter_items(input) {
        const recipes_value = document.getElementById("nav_recettes")
        //fonction pour filtrer les items selon la searchbar et les filtres
        var searchbar_list = [];
        console.log(input);
        
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
                }
            })
        })



        
        //fonction pour filtrer les doublons dans la liste
        
        searchbar_list = searchbar_list.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        //------------------------------------------------

        console.log(searchbar_list)
        recipes_value.innerText = String(searchbar_list.length) + " recettes";
        //rechargement de la partie cartes avec les éléments trié
        this.R.load_recipes_by_id(recipes , searchbar_list)
        
    }
}



//supprimer les majuscules et les accents
function String_Flat(value) {
    return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export default algorithm