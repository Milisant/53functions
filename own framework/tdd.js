function testCase(id) {

	 	var NewDiv = document.createElement("div");

	 	
	 	NewDiv.id="mydiv" + id;
	 	NewDiv.style.height= "300px";
	 	NewDiv.style.width= "300px";
	 	NewDiv.style.border= "5px solid black";
	 	

		document.body.appendChild(NewDiv);
		

		this.id=NewDiv.id;
		this.message= function(msg){
			NewDiv.innerHTML= msg;
		}

}

var assert = {
	fail:0,
	pass:0,
        total:0,
       
	 equals: function(expected,result,newmsg)
	 {

	this.total +=1
       
		if(expected === result) {
			var square = document.createElement('div');
                        square.style.backgroundColor = "green";
                        square.style.width = "300px";
                        square.style.height = "300px";
			square.style.border = "3px solid black";
                        square.innerHTML = newmsg;
         document.body.appendChild(square);
           this.pass +=1;
            
		}
		else {
		var square = document.createElement('div');
                square.style.backgroundColor = "red";
                square.style.width = "300px";
                square.style.height = "300px";
	        square.style.border = "3px solid black";
                square.innerHTML = newmsg;
		document.body.appendChild(square); 
                this.fail +=1;
                 
		}


	}
}
var TestMyCode = { 
	run: function(name,assertTest){
		this.name= name;
		assertTest(assert);
	}
}


function results(text, color) {
var p = document.createElement("p");
p.innerHTML = "Passed tests are " + assert.pass + " out of " + assert.total;
p.style.color = "red";
document.body.appendChild(p);
}


	
	
