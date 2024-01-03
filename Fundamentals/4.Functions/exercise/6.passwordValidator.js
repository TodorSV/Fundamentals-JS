function paswordValidator(password) {
    /* 
    *Write a function that checks if a given password is valid. Password validations are:
    *	The length should be 6 - 10 characters (inclusive)
    *	It should consist only of letters and digits
    *	It should have at least 2 digits 
    *If a password is a valid print: "Password is valid".
    *If it is NOT valid, for every unfulfilled rule print a message:
    *	"Password must be between 6 and 10 characters"
    *	"Password must consist only of letters and digits"
    *	"Password must have at least 2 digits"
    */


    if (hasTwoDigits(password) == true) {
        if (charactersInPassword(password) == true) {
            if (passwordLength(password) == true) {
                console.log("Password is valid")
            }
        }
    }

    if (passwordLength(password) == false) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (charactersInPassword(password) == false) {
        console.log("Password must consist only of letters and digits");
    }
    if (hasTwoDigits(password) == false) {
        console.log("Password must have at least 2 digits");
    }
    function charactersInPassword(password) {
        let charCode;
        for (let i = 0; i < password.length; i++) {
            charCode = password.charCodeAt(i);
            if (charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
                if (i == password.length - 1) {
                    return true;
                }
            } else {
                return false;
            }
        }
    }

    function hasTwoDigits(password) {
        let isValid = false;
        let charCode = 0;
        let numCounter = 0;
        for (let i = 0; i < password.length; i++) {
            charCode = password.charCodeAt(i);
            if (charCode >= 48 && charCode <= 57) {
                numCounter++;
            }
        }
        if (numCounter >= 2) {
            return isValid = true;
        } else {
            return isValid = false;
        }
    }

    function passwordLength(password) {
        let isValid = false;
        if (password.length >= 6 && password.length <= 10) {
            return isValid = true;
        } else {
            return isValid = false;
        }
    }

}



paswordValidator('Pa$s$')