const student = ['jao', 8, 'fabio', 'jaqueline', 'marcia']
const grades = [9, 4, 5, 8]


const alunos = student.map(function (itemAtual) {
    return {
        nome: itemAtual,
    }
})

const medias = grades.map(function (itemAtual) {
    return {
        nota: itemAtual,
    }
})



const all = [...grades].filter(function(item) {
    return item >= 6;
})

console.log(`Os seguintes alunos estão dentro/acima da média: ${all}`)
