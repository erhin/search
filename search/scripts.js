var searchInput = document.getElementById('searchInput');
var songDataBase = document.querySelectorAll('.song');
document.addEventListener('keydown',(e)=>{
	for(var i = 0;i<songDataBase.length;i++){
		if(songDataBase[i].outerText.toLowerCase().includes(searchInput.value.toLowerCase())){
			songDataBase[i].classList.add('show');
		}else{
			songDataBase[i].classList.add('hide');
		}
	}
	console.log(searchInput.value.toLowerCase());
}); 