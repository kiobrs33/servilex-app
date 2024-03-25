export const addSpaceText = (textValue = "") => {
  let newText = "";

  for (let index = 0; index < textValue.length; index++) {
    const elem = textValue[index];
    let iter = index + 1;
    if (iter % 4 === 0) {
      newText = newText + elem + " ";
    } else {
      newText += elem;
    }
  }

  return newText;
};
