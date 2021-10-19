/////////////////////////////////////////////////
// Coding Dojo > Web Fundamentals > Javascript > Dojo Pizzeria
// By: Virgilio D. Cabading Jr. - October 18, 2021
/////////////////////////////////////////////////

import { print_desc } from "./module.js";               // Import functions from JS library
import { print_ln } from "./module.js";

//// VARIABLES DECLERATION //////////////////////

var pizza_list = [];

//// FUNCTIONS SECTION //////////////////////////

function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var new_pizza = {                                   // Function creates a new instance of a pizza
        "crustType" : crustType,
        "sauceType" : sauceType,
        "cheeses" : cheeses,
        "toppings" : toppings,
        "pizzaInfo" : function() {                      // Function that prints the contents of the pizza
            console.log("Crust Type:", new_pizza.crustType);
            console.log("Sauce Type:", new_pizza.sauceType);
            console.log("Cheeses:", new_pizza.cheeses);
            console.log("Toppings:", new_pizza.toppings);
        }
    }
    return new_pizza;
}

function print_all_pizza_info (local_pizza_list) {      // Function goes through each pizza in the array
    for (var i=0; i < local_pizza_list.length; i++) {   //     aand prints the info on each pizza
        print_desc("Pizza #" + (i+1) + " info:");
        local_pizza_list[i].pizzaInfo();
        print_ln();
    }
} 


//// MAIN EXECUTABLE SECTION ////////////////////

    //// MAKE THE PIZZAS/////////////////////////

pizza_list.push(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]));
pizza_list.push(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]));
pizza_list.push(pizzaOven("thin crust", "traditional", ["mozzarella", "provolone"], 
                            ["ham", "pineapple", "smoked bacon", "roasted red peppers"]));  // Hawaiian Pizza

    //// PRINT THE INFO ON THE PIZZAS MADE

console.log("DOJO PIZZERIA");
print_desc("Number of Pizzas: " + pizza_list.length);
print_all_pizza_info(pizza_list);
