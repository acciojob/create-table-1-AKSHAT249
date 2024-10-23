function insert_Row() {
    //Write your code here

	let table = document.getElementById("sampleTable");
	let new_row = `
		<tr>
			<td>New Cell1</td>
			<td>New Cell 2</td>
		</tr>
	`;

	table.innerHTML = new_row + table.innerHTML;
  
}
