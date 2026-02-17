function tickUp() {

    let counter = Number (document.getElementById ("counter").innerText);
    if(counter < 27 ) {
    counter+=1;
    document.getElementById ("counter").innerText=counter;
    }
    
}
function tickDown() {

    let counter = Number (document.getElementById ("counter").innerText);
    if(counter > 0 ) {
    counter-=1;
    document.getElementById ("counter").innerText=counter;
    }
    
}
function runForLoop() {
     let counter = Number (document.getElementById ("counter").innerText);
     let result = "";
     for (let i=0;i<=counter;i++){
        result += i+" ";

     }
document.getElementById("forLoopResult").innerText=result;


}

function showOddNumbers() {
    let counter = Number (document.getElementById ("counter").innerText);
    let oddNumberResult = "";
    for (let j=0;j<=counter;j++){
        if(j%2==1){
            oddNumberResult += j+" ";
        }
    }
    document.getElementById("oddNumberResult").innerText=oddNumberResult;
}

function addMultiplesToArray() {
    let counter = Number (document.getElementById ("counter").innerText);
    let arr = [];
    for (let k=counter;k>=5;k--){
        if(k%5==0){
            arr.push(k);
        }
    }
    console.log(arr);
}

function printCarObject() {
    let carType = document.getElementById ("carType").value; 
    let carMPG = document.getElementById ("carMPG").value;
    let carColor = document.getElementById ("carColor").value;
    let carObject = {
        cType: carType, 
        cMPG: carMPG,
        cColor: carColor,
    }
    console.log(carObject);

}

function loadCar(z){
    if (z==1){
        document.getElementById("carType").value=carObject1.cType;
        document.getElementById("carMPG").value=carObject1.cMPG;
        document.getElementById("carColor").value=carObject1.cColor;
    }
    if (z==2){
        document.getElementById("carType").value=carObject2.cType;
        document.getElementById("carMPG").value=carObject2.cMPG;
        document.getElementById("carColor").value=carObject2.cColor;
    }if (z==3){
        document.getElementById("carType").value=carObject3.cType;
        document.getElementById("carMPG").value=carObject3.cMPG;
        document.getElementById("carColor").value=carObject3.cColor;
    }
    
}

function changeColor(p){
    if (p==1){
        document.getElementById("styleParagraph").style.color="red";

    }
    if (p==2){
        document.getElementById("styleParagraph").style.color="green";
        
    }
    if (p==3){
        document.getElementById("styleParagraph").style.color="blue";
        
    }
}