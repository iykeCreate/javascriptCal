console.log('ikechukwu');
var name1 = prompt('Enter A to add ,S to substract, M to muliple, D to divide');

var  x = prompt('Enter first value');
var  y = prompt('Enter second value');

// upper case
name2= name1.toUpperCase();


//condition
if (name2 == 'A') {
    ans=x+y;


}
else if( name2 == 'S') {
ans=x-y;

}
else if (name2 == 'M'){

    ans = x*y;
}
else if (name2 == 'D'){

    ans= x/y;
}
prompt('Answer' + ans);
console.log('answer'+ans);