var niz = [0, 0, 0, 0, 0];
function glasaj()
{
var datum=new Date();
datum.setMinutes(datum.getMinutes()+1);
var svi = document.getElementsByName('type');
var izabrani="";

for(var i=0; i<svi.length; i++)
{
if(svi[i].checked)
{
izabrani=svi[i].value;
switch(svi[i].value)
{
case '0': 

if(document.cookie.indexOf("Porcelan")==-1)
{
document.cookie="Porcelan dolls#=" +1+
";expires="+datum.toGMTString()+";"; niz[0]++;
}

else
{
niz[0]++;
var k=document.cookie; 
var t=k.indexOf("#"); 
var z=t+2; 
var a=k.substr(z,1);
var b=parseInt(a)+1;
document.cookie="Porcelan dolls#=" +b+
";expires="+datum.toGMTString()+";";
};
break;

case '1': 
if(document.cookie.indexOf("Plastic")==-1)
{
document.cookie="Plastic dolls!=" +1+
";expires="+datum.toGMTString()+";"; 
niz[1]++;
}

else
{
niz[1]++;
var k=document.cookie; 
var t=k.indexOf("!"); 
var z=t+2; 
var a=k.substr(z,1); 
var b=parseInt(a)+1;
document.cookie="Plastic dolls!=" +b+
";expires="+datum.toGMTString()+";";
};
break;

case '2': 
if(document.cookie.indexOf("Wooden")==-1)
{
document.cookie="Wooden dolls$=" +1+
";expires="+datum.toGMTString()+";"; niz[2]++;
}

else
	{
niz[2]++;
var k=document.cookie; 
var t=k.indexOf("$"); 
var z=t+2; 
var a=k.substr(z,1); 
var b=parseInt(a)+1;
document.cookie="Wooden dolls$=" +b+
";expires="+datum.toGMTString()+";";
};
break;

case '3': if(document.cookie.indexOf("Ragdolls")==-1)
{
document.cookie="Ragdolls%=" +1+
";expires="+datum.toGMTString()+";"; niz[3]++;
}
else
	
{
niz[3]++;
var k=document.cookie; 
var t=k.indexOf("%");
var z=t+2; 
var a=k.substr(z,1); 
var b=parseInt(a)+1;
document.cookie="Ragdolls%=" +b+";expires="+datum.toGMTString()+";";
};
break;

case '4': 
if(document.cookie.indexOf("Other")==-1)
{
document.cookie="Other&=" +1+
";expires="+datum.toGMTString()+";"; niz[4]++;
}

else
{
niz[4]++;
var k=document.cookie; 
var t=k.indexOf("&"); 
var z=t+2; 
var a=k.substr(z,1); 
var b=parseInt(a)+1;
document.cookie="Other&=" +b+";expires="+datum.toGMTString()+";";
};
break;
}
}
}

if(izabrani=="") 
alert("Choose one option to vote!");
else{
	document.getElementById('pollres').innerHTML="<p>You have voted succesfully!</p><br/>";
}
}

function rezultat()
{
if(document.cookie!="")
{
var kolacicNiz = document.cookie.split("__")[0];

if(kolacicNiz.indexOf("#") || kolacicNiz.indexOf("!") ||
kolacicNiz.indexOf("$") || kolacicNiz.indexOf("%") ||
kolacicNiz.indexOf("&"))
{
var porcelan=kolacicNiz.replace("#", "");
var plastic=porcelan.replace("!", "");
var wooden=plastic.replace("$", "");
var ragdolls=wooden.replace("%", "");
var other=ragdolls.replace("&", "");
}


}
else 
	document.getElementById('pollres').innerHTML= niz[0]+ "<br/>"
+niz[1]+ "<br/>" +niz[2]+ "<br/>" +niz[3]+ "<br/>" +niz[4]+ "<br/>";
}