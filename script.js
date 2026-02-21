function generatePassword() {
    var length = document.getElementById("length").value;
    var includeUppercase = document.getElementById("uppercase").checked;
    var includeNumbers = document.getElementById("numbers").checked;
    var includeSymbols = document.getElementById("symbols").checked;

    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    var allChars = lowercaseChars;

    if (includeUppercase) {
        allChars = allChars + uppercaseChars;
    }

    if (includeNumbers) {
        allChars = allChars + numberChars;
    }

    if (includeSymbols) {
        allChars = allChars + symbolChars;
    }

    if (allChars.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    var password = "";

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password = password + allChars[randomIndex];
    }

    document.getElementById("result").value = password;
}

function resetFields() {
    document.getElementById("length").value = 8;
    document.getElementById("uppercase").checked = false;
    document.getElementById("numbers").checked = false;
    document.getElementById("symbols").checked = false;
    document.getElementById("result").value = "";
}