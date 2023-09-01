console.log(hello);
var hello = "world";

// ! begin interpretation
var hello
console.log(hello) // undefined
hello = "world"

// ! end

var needle = "haystack";
test();
function test() {
    var needle = "magnet";
    console.log(needle);
}

// ! begin interpretation
var needle
function test(){
    var needle
    needle="magnet"
    console.log(needle) //magnet
}
needle="haystack"
test() // magnet

// ! end

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// ! begin interpretation
var brendan
function print()
{
    brendan = 'only okay'
    console.log(brendan) // only okay
}
brendan = 'super cool'
console.log(brendan) // super cool

//! end



var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// ! begin interpretation
var food
function eat()
{
    food='half-chicken'
    console.log(food) // half-chicken
    var food
    food='gone'
}
food = 'chicken'
console.log(food) // chicken
eat()

//!end

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// ! begin interpretation

var mean
function(){
    
}

