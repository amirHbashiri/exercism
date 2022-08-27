const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
export const isPangram = (input) => {
  const inputLowered = input.toLowerCase();
  return alphabet.every((letter) => inputLowered.includes(letter));
};
