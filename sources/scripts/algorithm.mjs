import { recipes } from "./recipes.mjs";
import Recipes_Container from "./Recipes Container.mjs"
class algorithm {
    constructor (){this.search_length = 0;}
    
    searchbar_event() {
        //fonction pour récupérer la taille de la chaine de caractère inséré dans la searchbar
        //si elle est > 2 , alors on filtres les données
        const inputSearchBar = document.getElementById("header_search");
        inputSearchBar.addEventListener("input" , () => {
           
            this.search_length = String(inputSearchBar.value).length;   
            
            if(this.search_length > 2) {
                this.searchbar_filter_items(String(inputSearchBar.value).toLowerCase())
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
        })

        
        console.log(searchbar_list)
        let R = new Recipes_Container()
        R.load_recipes(recipes).filter(element => {
            return searchbar_list.includes(element.id)
        })
    }
}


export default algorithm