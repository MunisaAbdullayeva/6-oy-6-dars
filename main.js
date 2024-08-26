let wrapper = document.querySelector("#wrapper")
let job = document.querySelector("#job")
let span= document.querySelectorAll("p span")
let btn = document.querySelector("button")
let username = document.querySelector("#username")
let img = document.querySelector("img")
console.log(img)
console.log(span)
fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.users);

        btn.addEventListener("click", () => {
            let randomuser = Math.ceil(Math.random() * data.users.length);
            let user = data.users[randomuser - 1];
            console.log(user);

            img.src = user.image
            username.textContent = user.firstName + " " + user.lastName;
            job.textContent = user.company.title;
            span.textContent = user.address;
        });
    });
