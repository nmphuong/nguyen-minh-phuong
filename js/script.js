$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.__nav-custorm').addClass("bg-sticky");
        } else {
            $('.__nav-custorm').removeClass("bg-sticky");
        }
    });
    var typed = new Typed(".typing", {
        strings: ["Front-end Web Developer", "Back-end Web Developer"],
        typeSpeed: 30,
        backSpeed: 30,
        loop: true
    });
    $("#download-transcripts").click(function() {
        window.open("files/bang-diem-nguyen-minh-phuong.pdf"); 
    });
    // var typed = new Typed(".typing-2", {
    //     strings: ["Front-end Web Developer", "Back-end Web Developer"],
    //     typeSpeed: 30,
    //     backSpeed: 30,
    //     loop: true
    // });
});