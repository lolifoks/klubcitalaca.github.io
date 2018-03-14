 

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
	
	var kontakt = document.getElementsByName("chbKontakt");
	
	var kontaktIzbor = "";
	
	for(var i =0; i<kontakt.length; i++){
		
		if(kontakt[i].checked){
		kontaktIzbor += kontakt[i].value + "";
		}
		
	}
    
	if(kontaktIzbor == ""){
		
		greske.push("Izaberite način kontakta!");
	}
	else{
		
		podaci.push("Način kontakta: "+kontaktIzbor);
	}
	
	if(kontaktIzbor == "Telefon"){
		
		var telefon = document.querySelector("#tbTelefon");
		var regTelefon = /^06[0123456789]\/[0-9]{6,7}$/;
		
		if(!regTelefon.test(telefon.value)){
			
			greske.push("Neispravan format mobilnog telefona!");
		}
		
		else{
			
			podaci.push("Telefon: " + telefon.value);
		}
	}
  
    greskeLista="<ol>";
   
              
              for(var i=0; i<greske.length; i++){
                 greskeLista+="<li>"+greske[i]+"</li> ";
              }
         		

	
	for(var i=0; i<podaci.length; i++){
                 greskeLista+="<li>"+podaci[i]+"</li> ";
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

/*JSON objekt citati*/

  $(document).ready(function() {
    colorNum = 1; 
    var quotes = [{
      author: "Stendal",
      quote: "Dobra knjiga je u mom životu događaj."
    }, {
      author: "Margaret Atvud", 
      quote: "Reč, pa reč, pa reč - to je moć. "
    }, {
      author: "Ursula K. Le Guin", 
      quote: "Čitamo da bi smo saznali ko smo. Šta  drugi ljudi, izmišljeni ili stvarni, rade, razmišljaju i osećaju - to je suštinski pokazatelj ko smo mi sami i šta možemo postati. " 
    }, {
      author: "J.K. Rouling", 
      quote: "Ako ne voliš da čitaš samo nisi pronašao pravu knjigu. "
    }, { 
      author: "Vilijam Nikolson", 
      quote:"Čitamo jer tako znamo da nismo sami."
    }, {
      author: " Stiven King", 
      quote: "Knjige su jedinstvena, prenosiva magija."
    }, {
      author: "Čarls Vilijam Eliot", 
      quote: "Knjige su najtiši i najodaniji prijatelji, one su najdostupniji i najmudriniji savetnici i najstrpljiviji učitelji. "
    }, {
      author: "Marsel Prust", 
      quote: "Čitanje je čudo komunikacije čak i u samom središtu samoće."
    }
	
	];
    function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
    function changeColor(){
        var colors = ['#16a085', '#27ae60', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', "#BDBB99", "#77B1A9", "#73A857"];
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
    $("#next_quote").on("click", function(){
 
    obtainQuote(); 
    changeColor(); 
    colorNum++; 
     
    });
  });
  

  
