function changeBackgroundColor(color){
  document.body.style.backgroundColor=color;
}

let i=0;

function changeBackgroundColor1(color1,color2){
	i+=1;
	if(i%2==0){
		document.body.style.backgroundColor=color1;
	}
	else{
		document.body.style.backgroundColor=color2;
	}

}
    
