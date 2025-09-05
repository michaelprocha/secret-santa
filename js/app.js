(function () {
	const name = document.getElementById("nome-amigo");
	const btnAdd = document.getElementById("add");
	const btnDraw = document.getElementById("sortear");
	const friendList = document.getElementById("lista-amigos");
	const reset = document.getElementById("reset");
	const result = document.getElementById("lista-sorteio");

	let friends = [];

	function draw(numbers) {
		
		let newDraw = Math.floor(Math.random() * numbers.length);
		// let repeated = false;
		// if (numbers[newDraw] == i) {
		// 	repeated = true;
		// }
		// if (repeated) {
		// 	newDraw = draw(numbers, i);
		// }
		// console.log(newDraw);
		return newDraw;
	}

	btnAdd.addEventListener("click", () => {
		if (name.value) {
			friends.push(name.value);
			name.value = "";

			friendList.textContent = "";
			friends.forEach((friend, i) => {
				if (i == 0) {
					friendList.textContent += `${friend}`;
				} else {
					friendList.textContent += ` - ${friend}`;
				}
			});
		}
	});

	btnDraw.addEventListener("click", () => {
		if (friends.length > 1) {
			let textResult = "";
			let undrawnNumbers = [];
			friends.forEach((element, i) => {
				undrawnNumbers.push(i);
			});
			friends.forEach((element, i, list) => {
				let nForDraw = undrawnNumbers.filter(n => n != i);
				if (nForDraw.length === 0) {
					textResult = "Não foi possível sortear sem repetições.";
					return;
				}
				let drawFriend = draw(nForDraw);
				let nDraw = nForDraw[drawFriend]
				undrawnNumbers.splice(undrawnNumbers.indexOf(nDraw), 1);
				textResult += `${element} -> ${list[nDraw]}<br/>`;
			});
			result.innerHTML = textResult;
		}
	});
})();
