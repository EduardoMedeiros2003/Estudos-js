function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

//Recursiva = Uma função que se chama de volta, dessa forma tem um limite 
recursiva(0);