class Recipes_Container{
    constructor () {
        
    }

    load_recipes(recipes) {
        const recette_section = document.querySelector("article");
        recipes.forEach(element => {
            //création de la carte recette
            const card = document.createElement("section");
            card.setAttribute("class" , "card_recette");

            //création de l'image
            const img_card = document.createElement("img");
            img_card.setAttribute("class" , "card_img");
            img_card.setAttribute("src" , "sources/images/recettes/" + element.image);
            card.appendChild(img_card);

            //création durée et nom de la recette
            const duration_card = document.createElement("p");
            duration_card.setAttribute("class" , "duration")
            duration_card.textContent = element.time + "min";

            const name_card = document.createElement("p");
            name_card.setAttribute("class" , "name")
            name_card.textContent = element.name;

            card.appendChild(duration_card)
            card.appendChild(name_card);

            //création texte recette
            const recette_text = document.createElement("p");
            recette_text.setAttribute("class" , "main_text");
            recette_text.textContent = "RECETTE";

            const recette_desc = document.createElement("p");
            recette_desc.setAttribute("class" , "recette");
            recette_desc.textContent = element.description;

            card.appendChild(recette_text)
            card.appendChild(recette_desc)

            //création  ingrédients
            const ingredient_text = document.createElement("p");
            ingredient_text.setAttribute("class" , "main_text");
            ingredient_text.textContent = "Ingrédients";
            card.appendChild(ingredient_text);

            //itération ingredients
            const ingredients_content = document.createElement("div");
            ingredients_content.setAttribute("class" , "ingredients_display");
            element.ingredients.forEach(items => {
                const model = document.createElement("div");
                model.setAttribute("class" , "ingredients_model");

                const ingredient_name = document.createElement("p");
                ingredient_name.setAttribute("class" ,"ingredient_name");
                ingredient_name.textContent = items.ingredient;

                const ingredient_quantity = document.createElement("p");
                ingredient_quantity.setAttribute("class" , "ingredient_dosage");
                ingredient_quantity.textContent = items.quantity ==null ? "" : items.quantity; 
                ingredient_quantity.textContent += items.unit ==null ? "" : " " + items.unit; 

                model.appendChild(ingredient_name)
                model.appendChild(ingredient_quantity)
                ingredients_content.appendChild(model);

            });
            card.appendChild(ingredients_content)
            recette_section.appendChild(card)
        });

        return recette_section;
    }
   

    

    
}

export default Recipes_Container;