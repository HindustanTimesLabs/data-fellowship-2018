d3.csv("data/projects.csv", function(error, data){
	if (error) throw error;

	// shuffle it
	data = jz.arr.shuffle(data);

	data.forEach(function(project){

		$(".projects-wrapper").append('<a target="_blank" href="' + project.url + '"><div class="project" style="background-image:url(' + project.image + ')"><div class="project-title">' + project.headline + '</div></div></a>')
		
	});	
	
});