let acc = document.getElementsByClassName('title_faq');


for (i=0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        panel.classList.toggle("text_hidden");
        var itemClass = this.className;
        this.classList.toggle("strong");
    })
}

