function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let rad=document.forms[0].radius;
	let vol=document.forms[0].volume;

	if(rad.value>=0 && rad.value/1){
		let volume=((4/3)*(Math.PI)*(rad.value**3));
		vol.value=volume.toFixed(4);
		rad.value="";
	}
	else{
		vol.value="NaN";
		rad.value="";
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
