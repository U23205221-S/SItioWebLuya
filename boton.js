if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML.toLowerCase();var last=tt.indexOf("boton.js\"");if(last>0){var first=tt.lastIndexOf("\"",last);if(first>0&&first<last)loc=document.body.innerHTML.substr(first+1,last-first-1);}}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".boton_menu {border-color:black;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#504e4b;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write("a.boton_plain:link, a.boton_plain:visited{text-align:left;background-color:#504e4b;color:#ffffff;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:1px 0px 1px 0px;cursor:hand;display:block;font-size:7pt;font-family:Verdana, Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("a.boton_plain:hover, a.boton_plain:active{background-color:#afafa7;color:#000000;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:1px 0px 1px 0px;cursor:hand;display:block;font-size:7pt;font-family:Verdana, Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xafafa7;
if(typeof(frames)=="undefined"){var frames=3;if(frames>0)animate();}

startMainMenu("",0,0,2,1,0)
mainMenuItem("boton_b1",".gif",15,100,"javascript:;","","  :: Municipalidad ::  ",2,2,"boton_plain");
mainMenuItem("boton_b2",".gif",15,99,"javascript:;","","  :: Geografia ::  ",2,2,"boton_plain");
mainMenuItem("boton_b3",".gif",15,99,"javascript:;","","  :: Turismo ::  ",2,2,"boton_plain");
endMainMenu("",0,0);

startSubmenu("boton_b3","boton_menu",104);
submenuItem("» Sitios Turísticos",loc+"sitiosturisticos.htm","ventana","boton_plain");
submenuItem("» Galeria de Fotos",loc+"galeria.htm","ventana","boton_plain");
endSubmenu("boton_b3");

startSubmenu("boton_b2","boton_menu",99);
submenuItem("» Distritos",loc+"distritos.htm","ventana","boton_plain");
endSubmenu("boton_b2");

startSubmenu("boton_b1","boton_menu",147);
submenuItem("» Autoridades",loc+"autoridades.htm","ventana","boton_plain");
submenuItem("» Obras",loc+"obras.htm","ventana","boton_plain");
submenuItem("» Transparencia Económica",loc+"transparencias.htm","ventana","boton_plain");
endSubmenu("boton_b1");

loc="";
