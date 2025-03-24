function LengthConverter(lenght,from,to){
if(from==="k.m" && to ==="miles"){
return `${lenght /1.6} miles`;

}else if(from==="miles" && to ==="k.m"){
    return `${lenght * 1.6} k.m`;
}else if(from ==="miles" && to==="ft"){
    return `${lenght * 5280} ft`
}else if(from==="ft" && to ==="miles"){
     return `${lenght / 5280} miles`
}else if(from==="k.m" && to==="ft"){
    return `${lenght*3280} ft`
}else if(from==="ft" && to==="k.m"){
    return `${lenght/3280} k.m`
}else if(
    from==="k.m" && to ==="k.m"
){
     return `${lenght} k.m`
}

}
 document.querySelector(".output1").innerHTML=LengthConverter(100,"k.m","miles");
 document.querySelector(".output2").innerHTML=LengthConverter(100,"miles","k.m");
 document.querySelector(".output3").innerHTML=LengthConverter(100,"miles","ft");
 document.querySelector(".output4").innerHTML=LengthConverter(100,"ft","miles");
 document.querySelector(".output5").innerHTML=LengthConverter(100,"k.m","ft");
 document.querySelector(".output6").innerHTML=LengthConverter(100,"ft","k.m");
 document.querySelector(".output7").innerHTML=LengthConverter(100,"k.m","k.m");