//https://github.com/Hasan-Banna/js-assignment-1

//kilometer to meter
function kilometerToMeter (value){
    var meter = value * 1000;
    return meter; 
}
var result = kilometerToMeter(197);
console.log(result);



//Budget calculator
function budgetCalculator(watch, mobile, laptop){
    var totalWatch = watch * 50;
    var totalMobile = mobile * 100;
    var totalLaptop = laptop * 500;
    var total = totalWatch + totalMobile + totalLaptop;
    return total;
}
var result = budgetCalculator(2, 2, 2);
console.log(result);



//Hotel Cost
function hotelCost(days){
    var amount = 0;
    if(days <= 10){
        amount = days * 100;
    }
    else if(days <= 20){
        var firstTen = 10 * 100;
        var remaining = days - 10;
        var secondTen = remaining * 80;
        amount = firstTen + secondTen;
    }
    else{
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        remaining = days - 20;
        var thirdTen = remaining * 50;
        amount = firstTen + secondTen + thirdTen;
    }
    return amount;
}
var totalCost = hotelCost(22);
console.log(totalCost);



//Mega Friend
function megaFriend(name){
    var max = "";

    for(var i = 0; i < name.length; i++){
        if(name[i].length > max.length){
            max = name[i];
        }
    }
    return max;
}

 var result = megaFriend(["sam", "shorifa", "hasan-al-banna", "Mahfuza", "sami"]);
 console.log(result);