let b = true;
let result = b && (1/0);
console.log(result);

/* EXPLICATION DE INFINITY
L'infini est en effet une valeur en JavaScript, représentant l'infini mathématique (∞). 
L'infini est une propriété de l'objet global, ou en d'autres termes, une variable de portée globale.

La valeur Infinity est accessible directement avec la variable globale Infinity, qui est une propriété 
de l'objet global.

Il est également accessible en utilisant Number.POSITIVE_INFINITY (une propriété de l'objet Number), 
avec des fonctions mathématiques produisant un nombre trop grand, ou en divisant n'importe quel nombre 
par zéro 0

https://medium.com/swlh/what-is-infinity-in-javascript-%EF%B8%8F-1faf82f100bc
*/

let b2 = false;
let result2 = b2 && (1/0);
console.log(result2);

/* EXPLICATION DE FALSE
La valeur passée en premier paramètre est, si nécessaire, convertie en valeur booléenne. 
Si la valeur est omise ou est 0, -0, null, false, NaN, undefined ou une chaîne de caractères vide (""), 
l'objet a une valeur initiale de false (faux). Toutes les autres valeurs, y compris n'importe quel objet, 
un tableau vide ([]), ou une chaîne de caractères "false", créent un objet avec une valeur initiale de true 
(vrai).

Il ne faut pas confondre les valeurs primitives booléennes true et false avec les valeurs true et false 
d'un objet Boolean.

Tout objet dont la valeur n'est ni undefined ni null, incluant un objet Boolean dont la valeur est fausse, 
est évalué à true lorsqu'il est utilisé dans une instruction conditionnelle. Par exemple, la condition de 
l'instruction if dans le code suivant est validée, car l'expression x est évaluée à true :

var x = new Boolean(false);
if (x) {
  // ce code est exécuté
}

Ce comportement ne s'applique pas aux valeurs primitives booléennes. 
Par exemple, dans le code suivant, la condition est évaluée à false :

var x = false;
if (x) {
  // ce code n'est pas exécuté
}

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean
*/