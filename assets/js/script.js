var field = 1;
function vote_fields() {
 
    field++;
    var objTo = document.getElementById('vote_fields')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+field);
	var rdiv = 'removeclass'+field;
    
    //divtest.innerHTML = '<div class="input-group"><div class="input-group mb-2 mr-sm-2"><div class="input-group-prepend"><button class="btn btn-outline-success" onclick="document.getElementById('getFile').click()"><i class='bx bxs-image-add' ></i></button><input type='file' id="getFile" name="" style="display:none"></div><input type="text" class="form-control" name="" placeholder="Ketik Jawaban Vote Kamu Disini"><button class="btn btn-danger" type="button" onclick="remove_education_fields('+ field +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div><div class="clear"></div>';
    divtest.innerHTML ='hello<button class="btn btn-danger" type="button" onclick="remove_vote_fields('+ field +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div><div class="clear"></div>';
    objTo.appendChild(divtest)
}
   function remove_vote_fields(rid) {
	   $('.removeclass'+rid).remove();
   }