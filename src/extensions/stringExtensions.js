function newLineToaster(inputString) {
    if(inputString.includes("-")) return inputString.replace("-", "\n\n");
    return inputString
}

export { newLineToaster };
