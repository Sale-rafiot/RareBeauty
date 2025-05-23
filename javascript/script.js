document.addEventListener("DOMContentLoaded", function() {
    function changerTeinte(imageId, nouvelleImage, element) {
        
        document.getElementById(imageId).src = nouvelleImage;
        
    
        const teintesContainer = element.parentElement;
        teintesContainer.querySelectorAll('.teinte').forEach(teinte => {
            teinte.classList.remove('active');
        });
        
        
        element.classList.add('active');
    }

    
    document.querySelectorAll('.teinte').forEach(teinte => {
        teinte.addEventListener('click', function() {
            const onclickAttr = this.getAttribute('onclick');
            const params = onclickAttr.match(/'(.*?)'/g).map(p => p.replace(/'/g, ''));
            changerTeinte(params[0], params[1], this);
        });
    });


    document.querySelectorAll('.produit-carte').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});