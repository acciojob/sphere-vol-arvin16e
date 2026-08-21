function volume_sphere() {
    //Write your code here
    let element=document.getElementById("radius");
	if(!isNaN(Number(element.value))){
		if(Number(element.value) >=0 ){
			let vol=(4/3)*Math.PI*Number(element.value)**3;
			document.getElementById("volume").value=vol.toFixed(4);
		}else{
			document.getElementById("volume").value="NaN";
		}
		
		
	}else{
		document.getElementById("volume").value="NaN";
	}
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
