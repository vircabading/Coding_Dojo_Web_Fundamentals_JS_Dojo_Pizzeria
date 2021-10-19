/////////////////////////////////////////////////
// Coding Dojo > Web Fundamentals > Javascript > Dojo Pizzeria
// By: Virgilio D. Cabading Jr. - October 18, 2021
/////////////////////////////////////////////////

import { print_desc } from "./module.js";
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

function print_all_pizza_info (local_pizza_list]) {
    for (var i=0; i < local_pizza_list.length; i++) {
        print_desc("Pizza #" + (i+1) + " info:");
        local_pizza_list.pizzaInfo();
        print_ln();
    }
} 


//// MAIN EXECUTABLE SECTION ////////////////////

    //// MAKE THE PIZZA /////////////////////////

pizza_list.push(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]));

    //// PRINT THE INFO ON THE PIZZAS MADE
print_desc("Number of Pizzas: " + pizza_list.length);

pizza_list[0].pizzaInfo();
