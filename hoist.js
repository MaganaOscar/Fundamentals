console.log(hello);                                   
var hello = 'world';                                 

// 1. undefined, cannot assign value

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// 2. logs magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// 3. logs only okay

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// 4. logs chicken, half-chicken 

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// 5. undefined

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// 6. undefined at 47

dojo = 'san jose';
console.log(dojo);
learn();
function learn() {
  dojo = 'seattle';
  console.log(dojo);
  var dojo = 'burbank';
  console.log(dojo);
}

// 7. logs san jose, seattle burbank

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// 8. {}