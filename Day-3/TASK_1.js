function simulateApiCall(data, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) { // 90% chance to resolve
                resolve(`Success: Received data "${data}"`);
            } else { // 10% chance to reject
                reject(`Error: Failed to fetch data "${data}"`);
            }
        }, delay);
    });
}

simulateApiCall("XYZ", 2000)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });
