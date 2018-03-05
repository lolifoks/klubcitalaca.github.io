/*AJAX*/

$(document).ready(function(){
	
	$.ajax({
	type : 'GET',
	url : 'books.json',
	success : function(podaci){
		var ispis = "";
		$.each(podaci, function(index, element){
			
			ispis+="<div class='edName'>";
            ispis+="<a rel='group' href="+element.slika+" class='fancybox'>";
            ispis+="<img src='"+element.slika+"' alt='"+element.alt+"' width='150' height='200'/></a>";
            ispis+="<p> <i>Autor:</i> <b>"+element.autor+"</b><br/>";
            ispis+="<i>Naslov:</i> <b>"+element.naslov+"</b><br/>";
			ispis+="<i>Žanr:</i> <b>"+element.zanr+"</b><br/>";
			ispis+="<i>Godina:</i> <b>"+element.godina+"</b></p></div>";
         
        
			
		});
		document.querySelector("#knjigeIspis").innerHTML = ispis;
	}
	});
	
	$.ajax({
	type : 'GET',
	url : 'zanrovi.json',
	success : function(podaci){
		var ispis = "";
		
		for(var i = 0; i<podaci.length; i++){
			
			ispis+="<option value='"+podaci[i].id+"'>"+podaci[i].naziv+"</option>";
		}
		
		$("#ddlZanr").append(ispis);
	}
	});
	
	document.querySelector("#ddlZanr").addEventListener("change", prikaziJson);
	
	function prikaziJson(){
		
		var zanrId = parseInt($('#ddlZanr').val());
		
		$.ajax({
			type: 'GET',
			url: 'books.json',
			success: function(podaci){
				var ispis = "";

				$.each(podaci, function(index, element){
					if(element.id == zanrId || zanrId == 0) {
						ispis+="<div class='edName'>";
						ispis+="<a rel='group' href="+element.slika+" class='fancybox'>";
						ispis+="<img src='"+element.slika+"' alt='"+element.alt+"' width='150' height='200'/></a>";
						ispis+="<p> <i>Autor:</i> <b>"+element.autor+"</b><br/>";
						ispis+="<i>Naslov:</i> <b>"+element.naslov+"</b><br/>";
						ispis+="<i>Žanr:</i> <b>"+element.zanr+"</b><br/>";
						ispis+="<i>Godina:</i> <b>"+element.godina+"</b></p></div>";
					}
				});

				$('#knjigeIspis').html(ispis);
			}
		});
	
		
	}
	
});

/*scroll*/

$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip(); 
  

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  
    if (this.hash !== "") {

 
      event.preventDefault();

     
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   

        window.location.hash = hash;
      });
    } 
  });
})

/*fancyBox galerija*/


	$(document).ready(function() {
		$(".fancybox").fancybox();
	});


/*provera
function Provera(){
	
	var ime = document.getElementById('firstname');
	var prezime = document.getElementById('lastname');
	var email = document.getElementById('inputEmail');
	var telefon = document.getElementById('Phone');
	var sifra = document.getElementById('inputPassword');
	var pSifra = document.getElementById('inputPasswordConfirm');
	var status = document.getElementById('ddlstatus');
	var pol = document.getElementsByName('gender');
	
	
	var regIme = /^[A-Z]{1}[a-z]{2,10}$/;
	var regPrezime = /^[A-Z]{1}[a-z]{2,10}$/;
	var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var regTelefon = /^[a-z0-9\_]+$/;
	var regLoz = /^[\w]{5,10}$/;
	
	var podaci = new Array();
	var greske = new Array();
	
		
	
	if(ime.value.match(regIme)){
		
		podaci.push(ime);
	}
	
	else{
		
		ime.style.borderColor = "#ff7372";
		greske.push("Ime mora početi velikim slovom!");
	}
	
	if(prezime.value.match(regPrezime)){
		
		podaci.push(prezime);
	}
	
	else{
		
		prezime.style.borderColor = "#ff7372";
		greske.push("Prezime mora početi velikim slovom!");
	}
	
	if(email.value.match(regEmail)){
		
		podaci.push(email);
	}
	
	else{
		
		email.style.borderColor = "#ff7372";
		greske.push("Email nije u dobrom formatu!");
	}
		
	if(telefon.value.match(regTelefon)){
		
		podaci.push(telefon);
	}
	
	else{
		
		telefon.style.borderColor = "#ff7372";
		greske.push("Telefon nije u dobrom formatu!");
	}
	
		
	if(sifra.value.match(regLoz)){
		
		podaci.push(sifra);
	}
	
	else{
		
		sifra.style.borderColor = "#ff7372";
		greske.push("Šifra nije u dobrom formatu!");
	}
	
		if(pSifra.value.match(regLoz)){
		
		podaci.push(pSifra);
	}
	
	else{
		
		pSifra.style.borderColor = "#ff7372";
		greske.push("Šifra nije u dobrom formatu!");
	}
	
	 if(sifra.value!=pSifra.value){
             sifra.style.borderColor="#ff7372";
			 pSifra.style.borderColor="#ff7372";
			 greske.push("Šifre se ne poklapaju!");
           }
	
	    var genderOk=false;
           var rbGender="";
           for(var i=0; i<pol.length; i++){
             if(pol[i].checked){
               genderOk=true;
               rbGender=pol[i].value;
			   podaci.push(rbGender);
               break;
             }
           }
           if(!rbGender){
             greske.push("Izaberite svoj pol!");
           }
		   
		    if(status.selectedIndex==0){
               status.style.borderColor="#ff7372";
           }
		   
		   else {
			   
			   podaci.push.status.selectedIndex.value;
		   }
		   
		  if(podaci.length>0){
			  
			  podaciLista="";
			    for(var i=0; i<podaci.length; i++){
				 var podaciLista = "";
                 podaciLista+=podaci[i]+"\n ";
              }
			  document.getElementById("write").innerHTML+=podaciLista;
		  }
			  
			   if(greske.length>0){
              greskeLista="";
              for(var i=0; i<greske.length; i++){
                 greskeLista+=greske[i]+"\n ";
              }
         			  
		   document.getElementById("errors").innerHTML+=greskeLista;
}

/*kontakt*/


function posalji(){
    
    var regIme = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9})+$/;
    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    var ime = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var komentar = document.querySelector("#comments");
    
    var greskeDiv = document.querySelector("#kontaktGreske");
    
    var podaci = new Array();
	var greske = new Array();
    
    if(komentar.value == ""){
        
       komentar.style.borderColor = "#ff7372";
       greske.push("Polje za komentar je prazno!");
    }
	
	else{
		
		podaci.push("Vaš komentar je poslat!");
	}
  
    
    if(!ime.match(regIme)){
        
        komentar.style.borderColor = "#ff7372";
        greske.push("Ime i prezime nisu u dobrom formatu!");
    }
	else{
		podaci.push("Ime i prezime: "+ime);
	}
    
    
     if(!email.match(regEmail)){
        
        komentar.style.borderColor = "#ff7372";
        greske.push("Email nije u dobrom formatu!");
    }
	else{
		podaci.push("Email: "+email);
	}
    
  
    greskeLista="<ol>";
    if(greske.length!=0){
              
              for(var i=0; i<greske.length; i++){
                 greskeLista+="<li>"+greske[i]+"</li> ";
              }
         		
    
}

else{
	
	for(var i=0; i<podaci.length; i++){
                 greskeLista+="<li>"+podaci[i]+"</li> ";
              }
}
greskeLista+="</ol>";  
greskeDiv.innerHTML=greskeLista;
    
    
    if(greske.length == 0){
        
        var link = 'mailto:marija.lekic.132.13@ict.edu.rs?subject=Message from '
             + ime + " , " + email 
             +'&body='+komentar.value;
    window.location.href = link;
    }
}

/*quote machine*/

  $(document).ready(function() {
    colorNum = 1; 
    var quotes = [{
      author: "Dr. Seuss",
      quote: "Don't cry because it's over, smile because it happened."
    }, {
      author: "Oscar Wilde", 
      quote: "Be yourself; everyone else is already taken."
    }, {
      author: "Friedrich Nietzche", 
      quote: "He who has a why to live can bear any how." 
    }, {
      author: "André Gide", 
      quote: "It is better to be hated for what you are than to be loved for what you are not."
    }, { 
      author: "Albert Einstein", 
      quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."
    }, {
      author: "Dr. Seuss", 
      quote: "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living."
    }, {
      author: "Mark Twain", 
      quote: "Never put off till tomorrow what may be done day after tomorrow just as well."
    }, {
      author: "Douglas Adams", 
      quote: "I love deadlines. I love the whooshing noise they make as they go by."
    }, {
      author: "Theodore Roosevelt", 
      quote: "Do what you can, with what you have, where you are."
    }, {
      author: "Rumi", 
      quote: "Let the beauty of what you love be what you do."
    }, {
      author: "Khalil Gibran", 
      quote: "Your pain is the breaking of the shell that encloses your understanding."
    }, {
      author: "Søren Kierkegaard", 
      quote: "Life is not a problem to be solved, but a reality to be experienced."
    }, {
      author: "Immanuel Kant", 
      quote: "Immaturity is the incapacity to use one's intelligence without the guidance of another."
    }];
    function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
    function changeColor(){
        var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
        if(colorNum == colors.length)
          colorNum = 0; 
      $(".text").css("transition","color 3s ease" );
      $(".text").css("color", colors[colorNum]);
      $(".button").css("transition", "background-color 3s ease"); 
      $(".button").css("background-color", colors[colorNum]); 
      $("body").css("transition", "background-color 3s ease");
      $("body").css("background-color", colors[colorNum]);
    }
     function obtainQuote (){
            var number = getRandomInt(0,quotes.length); $("#quoteHere").html(quotes[number].quote);
 $("#author").html(quotes[number].author); 
    }
    obtainQuote(); 
    $("#clickGen").on("click", function(){
 
    obtainQuote(); 
    changeColor(); 
    colorNum++; 
     
    });
  });