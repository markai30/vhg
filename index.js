function gtime(t){return t=new Date(t).toString().split(/\s/),"Ngày "+t[2]+" Tháng "+{Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"}[t[1]]+" Năm "+t[3]}function get_item(t,e){return IE?e?window.opener.document.all[t]:document.all[t]:FF?e?window.opener.document.getElementById(t):document.getElementById(t):NS?e?window.opener.document.layers[t]:document.layers[t]:void 0}function show_tooltip(t,e){var o=get_item("tooltip");o||(o=document.createElement("div"),o.setAttribute("id","tooltip"),document.body.appendChild(o)),o.style.zIndex=1e3,o.style.position="absolute",o.innerHTML=""+e,o.style.visibility="visible",t.onmousemove=move_tooltip,t.onmouseout=function(){o.style.visibility="hidden"},t.title=""}function move_tooltip(t){var e=IE?event.clientX+real_body.scrollLeft:t.pageX,o=IE?event.clientY+real_body.scrollTop:t.pageY,i=IE&&!window.opera?real_body.clientWidth-event.clientX-offsetxpoint:window.innerWidth-t.clientX-offsetxpoint-20,n=IE&&!window.opera?real_body.clientHeight-event.clientY-offsetypoint:window.innerHeight-t.clientY-offsetypoint-20,a=0>offsetxpoint?-1*offsetxpoint:-1e3;current_tooltip=get_item("tooltip"),current_tooltip.style.left=i<current_tooltip.offsetWidth?IE?real_body.scrollLeft+event.clientX-current_tooltip.offsetWidth+"px":window.pageXOffset+t.clientX-current_tooltip.offsetWidth+"px":a>e?"5px":e+offsetxpoint+"px",current_tooltip.style.top=n<current_tooltip.offsetHeight?IE?real_body.scrollTop+event.clientY-current_tooltip.offsetHeight-offsetypoint+"px":window.pageYOffset+t.clientY-current_tooltip.offsetHeight-offsetypoint+"px":o+offsetypoint+"px"}function mouse(){$(".baivietlast").mouseover(function(){show_tooltip(this,$(this).next().html())})}function fget(){$(".data_f"+fnum).css("background","url(http://r25.imgfast.net/users/2511/24/83/66/smiles/1476058008.gif) no-repeat 50% 50%"),$.get("/feed/?f="+fnum).done(function(t){var e=$(t),o=e.find("item").length;$(".data_f"+fnum).css("background","none");for(var i=0;o>i;i++){var n=e.find("item:eq("+i+") title").text(),a=e.find("item:eq("+i+") comments").text(),l=e.find("item:eq("+i+") guid").next().text(),s=e.find("item:eq("+i+") description").text().replace(/\n/gi," "),c=e.find("item:eq("+i+") category").text(),r=gtime(e.find("item:eq("+i+") pubDate").text());$(".data_f"+fnum).append('<li class="chbv dataf"><a href="'+a+'" class="baivietlast">'+n+'</a><div class="tooltip_data" style="display:none"><p class="thongtinlast">Thông Tin Bài Viết</p><p class="tieudelast"><span style="color:red">Tiêu đề: </span>'+n+'</p><p class="thoigiangui"><b><span style="color:blue">Người tạo chủ đề: </span>'+l+'</b><br><b><span style="color:brown">Gửi vào: </span>'+r+'</b><br></p><p class="chuyenmuclast"><b><span style="color:blueviolet">Chuyên Mục: </span><span class="tenchuyenmuc">'+c+'</span></b></p><p class="ndf"><span style="color: rgb(229, 0, 255);">Nội dung sơ lượt: </span>'+s+'</p></div><span class="nguoigui">'+l+"</span></li>")}0==o&&$(".data_f"+fnum).append('<div class="nopost"></div>'),mouse()})}var versionMinor=parseFloat(navigator.appVersion),versionMajor=parseInt(versionMinor),IE=document.all&&!window.opera&&7>versionMajor,IE7=document.all&&!window.opera&&versionMajor>=7,OP=window.opera,FF=document.getElementById,NS=document.layers,current_tooltip,offsetxpoint=-60,offsetypoint=20,real_body=document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body,real_body=document.documentElement?document.documentElement:document.body;for(localStorage.length>100&&localStorage.clear(),$(".changeLast.top").change(function(){$(".topp .hide").hide(),$("."+this.value).attr("style","display: inline")}),$(".data_f0 .thoigiangui .timel").each(function(){var t=$(this).text().replace(" - "," ");if(t.indexOf("Today at")>-1)var e=t.replace("Today at","Hôm nay lúc");else if(t.indexOf("Yesterday at")>-1)var e=t.replace("Yesterday at","Hôm qua lúc");else var e=gtime(t);$(this).text(e)}),$(".vtl ul li .nguoigui").each(function(){$(this).text($(this).text().split(" - ")[1])}),$("td.bv").append($(".vtl").find("ul")),$(".lastRight").each(function(){$(this).text($(this).text().split(" - ")[0])}),az=0;az<$(".data_f0 .baivietlast").length;az++){if(az<10)var ti=7;if(az>10&&az<20)var ti=30;if(az>20&&az<50)var ti=0;$("a.baivietlast:eq("+az+")").one("hover",function(){var t=$(this).attr("href"),e=$(this).attr("href").split("-")[0].split("p")[0],o=$(this).closest("li"),i=localStorage.getItem(""+t);if(0==o.find(".thongtinlast2").html().length)if(void 0==i||null==i||i.split("|")[0].length<2)$("#tooltip").css("opacity","0.5"),mouse(),z=$(this).closest(".chbv").find(".nguoigui a").text().replace(" ","+"),o.find(".thongtinlast2").load("/search?&search_author="+z+"&search_where=-1&search_time="+ti+' div[title="'+e+'-topic"] ',function(){var e=o.find(".ttpost").text(),i=o.find(".ttview").text(),n=o.find(".ttchm").text();o.find(".traloi").text(""+e),o.find(".luotxem").text(""+i),o.find(".tenchuyenmuc").text(""+n),$("#tooltip .traloi").html(""+e),$("#tooltip .luotxem").html(""+i),$("#tooltip .tenchuyenmuc").html(""+n);var a=""+n+"|"+e+"|"+i;localStorage.setItem(""+t,""+a),$("#tooltip").animate({opacity:1},1e3)});else{mouse();var n=i,a=n.split("|"),l=a[0],s=a[1],c=a[2];o.find(".traloi").text(""+s),o.find(".luotxem").text(""+c),o.find(".tenchuyenmuc").text(""+l),$("#tooltip .traloi").html(""+s),$("#tooltip .luotxem").html(""+c),$("#tooltip .tenchuyenmuc").html(""+l)}})}$(function(){for(var t=0;t<$('.boxvhg a[href^="/f"]').length;t++){var e=$('.boxvhg a[href^="/f"]:eq('+t+")").attr("href").split("-forum")[0].split("f")[1],o=$('.boxvhg a[href^="/f"]:eq('+t+")").text();$(".changeLast.cmbv").append('<option class="fbt" value="'+e+'">'+o+"</option>"),$("tr.ctbv .bv").append('<ul class="cubv data_f'+e+' hide"></ul>')}$(".changeLast.cmbv").change(function(){fnum=this.value,$(".bv .hide").hide(),$(".data_f"+fnum).show(),fnum>0&&0==$(".data_f"+fnum).find("li").length&&fget()})});
