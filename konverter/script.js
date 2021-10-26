function Konversi (){

	var angka = document.getElementById('angka').value;
	var hasil;

	if(angka <= 40){
		alert('Hasil konversi adalah E');
	} else if (angka <= 55){
		alert('Hasil konversi adalah D');
	}else if (angka <= 60){
		alert('Hasil konversi adalah C');
	}else if (angka <= 65){
		alert('Hasil konversi adalah BC');
	}else if (angka <= 70){
		alert('Hasil konversi adalah B');
	}else if (angka <= 80){
		alert('Hasil konversi adalah AB');
	}else if (angka <= 100){
		alert('Hasil konversi adalah A');
	}else if (angka < 0){
		alert('Masukkan Angka antara 0 dan 100');
	}else{
		alert('Masukkan Angka antara 0 dan 100');
	}
}