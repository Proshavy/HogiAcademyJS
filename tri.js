/* TRI PAR ORDRE CROISSANT 1*/

var tab = [3, 0, 4, 8, 6, 1, 7, 9, 2]
tab.sort();
console.log(tab);

/* TRI PAR ORDRE CROISSANT 2*/

var points = [40, 100, 22, 35, 1, 5, 25, 10]; 

points.sort(function(a, b)
{
    return a - b
});
console.log(points)
