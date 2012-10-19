$(document).bind("pageinit", function() {

});


/*
var makeActionButtons = function(key, rev) {
	var editButton = $('#targetAlpha').append('<a href="#">Edit Entry</a>').trigger('create');
	editButton.key = key;
	$('#editButton').on('click', editItem);
}*/

var deleteItem = function(key){
}

var editItem = function(key){
}

var loadJSON = function(){
	$('#targetAlpha').empty()
$.ajax({
	"url": "_view/peeps",
	"type": "GET",
	"dataType": "json",
	"success": function(data){
		$.each(data.rows, function(index, people){
			var person = JSON.stringify(people.id.substr(7));
			var job = people.value.job;
			var model = people.value.model;
			var age = people.value.age;
			var rev = people.value.rev;
			var pid = people.id;
			console.log(rev);
			console.log(person);
			console.log(job);
			console.log(model);
			console.log(age);
			var nameLine = ('<div data-role="fieldcontain"  class="itemsListed"><a href="#" value="'+pid+'" data-mini="true" name="name" id="'+pid+'" data-mini="true">'+person+'</a></div>');
			$('#targetAlpha').append(nameLine).attr('data-role', 'button').trigger('create');
			var deleteButton = $('#targetAlpha').append('<a href="#">Remove Entry</a>').trigger('create');
			deleteButton.key = pid;
			deleteButton.on("click", function(){
			var idVal = pid;
			var revVal = rev;

			var person = {
			_id: idVal,
			_rev: revVal
				};
				$.couch.db("asdproject").removeDoc(person, {
					success: function() {
					var ask = confirm("Remove this person");
						if(ask){
							alert("Person removed");
							window.location.reload();	
							}else{
								alert("Person not removed");
}
},

});
			});
			}
		
);

}
});
}
var loadIPs = function(){
	$('#targetAlpha').empty()
$.ajax({
	"url": "_view/ip",
	"type": "GET",
	"dataType": "json",
	"success": function(data){
		$.each(data.rows, function(index, ip){
			var ipname = JSON.stringify(ip.id.substr(3));
			var genre = ip.value.genre;
			var demo = ip.value.demo;
			var gross = ip.value.gross;
			var rev = ip.value.rev;
			console.log(rev);
			console.log(ipname);
			console.log(genre);
			console.log(demo);
			console.log(gross);});
//		console.log(data);
		//var entry = JSON.stringify(data);
		//$('#targetAlpha').append(entry);
	}
});
//console.log("funkytown");
}

var personForm = $('#personForm');
personForm.validate({
	invalidHandler: function(form, validator){
		var html = "";
		//if (pageupdate === true){
			//$('#errorDialog').empty(html);
			//$('#errorDialog ul').html("ul");	
			//var pageupdate = false;
		//}
		//memberFormErrors.click();
		for (var key in validator.submitted) {
			var label = $('label[for^="' + key + '"]').not('[generated]');
			var lineInsert = label.text();
			html = (html += '<li>'+ lineInsert + ' Required Field.</li>');
			$('#errorDialog ul').html(html);
			var pageupdate = true;
	}
	},
	submitHandler: function(){
		if(!data._id){
			var id = ("person:" + name);
			} else { 
			var id = data._id; }
		
		var model = $('#model').val();
		var job = $('#job').val();
		var name = $('#nameField').val();
		
		storer(id, name, model, job, age);
		},
});


$('#JSONIP').click(loadIPs);
$('#JSON').click(loadJSON);
