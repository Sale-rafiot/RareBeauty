if (!localStorage.getItem('panier')) {
    localStorage.setItem('panier', JSON.stringify([]));
  }
  document.addEventListener('click', e => {
    const bouton = e.target.closest('.bouton-achat');
    if (!bouton) return;                   
    const carte = bouton.closest('.produit-carte');
    const nom   = carte.querySelector('h2').textContent;
    const prix  = parseFloat(bouton.dataset.prix);
    const img   = carte.querySelector('img').src;
  
    ajouterAuPanier(nom, prix, img, bouton);
  });
  
  function ajouterAuPanier(nom, prix, image, bouton) {
    const panier = JSON.parse(localStorage.getItem('panier')) || [];
    const exist  = panier.find(p => p.nom === nom);
  
    exist ? exist.quantite++ : panier.push({ nom, prix, image, quantite: 1 });
    localStorage.setItem('panier', JSON.stringify(panier));
    
    const ancienTexte = bouton.textContent;
    bouton.textContent = 'AJOUTÉ ✔';
    setTimeout(() => { bouton.textContent = ancienTexte; }, 1200);
  }
  