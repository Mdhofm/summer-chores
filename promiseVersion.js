//75 % chance that person stays awake
function time() {
  
  return Math.floor(Math.random() * 10000);
}

let totalTime = time(); 

function delayedPromise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done!');
    }, time); 
  });
}



function mowYard(name){
    delayedPromise(2000).then((message) => {
        console.log(`${name} mowed the yard.`);
        totalTime = totalTime - 2000; 
        weedEat(1500, name); 
    });
}

function weedEat(time, name){

    if(totalTime > 1500){
    delayedPromise(time).then((message) => {
        console.log(`${name} finished using the weed eater.`);
        totalTime = totalTime - 1500;
        trimHedges(1000, name); 
    });
         
        
    }else{
        console.log(`${name} fell asleep after mowing the yard.`); 
    }
} 

function trimHedges(time, name){

    if(totalTime > 1000){
    delayedPromise(time).then((message) => {
        console.log(`${name} finished trimming the hedges.`);
        totalTime = totalTime - 1000;
        collectWood(2500, name); 
    });
         
        
    }else{
        console.log(`${name} fell asleep after weed eating the yard.`); 
    }
} 

function collectWood(time, name){

    if(totalTime > 2500){
    delayedPromise(time).then((message) => {
        console.log(`${name} finished collecting wood.`);
        totalTime = totalTime - 2500;
        waterGarden(500, name); 
    });
         
        
    }else{
        console.log(`${name} fell asleep after trimming the hedges.`); 
    }
} 

function waterGarden(time, name){

    if(totalTime > 500){
    delayedPromise(time).then((message) => {
        console.log(`${name} finished watering the garden.`);
        console.log(`${name} finished all their chores!`);
    });
         
        
    }else{
        console.log(`${name} fell asleep after collecting wood.`); 
    }
} 



function doSummerChores(name){
    mowYard(name); 
}

doSummerChores('Max'); 



 

 


