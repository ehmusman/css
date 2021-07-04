let a = [6, 4, 2, 4, 8]
let b = []
for (i = 0; i <= a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
        let arrElement = 0
        if (a[i] > a[j]) {
            arrElement = a[i]
            a[i] = a[j];
            a[j] = arrElement
        }
    }
}
let newArray = []
console.log(a)