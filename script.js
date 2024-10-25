// Função para converter números em letras
function numeroParaPalavra(num) {
    const palavras = [
        "0", "1", "2", "3", "4", "5",
        "6", "7", "8", "9", "10", "11", "12",
        "13", "14", "15", "16", "17",
        "18", "19", "20"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Matemática', 'Ciências', 'História', 'Geografia', 'Português'],
        datasets: [{
            label: 'Alunos',
            data: [18, 10, 20, 10, 12], // Números originais
            backgroundColor: [
                'rgba(100, 0, 255, 0.2)', // Vermelho
                'rgba(100, 0, 255, 0.2)', // Azul
                'rgba(100, 0, 255, 0.2)', // Amarelo
                'rgba(100, 0, 255, 0.2)', // Verde-água
                'rgba(100, 0, 255, 0.2)' // Roxo
            ],
            borderColor: [
                'rgba(100, 0, 255, 1)', // Vermelho
                'rgba(100, 0, 255, 1)', // Azul
                'rgba(100, 0, 255, 1)', // Amarelo
                'rgba(100, 0, 255, 1)', // Verde-água
                'rgba(100, 0, 255, 1)' // Roxo
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#be7abb' // Cor vermelha para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: 'red', // Cor do texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#be7abb' // Cor vermelha para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Diciplinas',
                    color: '#be7abb'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#A020F0', // Cor vermelha para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Alunos',
                    color: '#be7abb'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});
