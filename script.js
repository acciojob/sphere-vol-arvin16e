function volume_sphere() {
    //Write your code here
    let element=document.getElementById("radius");
	if(element.value==Number){
		if(Number(element.value) >=0 ){
			let vol=(4/3)*Math.PI*Number(element.value)**3;
			document.getElementById("volume").value=vol;
		}else{
			document.getElementById("volume").value="NaN";
		}
		
		
	}else{
		document.getElementById("volume").value="NaN";
	}
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
