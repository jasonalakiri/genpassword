
const passwordDisplay = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");

  const passwordLength = document.getElementById("lengthPassword");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");

const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

// Character sets
 const lowerChars = "abcdefghijklmnopqrstuvwxyz";

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {
    let characters = "";
    let password = "";

    const length = Number(passwordLength.value);

    // Check selected options
    if (lowercase.checked) {
        characters += lowerChars;
    }

    if (uppercase.checked) {
        characters += upperChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }

    // Make sure at least one option is selected
    if (characters === "") {
        passwordDisplay.value = "Select an option!";
        return;
    }

    // Validate password length
    if (!Number.isInteger(length) || length < 8 || length > 64) {
        passwordDisplay.value = "Length must be 8-64";
        return;
    }

    // Generate random password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    // Display generated password
    passwordDisplay.value = password;
}

// Button event listener
generateBtn.addEventListener("click", generatePassword);
