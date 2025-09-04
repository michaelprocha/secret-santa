(function () {
	const name = document.getElementById("nome-amigo");
	const btnAdd = document.getElementById("add");
	const btnDraw = document.getElementById("sortear");
	const friendList = document.getElementById("lista-amigos");
	const reset = document.getElementById("reset");
	const result = document.getElementById("lista-sorteio");

	let friends = [];
	let drawResult = [];
	let numbers = [];

	function draw() {
		let newResult = parseInt(Math.random() * friends.length);
		let repeated = false;
		numbers.forEach((results) => {
			if (results == newResult) {
				repeated = true;
			}
		});
		if (repeated) {
			newResult = draw();
		}
		return newResult;
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
			friends.forEach(() => {
				let newResult = draw();
				drawResult.push(friends[newResult]);
				numbers.push(newResult);
			});
			result.textContent = "";
			let fullResult = "";
			drawResult.forEach((oldResult, i) => {
				if (i % 2 == 0) {
					fullResult += `${oldResult} -> `;
				} else {
					fullResult += `${oldResult}<br/>`;
				}
				console.log(i % 2);
			});
			if (drawResult.length % 2 != 0) {
				fullResult += `${drawResult[0]}`;
			} else {
				fullResult += `${drawResult[drawResult.length - 1]} -> ${drawResult[0]}`;
			}
			result.innerHTML = fullResult;
			console.log(numbers);
			console.log(drawResult);
		}
	});
})();
