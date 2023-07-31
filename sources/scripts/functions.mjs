import {String_Flat} from "./algorithm.mjs"
class searcher {

    constructor() {

    }

    findElem(element , input) {
        
        element = String_Flat(element);
        input = String_Flat(input)
        
        
        let exist = false;
        let index = 0;
        for(let i = 0 ; i < element.length ; i++) {
            
            
            //console.log(exist , index)
            if(element[i] == input[index]) {
                exist = true;
                index ++;
                
                if(index == input.length) {
                    return exist;
                }
                
            }
                
            else {
                exist = false;
                index = 0;
            }
        }
        if(input == "") {return true}
        return false
    }
    
}
export default searcher;