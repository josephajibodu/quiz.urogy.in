export function promiseTimeout(milliseconds: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Timeout finished!');
        }, milliseconds);
    });
}