var jss = [
    {
        username : 'Vishal',
        age :12,
        married_status :true
    },
    {
        username: 'Vikash',
        age : 19, 
        married_status : false
    },
    {
        username: 'Rohit',
        age :20 , 
        married_status : true
    },
    {
        username: 'Ritesh',
        age : 22, 
        married_status : false
    }
]
var ages = 0 ;

jss.forEach(function (ele) {
    ages = ages + ele.age
});
console.log(ages);
