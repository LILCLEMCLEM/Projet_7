import { recipes } from "./recipes.mjs";
import Recipes_Container from "./Recipes Container.mjs"
class algorithm {
    constructor (){
        this.search_length = 0;
        this.R = new Recipes_Container()
    }
    
    searchbar_event() {
        //fonction pour récupérer la taille de la chaine de caractère inséré dans la searchbar
        //si elle est > 2 , alors on filtres les données
        const inputSearchBar = document.getElementById("header_search");
        inputSearchBar.addEventListener("input" , () => {
           
            this.search_length = String(inputSearchBar.value).length;   
            
            if(this.search_length > 2) {
                this.searchbar_filter_items(String(inputSearchBar.value).toLowerCase())
            }
            else {
                this.R.load_recipes(recipes);
            }
        })    
    }

    searchbar_filter_items(input) {
        //fonction pour filtrer les items selon la searchbar et les filtres
        var searchbar_list = [];
        console.log(input);
        
        //insere les élément dont le titre contient la chaine de caractère "input"
        recipes.forEach(element => {
            if(String(element.name).toLowerCase().includes(input)){
                searchbar_list.push(element.id);
            }

            if(String(element.description).toLowerCase().includes(input)) {
                searchbar_list.push(element.id);
            }

            element.ingredients.forEach(items => {
                if(String(items).toLowerCase().includes(input)) {
                    searchbar_list.push(element.id);
                }
            })
        })

        
        //fonction pour filtrer les doublons dans la liste
        console.log(searchbar_list)
        searchbar_list = searchbar_list.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        //------------------------------------------------

        console.log(searchbar_list)
        //rechargement de la partie cartes avec les éléments trié
        this.R.load_recipes_by_id(recipes , searchbar_list)
        
    }
}


export default algorithm