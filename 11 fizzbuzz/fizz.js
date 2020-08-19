//var root = document.getElementById("root");

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        document.write("Fizzbuz ")
    }else if(i % 3 == 0) {
        document.write("Fizz ");
    }else if (i % 5 == 0) {
        document.write("Buzz ");
    }else{
        document.write(i);
    } 
    document.write("<br>");
}