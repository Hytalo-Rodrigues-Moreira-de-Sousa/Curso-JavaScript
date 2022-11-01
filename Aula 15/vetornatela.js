let valores = [1, 7, 8, 2, 4, 3, 5, 9]
valores.sort()
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}

for(let pos in valores){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}