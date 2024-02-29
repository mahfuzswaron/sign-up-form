const form = document.getElementById("form");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = form.name;
    const email = form.email;
    const password = form.password;

    if (password.value.length < 8) {
        alert("password must contain at leas 8 characters");
        return 
    }


    // console.log(`Name: ${fullName.value}, Email: ${email.value}, Password: ${password.value}`);

    alert(`Sign up successfull! Name: ${fullName.value}, Email: ${email.value}, Password: ${password.value}`);

})

