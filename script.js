function startExperience() {
    const name = document.getElementById('inputName').value;
    const nickname = document.getElementById('inputNickName').value;

    if (name.trim() === "" || nickname.trim() === "") {
        alert("Misa ơi, em nhập thiếu thông tin rồi kìa! ❤️");
        return;
    }

    // PHÁT NHẠC nhac.mp3
    const audio = document.getElementById("myAudio");
    audio.play().catch(e => console.log("Lỗi nhạc: ", e));

    document.getElementById('login-page').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('login-page').style.display = 'none';
        const wishPage = document.getElementById('wish-page');
        wishPage.style.display = 'block';
    }, 500);

    document.getElementById('displayName').innerText = name;
    document.getElementById('displayNickName').innerText = `~ Công chúa ${nickname} ~`;
    
    const wish = `Gửi <b>${nickname}</b> của anh! <br><br> 
    Kể từ ngày <b>25/06/2025</b> - cái ngày mà định mệnh cho anh được gặp em, thế giới của anh đã hoàn toàn thay đổi. Anh biết thời gian mình bên nhau chưa quá dài, nhưng tình cảm anh dành cho em thì đã sâu đậm đến mức anh muốn coi em là một mảnh ghép không thể thiếu trong gia đình mình. <br><br>
    Anh thương em nhiều lắm... Thương vì em đã chọn ở lại bên anh cả những khi anh khó khăn nhất, thương vì em đã hy sinh và bao dung cho anh thật nhiều. Vì em, anh có thể làm tất cả. <br><br>
    Valentine này, anh chưa có những món quà xa xỉ để tặng em, nhưng anh hứa bằng tất cả sự tự trọng của một người đàn ông: Sau này khi anh thành công, anh sẽ bù đắp cho em gấp nhiều lần, sẽ tặng em những thứ tốt nhất và đưa em đi chơi khắp mọi nơi. <br><br>
    Cảm ơn em đã chịu khổ cùng anh. Mãi yêu em, Misa của anh! ❤️🎀`;
    
    document.getElementById('personalWish').innerHTML = wish;
}

// TRÁI TIM BAY
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const hearts = [];

class Heart {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 15 + 10;
        this.speedY = Math.random() * 1.5 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
    }
    update() {
        this.y -= this.speedY;
        if (this.y < -this.size) this.reset();
    }
    draw() {
        ctx.fillStyle = `rgba(255, 105, 180, ${this.opacity})`;
        ctx.font = `${this.size}px Arial`;
        ctx.fillText('💖', this.x, this.y);
    }
}

function init() { for (let i = 0; i < 40; i++) { hearts.push(new Heart()); } }
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => { heart.update(); heart.draw(); });
    requestAnimationFrame(animate);
}
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
init();
animate();