var button = document.getElementById("button"),
    count = document.getElementById("count"),
    health = document.getElementById("health-counter"),
    picture = document.getElementById('loli')
    health_number = 50,
    points = 1,
    girl_list = ['girl1.png', 'girl2.png', 'girl3.png', 'girl4.png', 'girl5.png', 'girl6.png', 'girl7.png', 'girl8.png', 'girl9.png']
    upgrade_heath = 0,
    schet = 0;
picture.src = "file:///D:/Kirill/PhaserGame/pictures/" + girl_list[getRandomInt(9)]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(picture.src)
button.onclick = function () {
    health.innerText = health.innerText - points;
    if (health.innerText <= 0) {
        picture.src = "file:///D:/Kirill/PhaserGame/pictures/" + girl_list[getRandomInt(9)]
        health_number = health_number * 2;
        health.innerText = parseInt(health.innerText) + health_number;
        points = points + 3;
    }
}