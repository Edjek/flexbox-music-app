import React from 'react';

const Rules = () => {
    return (
        <div className="rules">
            <p>
                Bienvenue à Flexbox Music, un jeu où vous aidez notre disquaire
                à mettre de la musique en écrivant du code CSS !
            </p>
            <p>
                Aidez le disquaire à mettre ce vinyle à droite sur la platine en
                utilisant la propriété <span>justify-content</span>, qui aligne les éléments
                horizontalement et accepte les valeurs suivantes :
            </p>
            <ul>
                <li>
                    <span>flex-start</span> : Les éléments s'alignent au côté
                    gauche du conteneur.
                </li>
                <li>
                    <span>flex-end</span> : Les éléments s'alignent au côté
                    droit du conteneur.
                </li>
                <li>
                    <span>center</span> : Les éléments s'alignent au centre du
                    conteneur.
                </li>
                <li>
                    <span>space-between</span> : Les éléments s'affichent avec
                    un espace égal entre eux.
                </li>
                <li>
                    <span>space-around</span> : Les éléments s'affichent avec un
                    espacement égal à l'entour d'eux.
                </li>
            </ul>
            <p>
                Par exemple, <span>justify-content: flex-end;</span> bougera le vinyle vers
                la droite.
            </p>
        </div>
    );
};

export default Rules;
