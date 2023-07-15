class algorithm {
    constructor (){this.search_length = 0;}
    
    searchbar_getlen() {
        //fonction pour récupérer la taille de la chaine de caractère inséré dans la searchbar
        //si elle est >2 , alors on filtres les données
        const inputSearchBar = document.getElementById("header_search");
        inputSearchBar.addEventListener("input" , () => {
           
            this.search_length = String(inputSearchBar.value).length;   
            console.log(this.search_length)
            if(this.search_length > 2) {
                this.searchbar_filter_items(inputSearchBar)
            }
        })    
    }

    searchbar_filter_items(input) {
        //fonction pour filtrer les items selon la searchbar et les filtres
        console.log(input.value);
    }
}


export default algorithm