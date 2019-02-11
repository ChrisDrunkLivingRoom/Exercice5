import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesLettres - contient l'ensemble des lettre à animer
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    //elementParent parent
    constructor(lesLettres, elementParent, fonction) {
        this.lesLettres = lesLettres
        this.elmParent = elementParent
        this.AnimLettre(this.lesLettres)
        this.fonction = fonction
    }

    AnimLettre(){
        let elementMot = document.createElement('div'); //create div
        elementMot.classList.add("mot"); //add class to it
        this.elmParent.appendChild(elementMot);//add it to header

        console.log(`les lettres = ${this.lesLettres}`);
        for(let lettre of this.lesLettres){
            let nvlLettre = document.createElement('div');
            nvlLettre.innerHTML = lettre;
            elementMot.appendChild(nvlLettre);
        }
    }

}