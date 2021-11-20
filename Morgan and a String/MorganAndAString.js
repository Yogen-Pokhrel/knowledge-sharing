function* morgan(a, b) {
    a += "z";
    b += "z";
    const l = a.length+b.length-2;
    for (var i=0; i<l;i++) {
        if (a < b) {
            yield a[0]
            a = a.slice(1)
        } else {
            yield b[0]
            b = b.slice(1)
        }
    }
}

function morganAndString(a, b) {
    return Array.from(morgan(a, b)).join('')
}

