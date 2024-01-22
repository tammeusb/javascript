const button = document.querySelector("button");

        function hello() {
            const name = prompt("Who are you?");
            const greeting = document.querySelector("#greeting");
            if (name == "Brock") {
                greeting.textContent = `Hello ${name}, you are cool!`;
                document.getElementById("cool").innerHTML = '<a href="https://www.youtube.com" target="_blank">Check it out!</a>';
            }
            else if (name == "Bella") {
                greeting.textContent = `Hello ${name}. You are cool too, I guess.`;
                document.getElementById("cool").innerHTML = '<img src="./images/apple.jpg">';
            } 
            else {
                greeting.textContent = `Hello ${name}, you are O.K.`; 
                document.getElementById("cool").innerHTML = "";
            }
        }

button.addEventListener("click", hello); //this is a note