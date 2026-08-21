function volume_sphere() {
    //Write your code here
    let element=document.getElementById("radius");
	if(element.textcontent==Number){
		if(Number(element.textcontent) >=0 ){
			let vol=(4/3)*Math.PI*Number(element.textcontent)**3;
			document.createElement(
				<p id='output' value="vol"></p>
			);
		}else{
			document.createElement(
				<p id='output1' value="NaN"></p>
			);
		}
		
		
	}else{
		document.createElement(
				<p id='output2' value="NaN"></p>
			);
	}
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
