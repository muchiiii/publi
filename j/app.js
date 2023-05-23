const Btn = document.querySelectorAll(".wrapper_item")
const Paragraph = document.querySelectorAll(".wrapper_paragraph")
let arr = []

function showParagraph(event){
    Paragraph.classList.add('active');
    if (event.target !== event.currentTarget) {
        Paragraph.classList.remove('active');
    }
}

Btn.addEventListener('click', () =>{
    showParagraph()
})


