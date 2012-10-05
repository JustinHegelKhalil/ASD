
/*var loadDefaultData = function(){
	for (var key in json) {
			//var id = Math.floor(Math.random()*10000000000);
			var m = json[key]['date'][0];
			var d = json[key]['date'][1];
			var y = json[key]['date'][2];
			var date = (m+"-"+d+"-"+y);
			var m = m *= 100000;
			var d = d *= 1000;
			var y = y *= 1000000000;
			var name = json[key]['name'][1];
			var model = json[key]['model'][1];
			var job = json[key]['job'][1];
			var mission = json[key]['mission'][1];
			var id = (m += d +=y + name);
			//console.log(d);
			//console.log(json[key]['date'][0]);

			storer(id, name, model, job, mission, date);
			//localStorage.setItem(id, JSON.stringify(json[key]));
		}
}
*/
$(document).bind("pageinit", function() {

});

var loadXML = function() {
	$('#targetAlpha').empty();
	$.ajax({
	url: 'xhr/xml.xml',
	type: 'GET',
	dataType: 'xml',
	success: function(results) {
	    $(results).find("person").each(function() {
		var name = $(this).find('name').text();
		var model = $(this).find('model').text();
		var job = $(this).find('job').text();
		$(''+
		  '<div>'+ 
		  '<li>'+name+'</li>'+
		  '<li>'+model+'</li>'+
		  '<li>'+job+'</li>'+
		  '</div>').appendTo('#targetAlpha');
});
}
});
}
var loadJSON = function(){
	$('#targetAlpha').empty()
$.ajax({
	url: "xhr/json.json",
	type: "GET",
	dataType: "json",
	success: function(response){
		console.log(response);
		var entry = JSON.stringify(response);
		$('#targetAlpha').append(entry);
	}
});
}
var csv;
var outPut = function(){
	console.log(csv);
}
var loadCSV = function() {
	$('#targetAlpha').empty();
    $.ajax({
	url: 'xhr/csv.csv',
	type: 'GET',
	dataType: 'text',
	success: function(data){
	    var line = data.split('\n');
	    for(var i=0, j=line.length; i<j; i++){
		var thing = line[i];
		var items = thing.split(',');
		$('' +
		  '<div>' + 
		  '<li>' + items[0] + '</li>' + 
		  '<li>' + items[1] + '</li>' +
		  '<li>' + items[2] + '</li>' +
		  '</div><br/>' 
		  ).appendTo('#targetAlpha');


	    };
	}
    });
}
































$('#XML').click(loadXML);
$('#JSON').click(loadJSON);
$('#CSV').click(loadCSV);

