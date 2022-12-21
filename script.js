const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="labelLengthId"]');
const bntGenerator = document.querySelector("#buttonGeneratorId");

const chkLower = document.querySelector("#checkLoweId");
const chkUpper = document.querySelector("#checkUpperId");
const chkNumber = document.querySelector("#checkNumberId");
const chkSymbols = document.querySelector("#checkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

infoLength.innerHTML = lenInput.value;
lenInput.addEventListener("change", () =>{
    infoLength.innerHTML = lenInput.value;
})

bntGenerator.addEventListener("click", () => {
    generatePassword(
      chkNumber.checked,
      chkSymbols.checked,
      chkLower.checked,
      chkUpper.checked,
      lenInput.value
    );
});

const generatePassword = (
    hasNumbers,
    hasSybols,
    hasLowercase,
    hasUppercase,
    length
) => {
    const newArray = [
        ...(hasNumbers ? numbers: []),
        ...(hasSybols ? symbols: []),
        ...(hasLowercase ? LowercaseCaracters : []),
        ...(hasUppercase ? UppercaseCaracters : [])
    ]

    if (newArray.length === 0) return;
    
    let password = "";

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
    }

    passInput.value = password;
}