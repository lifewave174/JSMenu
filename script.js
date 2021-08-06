//A1

let wrapperChildren= document.querySelector(".wrapper").children;

console.log(wrapperChildren)

for(let child of wrapperChildren){
    console.log(child, child.children.length)    
}

//A2 return child element with most number of classes

function highestClasses(){
    let childrenArray=Array.from(wrapperChildren);
    // console.log(childrenArray)
    let result={};
    for(let i=0; i<childrenArray.length;i++) {
        for(let j=i+1;j<childrenArray.length;j++){
            if((childrenArray[i].classList.length)>(childrenArray[j].classList.length)){
                key=childrenArray[i].nodeName;
                console.log(key);
                result[key]=childrenArray[i].classList.length;
            //    return result.childrenArray[i]=`${childrenArray[i].classList.length}`                
            } else {
                key=childrenArray[j].nodeName;
                console.log(key);
                result[key]=childrenArray[j].classList.length;
            }
        }
    }
    return result;
}

console.log(highestClasses())
