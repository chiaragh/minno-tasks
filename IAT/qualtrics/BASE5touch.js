define(['pipAPI', 'https://chiaragh.github.io/repository/IAT/qualtrics/ADD4touch.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
    var posWords = API.shuffle([
	    'Liefde', 'Vrolijk', 'Vriend', 'Plezier', 
            'Vriendschap', 'Vreugde', 'Glimlachen', 'Koesteren', 
	    'Uitstekend', 'Blij', 'Spectaculair', 'Aantrekkelijk', 
            'Opwindend', 'Lachen', 'Verrukkelijk','Fantastisch',
	    'Aangenaam', 'Mooi', 'Prachtig', 'Gelukkig', 'Geweldig', 
            'Vieren', 'Genieten', 'Triomf', 'Succes', 'Slim']);

  var negWords = API.shuffle([
            'Misbruik', 'Verdriet', 'Vergif', 'Verdriet', 
            'Pijn', 'Verachting', 'Mislukking', 'Smerig', 
            'Boos', 'Verafschuwen', 'Verschrikkelijk', 'Negatief', 
            'Lelijk', 'Smerig', 'Vuil', 'Kwaad', 'Stinkend',
            'Verrot', 'Vervelend', 'Rampzalig', 'Afschuwelijk', 'Dom', 
            'Walging', 'Vernederen', 'Egoïstisch', 'Tragisch', 'Hinderlijk', 
            'Haat', 'Kwetsend', 'Misselijkmakend', 'Vies']);
	
	return iatExtension({

		category1 : {
			name : 'Arabische moslims', //Will appear in the data.
			title : {
				media : {word : 'Arabische moslims'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		          {word: 'Mohamed'},
                {word: 'Amir'},
                {word: 'Ali'},
		  {word: 'Youssef'},
            	  {word: 'Hamza'},
            	  {word: 'Omar'},
            	  {word: 'Ibrahim'},
                {word: 'Anas'},
                {word: 'Ayoub'},
		  {word: 'Nassim'}   
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Andere mensen', //Will appear in the data.
			title : {
				media : {word : 'Andere mensen'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		   {word: 'Arthur'},
                {word: 'Noah'},
                {word: 'Lucas'},
		 {word: 'Liam'},
            	  {word: 'Leon'},
            	  {word: 'Jules'},
            	  {word: 'Finn'},
                {word: 'Louis'},
                {word: 'Victor'},
		  {word: 'Lewis'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Slecht',
			title : {
				media : {word : 'Slecht'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]},
				{word: negWords[6]},
				{word: negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Goed',
			title : {
				media : {word : 'Goed'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]},
				{word: posWords[6]},
				{word: posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
	
	});
});
