var i;
var sErrorLimit=0;
var Word = prompt("Please enter cube's formulas and separated by space.");
document.write("This formulas you entered:"+Word+"<br/>");
var ch = {};
var ch = Word.split(" ");
 for(i=0;i<ch.length;i++){
switch(ch[i]){
case "F":
document.write("<img src=images/front_03.jpg>");
break;
case "F'":
document.write("<img src=images/front_04.jpg>");
break;
case "F2":
document.write("<img src=images/front_05.jpg>");
break;
case "F'2":
document.write("<img src=images/front_06.jpg>");
break;
case "f":
document.write("<img src=images/front_08.jpg>");
break;
case "f'":
document.write("<img src=images/front_09.jpg>");
break;
case "f2":
document.write("<img src=images/front_10.jpg>");
break;
case "f'2":
document.write("<img src=images/front_11.jpg>");
break;
case "R":
document.write("<img src=images/right_02.jpg>");
break;
case "R'":
document.write("<img src=images/right_03.jpg>");
break;
case "R2":
document.write("<img src=images/right_04.jpg>");
break;
case "R'2":
document.write("<img src=images/right_05.jpg>");
break;
case "r":
document.write("<img src=images/right_07.jpg>");
break;
case "r'":
document.write("<img src=images/right_08.jpg>");
break;
case "r2":
document.write("<img src=images/right_09.jpg>");
break;
case "r'2":
document.write("<img src=images/right_10.jpg>");
break;
case "U":
document.write("<img src=images/up_02.jpg>");
break;
case "U'":
document.write("<img src=images/up_03.jpg>");
break;
case "U2":
document.write("<img src=images/up_04.jpg>");
break;
case "U'2":
document.write("<img src=images/up_05.jpg>");
break;
case "u":
document.write("<img src=images/up_06.jpg>");
break;
case "u'":
document.write("<img src=images/up_07.jpg>");
break;
case "u2":
document.write("<img src=images/up_08.jpg>");
break;
case "D":
document.write("<img src=images/down_10.jpg>");
break;
case "D'":
document.write("<img src=images/down_11.jpg>");
break;
case "D2":
document.write("<img src=images/down_12.jpg>");
break;
case "D'2":
document.write("<img src=images/down_13.jpg>");
break;
case "d":
document.write("<img src=images/down_15.jpg>");
break;
case "d'":
document.write("<img src=images/down_16.jpg>");
break;
case "d2":
document.write("<img src=images/down_17.jpg>");
break;
case "d'2":
document.write("<img src=images/down_18.jpg>");
break;
case "B":
document.write("<img src=images/behind_12.jpg>");
break;
case "B'":
document.write("<img src=images/behind_13.jpg>");
break;
case "B2":
document.write("<img src=images/behind_14.jpg>");
break;
case "B'2":
document.write("<img src=images/behind_15.jpg>");
break;
case "b":
document.write("<img src=images/behind_16.jpg>");
break;
case "b'":
document.write("<img src=images/behind_17.jpg>");
break;
case "b2":
document.write("<img src=images/behind_18.jpg>");
break;
case "b'2":
document.write("<img src=images/behind_19.jpg>");
break;
case "L":
document.write("<img src=images/left_11.jpg>");
break;
case "L'":
document.write("<img src=images/left_12.jpg>");
break;
case "L2":
document.write("<img src=images/left_13.jpg>");
break;
case "L'2":
document.write("<img src=images/left_14.jpg>");
break;
case "l":
document.write("<img src=images/left_15.jpg>");
break;
case "l'":
document.write("<img src=images/left_16.jpg>");
break;
case "l2":
document.write("<img src=images/left_17.jpg>");
break;
case "l'2":
document.write("<img src=images/left_18.jpg>");
break;
case "M":
document.write("<img src=images/zuoyoujia_07.jpg>");
break;
case "M'":
document.write("<img src=images/zuoyoujia_08.jpg>");
break;
case "M2":
document.write("<img src=images/zuoyoujia_09.jpg>");
break;
case "M'2":
document.write("<img src=images/zuoyoujia_10.jpg>");
break;
case "S":
document.write("<img src=images/qianhoujia_03.jpg>");
break;
case "S'":
document.write("<img src=images/qianhoujia_04.jpg>");
break;
case "S2":
document.write("<img src=images/qianhoujia_05.jpg>");
break;
case "S'2":
document.write("<img src=images/qianhoujia_06.jpg>");
break;
case "E":
document.write("<img src=images/shangxiajia_11.jpg>");
break;
case "E'":
document.write("<img src=images/shangxiajia_12.jpg>");
break;
case "E2":
document.write("<img src=images/shangxiajia_13.jpg>");
break;
case "E'2":
document.write("<img src=images/shangxiajia_14.jpg>");
break;
case "x":
document.write("<img src=images/X.jpg>");
break;
case "x'":
document.write("<img src=images/X'.jpg>");
break;
case "y":
document.write("<img src=images/Y.jpg>");
break;
case "y'":
document.write("<img src=images/Y'.jpg>");
break;
case "z":
document.write("<img src=images/Z.jpg>");
break;
case "z'":
document.write("<img src=images/Z'.jpg>");
break;
default:
sErrorLimit++;
if(sErrorLimit<=1)
alert("Please enter the correct formulars!");
}
 }
//