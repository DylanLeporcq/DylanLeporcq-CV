new Chart(document.getElementById("G1"), {
    type: 'doughnut',
    data: {
        labels: ['Word', 'Powerpoint', 'Excel', 'Publisher'],
        datasets: [
            {
                backgroundColor: ["#4a4d83", "#a23b39","#3d5e35","#3a6a62"],
                data: [30,20,36,14]
            }
        ]
    }
});

new Chart(document.getElementById("G2"), {
    type: 'doughnut',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Php'],
        datasets: [
            {
                backgroundColor: ["#598345", "#79a4bf","#a48452","#66546a"],
                data: [25,35,25,15]
            }
        ]
    }
});

new Chart(document.getElementById("G3"), {
    type: 'doughnut',
    data: {
        labels: ['Français', 'Anglais', 'Allemand'],
        datasets: [
            {
                backgroundColor: ["#7172a1", "#a24e48","#c6b05a"],
                data: [59.5,40,0.5]
            }
        ]
    },
});

new Chart(document.getElementById("G4"), {
    type: 'doughnut',
    data: {
        labels: ['Acoustique', 'Electrique'],
        datasets: [
            {
                backgroundColor: ["#b99855", "#5c595c"],
                data: [60,40]
            }
        ]
    },
});

new Chart(document.getElementById("G5"), {
    type: 'doughnut',
    data: {
        labels: ['Dessin', 'Ecriture', 'Jeux-vidéos', 'Musique'],
        datasets: [
            {
                backgroundColor: ["#5cbf98", "#9da2bf","#a47074", "#6da490"],
                data: [20, 36, 10, 34]
            }
        ]
    },
});

new Chart(document.getElementById("G6"), {
    type: 'doughnut',
    data: {
        labels: ['Metal', 'Hard-Rock','Autres styles de rock', 'Rap', 'Divers'],
        datasets: [
            {

                backgroundColor: ["#6e403f", "#994746","#625970","#3c646a", "#817d83"],
                data: [29, 41,17 , 1, 12]
            }
        ]
    },
});