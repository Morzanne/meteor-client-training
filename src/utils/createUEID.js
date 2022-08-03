export function createUEID() {
    const x = 176424322;
    const now = new Date();
    return (
        Math.floor(Math.random() * x).toString(36) +
        Math.abs(Math.floor(Math.random() * x) ^ now.getTime()).toString(36)
    );
}
