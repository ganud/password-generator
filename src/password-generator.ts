import sample from "lodash/sample";

export default function generate_password(
  hasLowercase: boolean,
  hasUppercase: boolean,
  hasNumbers: boolean,
  hasSymbols: boolean,
  length: number
): string {
  let characterpool: string[] = []; // Starting ring of characters, added depending on conditions met
  const NUMBERS = "1234567890".split("");
  const UPPERCASE = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  const LOWERCASE = "qwertyuiopasdfghjklzxcvbnm".split("");
  const SYMBOLS = "!@#$%^&*".split("");

  // Create the pool of character to select from
  if (hasNumbers) {
    characterpool = characterpool.concat(NUMBERS);
  }
  if (hasUppercase) {
    characterpool = characterpool.concat(UPPERCASE);
  }
  if (hasLowercase) {
    characterpool = characterpool.concat(LOWERCASE);
  }
  if (hasSymbols) {
    characterpool = characterpool.concat(SYMBOLS);
  }

  // Create password from the pool
  let password = [];
  for (let i = 0; i < length; i++) {
    password.push(sample(characterpool));
  }

  return password.join("");
}
