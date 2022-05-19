fetch("https://pokeapi.co/api/v2/pokemon/charmander")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var newImg = document.createElement("img");
        newImg.setAttribute("src", data.sprites.front_default);

        document.querySelector(".container").appendChild(newImg)
    })