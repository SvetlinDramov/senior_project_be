function getExampleText() {
    return new Promise((resolve,reject) => {
        resolve("Example text from server");
    });
}

export {
    getExampleText,
}