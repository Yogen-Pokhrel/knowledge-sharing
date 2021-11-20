
const magicSquares1 =   [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
];

const magicSquares2 =   [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4]
];

const magicSquares3 =   [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
];

const magicSquares4 =   [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8]
];

const magicSquares5 =   [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
];

const magicSquares6 =   [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6]
];

const magicSquares7 =   [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4]
];
const magicSquares8 =   [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

const magicSquare = [
magicSquares1,
magicSquares2,
magicSquares3,
magicSquares4,
magicSquares5,
magicSquares6,
magicSquares7,
magicSquares8,
]
function formingMagicSquare(s) {
// Write your code here
var costTree = [0,0,0,0,0,0,0,0];
var index = 0;
magicSquare.forEach(function(x){

for(var i = 0; i < 3; i++){
for(var j = 0; j < 3; j++){
if(x[i][j] != s[i][j]){
costTree[index] += Math.abs(x[i][j]-s[i][j]);
}
}
}
index++;
});
var min = costTree[0];
costTree.forEach(function(x){
if(x < min){
min = x;
}
})
return min;


}