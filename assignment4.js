//*************/ javascript assignment 4 ***********************//
RatingData =
    [
        { restaurant: 'KFC', rating: 5 },
        { restaurant: 'Burger King', rating: 4 },
        { restaurant: 'KFC', rating: 3 },
        { restaurant: 'Domino', rating: 2 },
        { restaurant: 'Subway', rating: 3 },
        { restaurant: 'Domino', rating: 1 },
        { restaurant: 'Subway', rating: 4 },
        { restaurant: 'Pizza Hut', rating: 5 }
    ]

//Q1 Calculate the average rating for all restaurants.

// *************Calculating for KFC************** 
function KFCs(value) {
    return value.restaurant == "KFC"

}
var kfcfilter = (RatingData.filter(KFCs));

var kfc_avg = 0;
for (var i = 0; i < kfcfilter.length; i++) {
    kfc_avg = kfc_avg + kfcfilter[i].rating / kfcfilter.length;
}
console.log('Average rating for KFC         : ' + kfc_avg)

// ***************Calculating for domino*******************

function dominos(value) {
    return value.restaurant == "Domino";
}
var dominofilter = (RatingData.filter(dominos));

var domino_avg = 0;
for (let i = 0; i < dominofilter.length; i++) {
    domino_avg = domino_avg + dominofilter[i].rating / dominofilter.length;
}
console.log('Average rating for Domino      : ' + domino_avg);

// *************Calculating for subway**************

function subways(value) {
    return value.restaurant == "Subway";
}

var subwayfilter = (RatingData.filter(subways));

var subway_avg = 0;
for (let i = 0; i < subwayfilter.length; i++) {
    subway_avg = subway_avg + subwayfilter[i].rating / subwayfilter.length;
}
console.log('Average rating for Subway      : ' + subway_avg);

// ******************Calculating for Burger King*****************

function burgerking(value) {

    return value.restaurant == "Burger King";
}

var burgerkingfilter = (RatingData.filter(burgerking));
var burger_avg = 0;
for (let i = 0; i < burgerkingfilter.length; i++) {

    burger_avg = burger_avg + burgerkingfilter[i].rating / burgerkingfilter.length;

}
console.log('Average rating for Burger King : ' + burger_avg);

// *******************Calculating for Pizza hut********************


function Pizzahut(value) {

    return value.restaurant == "Pizza Hut";
}

var Pizza_filter = (RatingData.filter(Pizzahut));
var Pizza_avg = 0;
for (let i = 0; i < Pizza_filter.length; i++) {

    Pizza_avg = Pizza_avg + Pizza_filter[i].rating / Pizza_filter.length;

}
console.log('Average rating for Pizza hut   : ' + Pizza_avg);


// *****************Solving Question 2****************

const All_restaurant_avg= [kfc_avg,Pizza_avg,domino_avg,subway_avg,burger_avg];

function filter_above_4(valuee)
{
    if(valuee>4)
    {
        return valuee;
    };
}
let Above_4= (All_restaurant_avg.filter(filter_above_4));
console.log('Restaurants Above Rating 4 : '+Above_4);