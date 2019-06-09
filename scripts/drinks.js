 Ages = function (age){
    
    if (age < 0){
        alert("Sorry. I can’t tell what drink because that age is incorrect!");
    } else if (age < 14){
        alert("Drink Toddy");
    } else if (age < 18){
        alert("Drink Coke");
    } else if (age < 21){
        alert("Drink Beer");
    } else if (age < 130){
        alert ("Drink Whiskey");
    } else {
        alert("Sorry. I can’t tell what drink because that age is incorrect!");
    }

/*
whatCanIDrink = function(age) {
	if (age < 0) {
		return "Sorry. I can’t tell what drink because that age is incorrect!";
	}
	else if (age < 14) {
		return "Drink Toddy";
	}
	else if (age < 18 && age >=14) {
		return "Drink Coke";
	}
	else if (age < 21 && age >=18) {
		return "Drink Beer";
	}
	else if (age < 130) {
		return "Drink Whisky";
	} 
	else {
		return "Sorry. I can’t tell what drink because that age is incorrect!"
	}
};*/
