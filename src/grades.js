const student = ['jao', 'fabio', 'jaqueline', 'marcia']
const grades = [9, 4, 5, 8]


const medias = student.map(function (item, index) {
    return {
        nome: item,
        nota: grades[index]
    }
})


const result = grades.filter(function (nota) {
    return nota >= 6;
})


console.log(`Os seguintes alunos estão dentro/acima da média: ${result}`)
