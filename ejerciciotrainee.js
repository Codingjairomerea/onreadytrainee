let data = [{
    Marca: "Peugeot",
    Modelo: "206",
    Puertas: 4,
    Precio: "$200.000,00"
},
    {
    Marca: "Honda",
    Modelo: "Titan",
    Cilindrada: "125cc",
    Precio: "$60.000,00"
},
{
    Marca: "Peugeot",
    Modelo: "208",
    Puertas: 5,
    Precio: "$250.000,00"
},
{
    Marca: "Yamaha",
    Modelo: "YBR",
    Cilindrada: "160cc",
    Precio: "$80.500,50"
}
]

function carIteration(arr) {
    arr.forEach(element => {
        propertyIteration(element);
    });
    console.log ("=============================");
}

function propertyIteration(prop) {
        let property = ""
        for (var key in prop) {
            property += `${key}: ${prop[key]} // `
        }
        let propertyNew = property.slice(0,length - 4)
        console.log(propertyNew);
}

carIteration(data)


let sum = []
function stringToNumberItaration(prop) {

    function changeDotsAndComas(string) {
        let newstring = string.replace(".","").replace(",",".");
        return newstring
    }

    for (let key in prop) {
            if (key === "Modelo") {
                var model = (prop[key])
            }
            if (key === "Marca") {
                var branch = (prop[key])
            }
            if (key === "Precio"){
                sum.push([`${branch}`, `${model}`, parseFloat(changeDotsAndComas(prop[key].slice(1)))])
            }
        }
}

function arrayStringToNumberIteration(arr) {
    arr.forEach(element => {
        stringToNumberItaration(element);
    });
}
arrayStringToNumberIteration(data);

function mostExpensiveCar(arr) {
    let inicio = sum[0][2];
    let mayor = sum[0][1];
    let branch = sum[0][0];
    for (let i = 0; i < sum.length-1; i++){
        if (inicio >sum[i+1][2]){

    } else  {
        inicio = sum[i+1][2];
        mayor = sum[i+1][1];
        branch = sum[i+1][0];
    }
    }
    return `Vehículo más caro: ${branch} ${mayor}`
}

function lessExpensiveCar(arr) {
    let inicio = sum[0][2];
    let menor = sum[0][1];
    let branch = sum[0][0];
    for (let i = 0; i < sum.length-1; i++){
        if (inicio < sum[i+1][2] ){
    } else  {
        inicio = sum[i+1][2];
        menor = sum[i+1][1];
        branch = sum[i+1][0];
    }
    }
    return `Vehículo más barato: ${branch} ${menor}`
}

function findBranchWithLetter(sum) {
    let missingLetter = "Y";
    let result = "";

    function numberToString(number){
        let string = number.toFixed(2).replace(".",",")
        let newString = string.slice(0,string.length-6) +"."+ string.slice(-6)
        return newString
    }

    for (let i = 0; i < sum.length; i++){
        let branch = sum[i][0];
        let model = sum[i][1];
        let cost =  (sum[i][2]);
        let costString = numberToString(cost);
        if (model.indexOf(missingLetter) >= 0){
        result += `${branch} `
        result += `${model} `
        result += `$${costString} `
    }

    }
    return `Vehículo que contiene en el modelo la letra ‘${missingLetter}’: ${result}`
}

function secondParragraph (sum) {
    console.log(mostExpensiveCar(sum));
    console.log(lessExpensiveCar(sum));
    console.log(findBranchWithLetter(sum));
    console.log ("=============================");
}
secondParragraph(sum)




function orderList(sum) {
    sum.sort(((a, b) => b[2] - a[2]));
    return sum
}
let orderPriceCars = orderList(sum);

function listingPerPrice(sum) {
        console.log("Vehículos ordenados por precio de mayor a menor:")
    for (let i in orderList(sum)) {
        console.log(`${sum[i][0]} ${sum[i][1]}`)
    }
}

listingPerPrice(sum)
