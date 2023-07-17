function changeBackgroundColor(color){
  document.body.style.backgroundColor=color;
}

let i=0;

function changeBackgroundColor1(color1,color2){
	i+=1;
	if(i%2==0){
		changeBackgroundColor(color1);
	}
	else{
		changeBackgroundColor(color2);
	}

}
    
