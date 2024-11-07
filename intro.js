animal2.addEventListener('click',function(){
    console.log("Turn to next animal- black bear");
    document.getElementById("sheep").src = "bear.webp";
    document.getElementById("animal2").style.backgroundColor= "#97bf04";
    document.getElementById("animal1").style.backgroundColor= "#d9043d";
    document.getElementById("animal3").style.backgroundColor= "#d9043d";
    document.getElementById("animal4").style.backgroundColor= "#d9043d";
    document.getElementById("animal5").style.backgroundColor= "#d9043d";
    

})

animal3.addEventListener('click', function(){
    console.log("Turn to next Animal- moose")
    document.getElementById("sheep").src = "moose.webp";
    document.getElementById("animal3").style.backgroundColor= "#97bf04";
    document.getElementById("animal2").style.backgroundColor= "#d9043d";
    document.getElementById("animal1").style.backgroundColor= "#d9043d";
    document.getElementById("animal4").style.backgroundColor= "#d9043d";
    document.getElementById("animal5").style.backgroundColor= "#d9043d";
})

animal4.addEventListener('click', function(){
    console.log("Turn to next Animal- wolf")
    document.getElementById("sheep").src = "wolf.webp";
    document.getElementById("animal4").style.backgroundColor= "#97bf04";
    document.getElementById("animal3").style.backgroundColor= "#d9043d";
    document.getElementById("animal1").style.backgroundColor= "#d9043d";
    document.getElementById("animal3").style.backgroundColor= "#d9043d";
    document.getElementById("animal5").style.backgroundColor= "#d9043d";
})

animal5.addEventListener('click', function(){
    console.log("Turn to next Animal- elk")
    document.getElementById("sheep").src = "elk.webp";
    document.getElementById("animal5").style.backgroundColor= "#97bf04";
    document.getElementById("animal4").style.backgroundColor= "#d9043d";
    document.getElementById("animal1").style.backgroundColor= "#d9043d";
    document.getElementById("animal3").style.backgroundColor= "#d9043d";
    document.getElementById("animal4").style.backgroundColor= "#d9043d";
})
animal1.addEventListener('click', function(){
    console.log("Initial animal")
    document.getElementById("sheep").src= "sheep.webp";
    document.getElementById("animal1").style.backgroundColor= "#97bf04";
    document.getElementById("animal5").style.backgroundColor= "#d9043d";
    document.getElementById("animal3").style.backgroundColor= "#d9043d";
    document.getElementById("animal4").style.backgroundColor= "#d9043d";
    document.getElementById("animal2").style.backgroundColor= "#d9043d";
    
})