(function(){

    console.log('Début du carrousel')
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');

    /********************* VARIABLES CARROUSEL **************/
    let carrousel = document.querySelector(".carrousel");
    let carrousel__x = document.querySelector(".carrousel__x");
    let carrousel__figure = document.querySelector(".carrousel__figure");
    let carrousel__form = document.querySelector(".carrousel__form");
    //console.log(carrousel__form.tagName)

    /******************* VARIABLES GALERIE ********************/
    let galerie = document.querySelector(".galerie");
    let galerie__img = galerie.querySelectorAll("img");

    /******************* POSITIONNEMENT DE L'IMAGE ACTIVE DU CARROUSEL **************/
    let index = 0
    let ancien_index = -1
    let position = 0 // permet d'indexer les images de la galerie et

    /**************** OUVRIR LA BOITE ******************/ 
    boutcarrousel__ouvrir.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
        ajouter_img_dans_carrousel()
    })

    /**************** FERMER LA BOITE ******************/ 
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

    //function

    /**
     * ajouter_img_dans_carrousel
     * ajouter l'ensemble des images de la galerie dans la boite modale carrousel
     */
    function ajouter_img_dans_carrousel(){
        
        for (const elm of galerie__img){
            elm.dataset.index = position
            elm.addEventListener('mousedown', function() {
                index = this.dataset.index
                //afficher_image()
                console.log(index)
            })
            creation_img_carrousel(elm)
            creation_radio_carrousel()
        }
    }

    function creation_img_carrousel(elm){
        let img = document.createElement('img')
            //img.setAttribute('src', elm.getAttribute('src'))
            img.src = elm.src
            img.classList.add('carrousel__img')
            console.log (img.getAttribute('src'))
            carrousel__figure.appendChild(img)
    }

    /**
     * Création d'un radio-bouton
     */
    
    function creation_radio_carrousel(){
        let rad = document.createElement('input')
        console.log(rad.tagName)
        rad.setAttribute('type', 'radio')
        rad.setAttribute('name', 'carrousel__rad')
        rad.classList.add('carrousel__rad')
        rad.dataset.index = position
        position = position + 1
        carrousel__form.appendChild(rad)

        rad.addEventListener('mousedown', function(){
            afficher_image()
        })
    }
    
    function afficher_image(){
        console.log(this.dataset.index)
        index = this.dataset.index
        if (ancien_index != -1){
            //carrousel__figure.children[this.dataset.index].style.opacity = 0
            carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
        }
        //carrousel__figure.children[index].style.opacity = 1
        carrousel__figure.children[index].classList.remove('carrousel__img--activer')
        ancien_index = index
        
    }

})()