function j1()
{
   var num= document.getElementById("1").value;
   console.log(num);
   if(num.length==15) American(num);
   else if(num.length==13 || num.length==16) Master(num);
   else document.getElementById("ans").value="Not a valid CARD";

}
function Master(num)
{
    var str=num.substr(0,2);
    console.log(str);
    if(num[0]=='4') document.getElementById("ans").value="VISA";
    else if((num.length==16) && (str==="51" || str==="52" || str==="53" || str==="54" || str==="55")) document.getElementById("ans").value="MASTER CARD";
}
function American(num)
{
    var str=num.substr(0,2);
    if(str=="34" || str=="37") document.getElementById("ans").value="AMERICAN EXPRESS";
}