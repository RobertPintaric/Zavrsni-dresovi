
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("open");
}


function showSection(sectionId) {
  const sections = ['pocetna', 'o-nama', 'kontakt', 'svi-proizvodi', 'pitanja'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if(el){
      el.style.display = (id === sectionId) ? 'block' : 'none';
    }
  });

  document.getElementById("nav-menu").classList.remove("open");
}

document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    if(answer.style.display === "block"){
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
