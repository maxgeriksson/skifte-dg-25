
/*
Yes ja, you "hittade" de very hemliga lösenord, this är inte
ment to vara jätte safe, but snusk is bakom detta lösen så
plz inte gå in if du vill take saker public

mvh max
*/

const storedHash = "e8c62aef669b5f79cc473205051252c8"; 

function hashString(str) {
    return CryptoJS.MD5(str).toString();
}

function passcheck() {
    const userInput = document.getElementById('pass1').value; // Get password input
    const userInputHash = hashString(userInput); // Hash the input

    if (userInputHash !== storedHash) {
        alert('Fel lösen, inge snusk för dig. :(');
        return false; // Prevent form submission
    }

    // Store "authorized" in localStorage upon successful login
    localStorage.setItem("authorized", "true");
    alert('Snusk till dig! :D om du klickar vidare dvs.');

    // Redirect to the protected page
    window.location.href = "website.html";
    return false; // Prevent default form submission
}