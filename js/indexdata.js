<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDLso8yWn3VfKZAQL5z1wEyFTqtm7uaj_8",
    authDomain: "virtual-destination-a02d1.firebaseapp.com",
    projectId: "virtual-destination-a02d1",
    storageBucket: "virtual-destination-a02d1.appspot.com",
    messagingSenderId: "462449117260",
    appId: "1:462449117260:web:40bc844d8cc33e34fa4ce9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
var bookinglist=[];
function flightbooking(){
    var airlineopt=document.getElementById("airlineopt");
   var from= airlineopt.options[airlineopt.selectedIndex].text;
   var airlineoptto=document.getElementById("airlineoptto");
   var to= airlineoptto.options[airlineoptto.selectedIndex].text;
   var depardate=document.getElementById('departuredate').value;

   var selectcoach=document.getElementById("selectcoach");
   var coach= selectcoach.options[selectcoach.selectedIndex].text;
 

   var airlinecompy=document.getElementById("airlinecompy");
   var aircmp= airlinecompy.options[airlinecompy.selectedIndex].text;

    var adult=document.getElementById('adult_number').value;
    var child=document.getElementById('child_number').value;
    var inft=document.getElementById('infants_number').value;
console.log(adult);

document.getElementById("flightdiv").style.display="block";
document.getElementById("fligttofrm").innerHTML=from+'<i class="la la-arrow-right mx-2"></i>'+to;
document.getElementById('airlincpy').innerHTML=aircmp;
document.getElementById('fligtim').innerHTML="Departure Date:" +depardate;
document.getElementById('coach').innerHTML=coach;
if(adult>0){
    document.getElementById('passengerslist').innerHTML+='<div class="price-box d-flex align-items-center  justify-content-between"><span class="price__from mr-1">Adult</span><span class="price__num">'+adult+'</span></div>';
}
if(child>0){
    document.getElementById('passengerslist').innerHTML+='<div class="price-box d-flex align-items-center  justify-content-between"><span class="price__from mr-1">Child</span><span class="price__num">'+child+'</span></div>';
}
if(inft>0){
    document.getElementById('passengerslist').innerHTML+='<div class="price-box d-flex align-items-center  justify-content-between"><span class="price__from mr-1">infants</span><span class="price__num">'+inft+'</span></div>';
}
var total=parseInt(adult)+ parseInt(child)+ parseInt(inft);
document.getElementById('passengerslist').innerHTML+='<div class="price-box d-flex align-items-center  justify-content-between"><span class="price__num mr-1">Total Passengers</span><span class="price__num">'+total+'</span></div>';
document.getElementById('addhotelbookingdiv').innerHTML='<div class="price-box d-flex align-items-center  justify-content-between"><a class="btn-text"  id="hotel-tab" data-toggle="tab" href="#hotel" role="tab" aria-controls="hotel" aria-selected="false">Add Hotel</a><a href="" class="theme-btn">Book<i class="la la-angle-right"></i></a></div>';


var flightdata=({
    from:from,
    to:to,
    airline:aircmp,
    date:depardate,
    pass:total,
    type:"flight"
})

bookinglist.push(flightdata);
console.log(bookinglist);

}









function bookhotel(){
    // document.getElementById("flightdiv").style.display="block";
    var selecthotel=document.getElementById("hotellist");
    var hotel= selecthotel.options[selecthotel.selectedIndex].text;
    var checkout=document.getElementById('checkoutdate').value;
    var checkin=document.getElementById('checkindate').value;
    var room=document.getElementById('room').value;
    var htadult=document.getElementById('htadult').value;
    var child=document.getElementById('htchild').value;
    var tot=parseInt(htadult)+parseInt(child);

    console.log(bookinglist);
if(bookinglist.length!=0){
    var showdiv= document.getElementById('addhotelbookingdiv');
    showdiv.innerHTML='<hr>';
}else{
    document.getElementById("hotelbookingdiv").style.display="block";
    var showdiv= document.getElementById('hoteldiv');
}



showdiv.innerHTML+='<div class="deal-title d-flex align-items-center">'+
    '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAwFBMVEX///9BQUMREiQAAAA5OTva2tsuLjDS0tKLi4twcHA8PD6CgoPV1dUzMzU+PkE3NzlJSUupqan39/dQUFJpaWrKysqcnJwnJyq4uLjq6uqRkZK9vb1kZGSwsLF4eHnk5OMAABoAABUAAByUlJpbW1zw8PAhISRBQUwfIC8AAA9VVVehoaKGhoeMjZR5eYGCgoopKjhtbnYAAB9bW2ZlZW8+PksYFygXFxs0M0B8fYZNUFk/QU+npq0hJDJwcXmcnKQqCj37AAAJGklEQVR4nO2diXaqOhRAZVRRwDqLE051AsHr8KzP2v//qxcGhQTUe/sQsPfstdoiJ7qySxKSg2ImAwAAAAAAAAAAAAAAAAAAAAB/yKR4I5Cd/GkgXSi9G4Fx908DqaIvsq3QQJNfhD+jzVeeWJ/I6LHyMmx/uSSJtT8KpIsaT0mlsEBdpNjQRooCwq3WmyIqEkXx7eD+VoOiKDGkkbZ4FJDDW28qqLW7S6XQYVE1hTHnjXOTWvutrhQWSJhiC/1gQCADKUP5R5RZ1qolMuOpjtZ07MrjhowCkh1g+VJVaXNlO9C5EUgbmkj5ENjGZXQcs779kiC/d8oPAimjJ/vN5OqllpOF4A/wSuZGIJdQxR/S8R0BXvP2tyjJCzTebgT4t+ArpoTy+FpPvu4P9D1jERsx+95BlkOG0tRQuDQtmfjvX6vPZvHA1VgmAumidDliIj776zeu9efwAH89knggXTj1t09YWEvMNEV3P0VMnm4G0kVXpCSRKqF+w2pYoMBSglihULsTm78XSBcFmS8tJ2VFFIQ8Fiix/LhZbuV5ScYP5cIJ9AKBdNGoNO1zFzdujP37+/9UnYZWw84CeKAQTx2/w8TrJl3KP4foewODgh1KX6DeeV7FomRya3J0cxqf4vk98BrUlELUKCk4p/XHPBs5Mt9Juse1ZGzhERkslfCCOs8+ruS3kJNN7/TFx1X8rlmih6zmTM4lwWuQgnBdk0msLMqscA1gSNazvAfokYSJiYkuY9r2EZPG+eql+lIn37kkdBaF5dtSG4v240q+6ie/EHx7FhJ6jY6UNjG0KJ5c1lViMVO0t8XxZcwuVvnAdB8tWBq+We+bjFYtnJg6saaT9XTrk7W2RUukXdeUNppbLXlKyNdsWpmys6FYOZ2aS4FFYsVXEJNz9oxdRr2MbzpmosV7M9N/t7dYVsmUZV50HlAvIiYtrGsobp+x0lKXPoha7WUktcS8JNWLiNm9zstYcRmOf1Wxd3c21LDFZLS+8hJrLFpDukMlKeY8SUiv2ETLOWgcEhOqmczYO7VJUiaTY8PE3EkvGujTKuYny6OxvVzyJ38naEAPEbvQFFMrVl6+ubQssdxvijUdCikeFd9lB7uPWTmqhU8MdTkltCmyzmif4j6Gj4oSlclo3rzf8syHDx7pHxXx4Z4v+rLaFF9D6zbqR4hZx2h52WWlEt1B8eXF7IFy2ZAFSWAbuYwzfQwRE0SnZwq2WMPtp/Y/QW4md3WzrzhDX9gk2HrjQKteXXQUDnnJUrjYZSjNC0isdRlZncMr86V6IpmPica79Q1dtjSUyxK4vBS9Fte+djeWXLZcucy/JNm7qhsf/dJ1ziTklUsfooSC0nMGQJnqNbPFbFsr+foOKqq5UxKpo1ypCkLPe1TwXf8cx50haFG+9JTA+sb2ay6Acs5SLLYw9hWVvHybYAd8j66wlZi72vg5abcgbDVWry7/uEoR0Yg1LSw/rlBUCOPH1YmMbHwHLHA9/qksYzxisV6d7j0rsx2GHOPJLB/XmGjBxvgWq79ETCII1u1BifvhxMSkCkHQq0SUKOFh8gXwcGJisrWn7P5YvzpkQ0Uz3OvEyN7oYqMqz3lPt/8q2NiUmJhIRsPEcLrYmpLvE2EF806xGP9AjDwDv4zYoyMGYk8HxH64GAweLiAWOSAGYhggFjkg5tb8NWf3cpmgQ66QxTZe4HJF+nrEiHBK1mMhqYBISTCZ8yjlEchqPIinRuy5gBiIgRiIvZiYyOMEL8WwRAni7foyEcYvUiUmxnaLGJxGmrEahxdpYmasgoe5t3RMqUTyHjl18rJg4POXHHZFlPzQdKaGe4PY/wfEQAwDxCIHxEAMA8QiB8RADAPEIucvESNT74F3MwbE+rgYeUPMbDrEhF5O85MLpLilMV5C62ErcKFDhPEFenKpAd87y21CEr1ECSJlQr4AHoZkDoiBGIiBWDrE+AZO8NMGMlGCvx/GE8XJXYOulSd+ykogE6wQJfCPkMhLItyGTHDUgBiIYYBY5IAYiGGAWOSAGIhhgFjkgNgPF2NfU0waV3EqgUxwhSiB54qlBREeY+EEPwcduD1pgPsl7r8AJHNADMRA7MXE7l3eImOhxQKXz9Ix3AfPr97pV75zW5jWVZ68oXgrHSfoe2L37nfTkm6JTUAsakAMxDBALHJADMQwQCxyQAzEMEAsckDse2IJrcdqPeJGgyWSe7HQYmSEyDuWKoUY7qVe4AMZ0Xu3SCBvChla7uGNJVmezJJHTi7OO+n6ePaXKvu+eCBeJOm5txt/C75nLyb4535fdC7OOwRjBAbfaAlc+4qNJ9/gOZtUHwveCylixgm1xad/TWOrlEhjFBdP/6aCicbHToNV4vgGhkkxGzNcct/hAgAAAAAAAAAAAAAAAAAAAKQW7oeSYX4oGfqHAmKvxl0xdYg9cn9eA1dsh37MmbN92LuxweY4MHeXkvujSn9uDvFW7/s4YsPtVh3og8GAVgeMvlcHAxVtvJ1Op3OdmTMMrTLMIcswO+PfhOv727hHbKYPZh+rkcF8jM7G6DAaraZfR+7IMOvWRi9mzSnHHWvTovlvrEdMpYf+B6r7F2M4HKII+m39smLuU1yxgb5fr8+D83rLMNovnWbO5818l+WM9cisMdtue8d8topqvF1MNRhDpQfmwaRn9N5YT9UZrc60+Yye7fd72lT39HplbFdbfWegX4fRamcc9fXQL6ZuN/pmtF2vpqhJ/qrPB1vjOJwzQ+5jdGwyu2ZtPjf72c9hrGLD7ep4+lpt9K3+MdquNqejoa+3S53+1I+G8bE66duDqc/0OvM10pFh19CNs/E194vRw9NqpqumOaJnm+16Q482x+HXWa/tOJM7t1ej5mpam3LzWMVos0mfjvr0Y/P1cdpvvr42xkg/nozdTj/q+mo/Utb70+5QR1K6jmqsj1ZrY2sMcLH1bGhqK9XUz/Mts9Vn5kE9jgwVjYy/Rtv5HDXJNXPe3a7EM1BNdXaYH9XD7DCjD4ehedirU5Pe7Q+micZw83M6PB4P0+F0fth/HgaH/QBtu93leh4bWi+Edg6sTjq0rYdo29o3QDF1cO29qeJmt/87Zx6vDIi9Gv8B2epl3X9fxSoAAAAASUVORK5CYII=" alt="air-line-img">'+
    '<h3 class="deal__title"><a href="">'+hotel+'</a></h3>'+
        '</div>';
        showdiv.innerHTML+=checkin+'<i class="la la-arrow-right mx-2"></i>'+checkout;
        showdiv.innerHTML+='<div class="card-attributes">'+
        '<ul class="d-flex">'+
            '<li class="d-flex" data-toggle="tooltip" data-placement="top" title="Guests"><i class="la la-users"></i><span>'+tot+'</span></li>'+
            '<li class="d-flex align-items-center" data-toggle="tooltip" data-placement="top" title="Rooms"><i class="la la-bed"></i><span>'+room+'</span></li>'+
        '</ul>'+
        '<div class="price-box d-flex align-items-center  justify-content-between" id="carbkbtn"></div></div>';

        document.getElementById('carbkbtn').innerHTML='<a class="btn-text"  id="car-tab" data-toggle="tab" href="#car" role="tab" aria-controls="car" aria-selected="true">Add Car</a><a href="" class="theme-btn">Book<i class="la la-angle-right"></i></a></div>';


var hotelarr=({
    hotel:hotel,
    checkin:checkin,
    checkout:checkout,
    room:room,
    guests:tot,
    type:"hotel"
})

bookinglist.push(hotelarr);
console.log(bookinglist.length);
}












function bookcar(){

    var pickupadd=document.getElementById('pickupadd').value;
    var pickupdate=document.getElementById('pickupdate').value;

    var selectpickuptime=document.getElementById("pickuptime");
    var pickuptime= selectpickuptime.options[selectpickuptime.selectedIndex].text;
    var dropadd=document.getElementById('dropadd').value;
    var dropdate=document.getElementById('dropdate').value;

    var selectdroptime=document.getElementById("droptime");
    var droptime= selectdroptime.options[selectdroptime.selectedIndex].text;
    
    var selectcarmodel=document.getElementById("carmodel");
    var carmodel= selectcarmodel.options[selectcarmodel.selectedIndex].text;



    if(bookinglist.length==2){

        var showdiv= document.getElementById('addhotelbookingdiv');
        document.getElementById('carbkbtn').innerHTML='';
        showdiv.innerHTML+='<hr>';
    }else if(bookinglist.length==1){

        var showdiv= document.getElementById('hoteldiv');
        document.getElementById('carbkbtn').innerHTML='';
        showdiv.innerHTML+='<hr>';
    }else{
        document.getElementById("carbookingdiv").style.display="block";
        var showdiv= document.getElementById('cardiv');
    }



    showdiv.innerHTML+='<div class="deal-title d-flex align-items-center">'+
    '<img src="https://www.iconpacks.net/icons/1/free-car-icon-1057-thumb.png" alt="air-line-img">'+
    '<h3 class="deal__title"><a href="">'+carmodel+'</a></h3>'+'</div>';
    showdiv.innerHTML+= '<h3 class="deal__title" >'+
    '<a href="" class="d-flex align-items-center" id="">'+
    pickupadd+'<i class="la la-arrow-right mx-2"></i>'+dropadd+
    '</a>'+
'</h3>';


showdiv.innerHTML+='<div class="price-box d-flex align-items-center  justify-content-between"><span class="price__from mr-1">Pickup Date & Time</span><span class="">'+pickupdate+' : '+pickuptime+'</span></div>'+
'<div class="price-box d-flex align-items-center  justify-content-between"><span class="price__from mr-1">Drop Date & Time</span><span class="">'+dropdate+' : '+droptime+'</span></div>';
showdiv.innerHTML+='<a class="btn-text"></a><a href="" class="theme-btn">Book<i class="la la-angle-right"></i></a></div>';

var cararr=({
    car:carmodel,
    pickupdate:pickupdate,
    pickupadd:pickupadd,
    pickuptime:pickuptime,
    dropadd:dropadd,
    dropdate:dropdate,
    droptime:droptime,
    type:"car"
})

bookinglist.push(cararr);

console.log(bookinglist);
}