// Chon tat ca
var l = document.querySelectorAll('.ace.input-lg.nameStudent_gvbm');
for (i=0; i<l.length; i++){
	l[i].click();
}
/////////////////////////////


// Chon ket qua 1 mon cua tat ca
cell_elem = document.getElementsByTagName('td');
count_cells = cell_elem.length;
count_columns = 29; //co the khac 
id_column = 19; //bat dau tinh tu 0
result = ''
for(i=id_column; i<count_cells; i+= count_columns)
{
	result += cell_elem[i].innerHTML[1];
}
////////////////////////////////

 
// Thay doi ket qua 1 mon cua tat ca dua tren ket qua da co (10 = x)
result = ''; // vi du: '9x23657', 'HTHHTHHCHCTT'
var l = document.querySelectorAll('.ace.input-lg.nameStudent_gvbm'); //chon tat ca
for (i=0; i<l.length; i++){
	l[i].click();
}


select_elem = document.querySelectorAll('select.form-control.bor-radius-4.center');
result = result.replace(/T/g, 'A');
result = result.replace(/H/g, 'B');
result_selects = result.length;
for (var i = result.length - 1; i >= 0; i--) {
	select_elem[i+1].value = result[i]
}



