const form = document.getElementById("form");



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const dateOfBirth = form.date_of_birth.value;
    const phone = form.phone.value;
    const gender = form.gender.value;

    const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    if (emailPattern.test(email) === false) {
        alert("Enter a valid email address");
        return;
    }

    // const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    // const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z]).{8,15}$/;

    const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z]).{8,15}$/;

    if (!passPattern.test(password)) {
        console.log("incorrect", password)
        alert("Your password should contain at least 8 characters, 1 digit, 1 special character, mix of uppercase and lowercase letters");
        return;
    }

    const user = {};

    user.fullName = fullName;
    user.email = email;
    user.phone = phone;
    user.dateOfBirth = dateOfBirth;
    user.gender = gender;
    user.password = password;

    console.log("sign up completed!");
    console.log(user);
})

