function main() {
    const n = parseInt(readLine(), 10);
    var decNum = dec2bin(n)
    
}
dec2bin = (dec) => {
    return (dec >>> 0).toString(2);
}
