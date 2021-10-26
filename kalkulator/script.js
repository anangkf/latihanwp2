function Tambah (){
	var bil1 = document.getElementById('bil1').value
	var bil2 = document.getElementById('bil2').value
	var hasil = document.getElementById('hasil')
	hasil.value = Number(bil1) + Number(bil2);

}

function Kurang (){
	var bil1 = document.getElementById('bil1').value
	var bil2 = document.getElementById('bil2').value
	var hasil = document.getElementById('hasil')
	hasil.value = Number(bil1) - Number(bil2);
}

function Kali (){
	var bil1 = document.getElementById('bil1').value
	var bil2 = document.getElementById('bil2').value
	var hasil = document.getElementById('hasil')
	hasil.value = Number(bil1) * Number(bil2);
}

function Bagi (){
	var bil1 = document.getElementById('bil1').value
	var bil2 = document.getElementById('bil2').value
	var hasil = document.getElementById('hasil')
	hasil.value = Number(bil1) / Number(bil2);
}

function Clear (){
	var bil1 = document.getElementById('bil1')
	var bil2 = document.getElementById('bil2')
	var hasil = document.getElementById('hasil')

	bil1.value ="";
	bil2.value ="";
	hasil.value ="";
}