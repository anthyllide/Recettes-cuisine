function load() {

    var recipeData = [

            {
                titre : 'Oeufs sur le plat',
                img : 'images/oeufs-plats.jpg',
                ancre : 'oeufs_plat',
                niveau : 'très facile',
                type : 'plat principal',
                cout : 'bon marché',
                preparation : '1 min',
                cuisson : '1 min',
                avis : 'images/etoile3.png',
                accroche : 'Les oeufs au plat : une valeur sure pour un plat sain et économique. Impossible de râter la recette !!',
                intro : 'La base de la cuisine !! Si la cuisine est un monde obsure pour vous, commencez par apprendre cette recette.',
                ingredients : [
                    '2 oeufs',
                    'beurre',
                    'sel, poivre'
                ],
                recette : 'Ne pas saler ni poivrer avant la cuisson. Laisser fondre du beurre dans la poêle. Saler le beurre' +
                ' lorsqu\'il est mousseux. Casser les oeufs et les faire couler dans le beurre, ainsi le sel ne se retrouvera que dans la' +
                ' croûte, soit en dessous et le blanc ne sera pas caoutchouteux. Disposer les oeufs sur les assiettes chaudes de préférences. ' +
                'Saler et poivrer le jaune. '
            },

            {
                titre : 'Crêpes façon Alex',
                img : 'images/crepes.jpg',
                ancre : 'crepes',
                niveau : 'facile',
                type : 'dessert',
                cout : 'bon marché',
                preparation : '10 min',
                cuisson : '2 min',
                avis : 'images/etoile5.png',
                accroche : 'De délicieuses crêpes à faire en famille ou entre amis... Pas besoin d\'être un "as" du retournement de crêpes !',
                intro : 'Faites des crêpes ! Pour la Chandeleur, pour le goûter, toute l\'année, les crêpes, c\'est un régal ! ',
                ingredients : [
                    '150 g de farine',
                    '1 œuf entier',
                    '20 cl de lait',
                    '2 cuillères à soupe de rhum',
                    '2 cuillères de sucre'
                ],
                recette : 'Mélanger la farine et l’œuf. Ajouter progressivement le lait et enfin le rhum. Laisser reposer' +
                ' si on a le temps (mais peut être utilisée tout de suite). Pour la cuisson, il est préférable d\'utiliser' +
                ' une poêle spéciale pour crêpe. A défaut, vous pouvez vous servir d\'une poêle classique. Dans un bol,' +
                ' versez de l\'huile de tournesol. Munissez vous d\'un papier essuie-tout, plongez-le dans le bol d\'huile' +
                ' et enduisez bien le fond de la poêle d\'huile. Répétez l\'opération après avoir cuit chaque crêpe. Faite' +
                ' chauffer l\'huile à feu vif. Ensuite, avec une louche, versez dans la poêle un peu de pâte. Inclinez' +
                ' légèrement la poële pour étaler la pâte. Puis laissez cuire 1min la première face. Dès qu\'elle est' +
                'cuite, secouez la poële et retournez la crêpe (attention cette manipulation demande un peu d\'entraînement !).' +
                'Laissez cuire encore 1 min.Renouvellez l\'opération pour chaque crêpe.'
            },

            {
                titre : 'Tomates farcies',
                img : 'images/tomates-farcies.jpg',
                ancre : 'tomates_farcies',
                niveau : 'facile',
                type : 'plat principal',
                cout : 'coût moyen',
                preparation : '20 min',
                cuisson : '60 min',
                avis : 'images/etoile5.png',
                accroche : 'Vous pouvez consommer ces tomates farcies telles quelles ou les accompagner de riz parfumé.',
                intro : 'Une recette parfaite pour ne pas décevoir vos convives. Facile à réaliser et en même temps' +
                ' présentable, les tomates farcies est un mets qui trouvera sa place pour la plupart des occasions.',
                ingredients : [
                    '500 g de chair à saucisse',
                    '4 grosses tomates (ou 8 petites)',
                    '3 petits oignons',
                    '2 gousses d\'ail',
                    'thym, persil',
                    'sel et poivre',
                    'beurre'
                ],
                recette : 'Eplucher et hacher les oignons. Eplucher et hacher les gousses d\'ail. Mettre la moitié des' +
                ' oignons dans la chair à saucisse. Ajouter l\'ail, le sel, le poivre et un peu de persil. Couper le haut' +
                ' des tomates et les évider. Poivrer et saler l\'intérieur. Mettre la farce à l\'intérieur et remettre les' +
                'chapeaux. Mettre le reste des oignons dans un plat avec la chair des tomates. Mettre les tomates farcies ' +
                'dans le plat. Parsemez d\'un peu de thym et mette une noisette de beurre sur chaque tomates. Faire cuire' +
                ' au four chaud à 180°C (thermostat 6) pendant 1 heure environ. Servir avec du riz. '
            },

            {
                titre : 'Oeufs mimosa',
                img : 'images/mimosa.jpg',
                ancre : 'oeufs_mimosa',
                niveau : 'facile',
                type : 'entrée',
                cout : 'bon marché',
                preparation : '25 min',
                cuisson : '10 min',
                avis : 'images/etoile4.png',
                accroche : 'Une entrée délicieuse qui séduira les amateurs de mayonnaise et d\'oeufs.',
                intro : 'Vous recherchez une entrée simple à réaliser, bon marché et présentable ? Les oeufs mimosa répondent à ces trois critères.',
                ingredients : [
                    '4 à 8 oeufs (suivant l\'appétit)',
                    '1 petit bol de mayonnaise',
                    'Quelques feuilles de laitue',
                    'Persil haché',
                    'Olives noires pour décorer les oeufs (facultatif)'
                ],
               recette : 'Faire durcir les oeufs 10 mn, puis les mettre dans l\'eau froide. Monter une mayonnaise avec les ingrédients ci-dessus' +
               ' ou utiliser une mayonnaise prête vendue dans le commerce. Le jus de citron s\'ajoute au dernier moment. Les oeufs écalés, les couper' +
               ' dans le sens de la longueur, séparer les blancs des jaunes. Dans une assiette creuse, émietter les jaunes à la fourchette, mélanger la' +
               ' moitié de ces jaunes émiettés avec la mayonnaise et réserver le reste. Remplir les demi-blancs de cette préparation, puis saupoudrer' +
               ' chaque demi-oeuf du reste de jaunes émiettés (ce qui fait le mimosa !!). Disposer les oeufs sur des feuilles de laitue, mettre sur' +
               ' chaque oeuf un peu de persil et une olive noire. Servir frais. '
            },

            {
                titre : 'Couscous oriental',
                img : 'images/couscous.jpg',
                ancre : 'couscous',
                niveau : 'difficile',
                type : 'plat principal',
                cout : 'assez cher',
                preparation : '45min',
                cuisson : '180min',
                avis : 'images/etoile4.png',
                accroche : 'Le couscous est un plat berbère originaire du Maghreb. Il est à base de semoule de blé dur.',
                intro : 'Plat d\'origine berbère, le couscous est très populaire au Maghreb. J\'ai découvert ce plat lors ' +
                'd\'un séjour en Tunisie, où j\'ai appris à le cuisiner.',
                ingredients : [
                    '3 morceaux d\'agneau',
                    '2 cuisses de poulet',
                    '2 navets',
                    '4 courgettes',
                    '4 carottes',
                    '3 tomates',
                    '3 oignons',
                    'pois chiches',
                    'semoule',
                    'beurre',
                    'coriandre',
                    'huile d’olive',
                    'Harrissa'
                ],
                recette :'Dans une grande casserole faites revenir tour à tour les différentes viandes qui composent le couscous royal traditionnel' +
                ' en commençant par l\'agneau. Les viandes doivent être parfaitement dorées. Une fois tous les morceaux colorés, replacez-les ensemble' +
                ' dans la casserole et laissez chauffer à feu doux. Passez à la découpe des légumes, en commençant par les oignons. Pour les ' +
                'courgettes n\'hésitez pas à couper des tronçons assez épais. Les navets doivent être épluchés et coupés en quatre. Coupez également' +
                ' les carottes en 3 morceaux. Enfin, n\'oubliez pas de retirer les parties dures des tomates avant de les couper en quatre. Ajoutez' +
                ' tous les légumes avec la viande dans la casserole afin de les laisser dorer au maximum. Vous pouvez éventuellement ajouter du persil' +
                ' à ce mélange même si cet ingrédient ne fait pas partie de la recette traditionnelle du couscous royal. Ajoutez les pois chiches,' +
                ' le concentré de tomate, la coriandre, le sel et le poivre ainsi que le mélange d\'épices pour couscous et le bouillon. Mélangez bien' +
                ' afin que la viande et les légumes s\'imprègnent bien de toutes les épices du couscous royal et mouillez à hauteur. Mettez le' +
                ' couvercle et laissez mijoter de 2h30 à 3h. Passez ensuite à la préparation de la semoule. Pour cela mettez-la dans un grand saladier' +
                ' et recouvrez-la d’un grand volume d\'eau bouillante. Une fois la semoule gonflée décollez là à l\'aide d\'une fourchette en évitant' +
                ' d\'attendre trop longtemps. Vous pouvez enfin servir votre couscous royal en présentant séparément la semoule, la viande et les' +
                ' légumes ou en réalisant un dressage sur assiette selon votre préférence.'

            },

            {
                titre : 'Tarte à la cerise',
                img : 'images/tarte-cerises.jpg',
                ancre : 'tarte_cerise',
                niveau : 'moyen',
                type : 'dessert',
                cout : 'coût moyen',
                preparation : '30 min',
                cuisson : '45 min',
                avis : 'images/etoile5.png',
                accroche : 'Cette succulente tarte mélange de façon subtile le goût des cerise avec celui des amandes.',
                intro : 'Voilà une recette que j\'adore réaliser l\'été. Cette tarte, en plus d\'être belle à regarder est un vrai délice. ' +
                'A consommer sans modération ! ',
                ingredients : [
                    '700 g de cerises',
                    'pâte brisée',
                    '3 oeufs',
                    '60 g de beurre fondu',
                    '100 g de sucre',
                    '125 g de poudre d\'amandes'
                ],
                recette :'Equeuter et dénoyauter les cerises, les laisser dans un saladier saupoudrées de sucre, pour qu\'elle perdent un peu de' +
                ' leur jus. Etaler la pâte et la disposer sur un moule à tarte beurré et fariné de diamètre 22 cm. Mélanger les oeufs et le sucre ' +
                'au fouet jusqu\'à ce que le mélange blanchisse, y rajouter la poudre d\'amandes et le beurre fondu. Disposer les cerises égoutées' +
                'sur le fond de tarte. Verser la crème par dessus. Faire cuire à 180°C-200°C (thermostat 6-7) durant 45 minutes. '
            }
    ];

    generateMenu();

    generateListRecipe();

    generateDetailRecipe();

    //////////////création du menu////////////////////

    function generateMenu (){

        var menu1 = document.getElementById('menu1');
        var menu2 = document.getElementById('menu2');
        var menu3 = document.getElementById('menu3');

            for(var i = 0; i < recipeData.length; i++){

                var recipes = recipeData[i];

                var liMenu = document.createElement('li');

                var linkMenu = document.createElement('a');

                linkMenu.innerHTML = recipes.titre;

                linkMenu.setAttribute('onclick', 'displayDetail("'+recipes.ancre+'")');

                if (recipes.type == 'entrée'){

                    liMenu.appendChild(linkMenu);

                    ulSousMenu = menu1.getElementsByTagName('ul');

                    ulSousMenu[0].appendChild(liMenu);
                }

                if (recipes.type == 'plat principal') {

                    liMenu.appendChild(linkMenu);

                    ulSousMenu = menu2.getElementsByTagName('ul');

                    ulSousMenu[0].appendChild(liMenu);
                }

                if (recipes.type == 'dessert') {

                    liMenu.appendChild(linkMenu);

                    ulSousMenu = menu3.getElementsByTagName('ul');

                    ulSousMenu[0].appendChild(liMenu);
                }
            }
        }

    ///////Création des blocs listes recettes ///////////////////

    function generateListRecipe(){

        var listRecipes = document.getElementById('liste-recettes');

        for ( var i = 0; i < recipeData.length; i++) {

            var recipes = recipeData[i];

            // création du noeud div de classe "recette"
            var div1 = document.createElement('div');

            div1.setAttribute('class', 'recette');
            div1.setAttribute('onclick', 'displayDetail("'+recipes.ancre+'")');

            listRecipes.appendChild(div1);

            //création du noeud H3
            var h3 = document.createElement('h3');

            h3.innerHTML = recipes.titre;

            div1.appendChild(h3);

            //création du noeud div de classe "recette-ident"
            var div2 = document.createElement('div');

            div2.setAttribute('class', 'recette-ident');

            div1.appendChild(div2);

            //création du noeud "figure"
            var figure = document.createElement('figure');

            //création du noeud 'img'
            var img = document.createElement('img');

            img.src = recipes.img;
            img.alt=recipes.titre;

            figure.appendChild(img);

            div2.appendChild(figure);

            //création du noeud 'ul' de classe spec
            var ul = document.createElement('ul');

            ul.setAttribute('class', 'spec');

            //création des noeuds li

            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');

            li1.innerHTML=recipes.niveau;
            li2.innerHTML=recipes.type;
            li3.innerHTML=recipes.cout;

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);

            div2.appendChild(ul);

            //création du noeud 'div'de classe accroche

            var div3 = document.createElement('div');

            div3.innerHTML=recipes.accroche;

            div1.appendChild(div3);
        }
    }

    ///////Création des blocs détails recettes ///////////////////

    function generateDetailRecipe(){

        var detailRecipes = document.getElementById('detail-recettes');

        for (var i = 0; i< recipeData.length; i++){

            var recipes = recipeData[i];

            // création du noeud div de classe "ficheRecette"
            var div1 = document.createElement('div');

            div1.setAttribute('class', 'ficheRecette');
            div1.id = recipes.ancre;

            div1.style.display = 'none';

            // création du noeud article de classe "introDetailRecette"
            var article1 = document.createElement('article');

            article1.id = 'introDetailRecette';

            // céation du noeud h2
            var h2 = document.createElement('h2');

            h2.innerHTML = recipes.titre;

            article1.appendChild(h2);

            //création noeud p pour accroche
            var p = document.createElement('p');

            p.innerHTML = recipes.intro;

            article1.appendChild(p);

            //création noeud section d'id "resume"
            var section1 = document.createElement('section');

            section1.id = 'resume';

            //création du noeud figure
            var figure = document.createElement('figure');

            var img = document.createElement('img');

            img.src = recipes.img;
            img.alt = recipes.titre;

            figure.appendChild(img);

            section1.appendChild(figure);

            //création du noeud ul
            var ul = document.createElement('ul');

            var li1 = document.createElement('li');
            var li2 = document.createElement('li');
            var li3 = document.createElement('li');
            var li4 = document.createElement('li');
            var li5 = document.createElement('li');

            var span1 = document.createElement('span');
            var span2 = document.createElement('span');
            var span3 = document.createElement('span');
            var span4 = document.createElement('span');
            var span5 = document.createElement('span');

            span1.innerHTML = 'Avis des internautes : ';
            span2.innerHTML = 'Niveau de difficulté : ';
            span3.innerHTML = 'Temps de préparation : ';
            span4.innerHTML = 'Temps de cuisson : ';
            span5.innerHTML = 'Coût : ';

            li1.appendChild(span1);
            li2.appendChild(span2);
            li3.appendChild(span3);
            li4.appendChild(span4);
            li5.appendChild(span5);

            var imgNiveau = document.createElement('img');

            imgNiveau.src = recipes.avis;

            li1.appendChild(imgNiveau);

            var textNiveau = document.createTextNode(recipes.niveau);

            li2.appendChild(textNiveau);

            var textPreparation =  document.createTextNode(recipes.preparation);

            li3.appendChild(textPreparation);

            var textCuisson =  document.createTextNode(recipes.cuisson);

            li4.appendChild(textCuisson);

            var textCout =  document.createTextNode(recipes.cout);

            li5.appendChild(textCout);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);

            section1.appendChild(ul);

            article1.appendChild(section1);

            div1.appendChild(article1);

            detailRecipes.appendChild(div1);

            //création noeud article d'id PrepareRecette
            var article2 = document.createElement('article');

            article2.id = 'PrepareRecette';

            //création noeud section
            var section2 = document.createElement('section')

            //création noeud h3
            var h3Ingredients = document.createElement('h3');

            h3Ingredients.innerHTML = 'Liste des ingrédients';

            section2.appendChild(h3Ingredients);

            //création noeud ul d'id ingredients
            var ulIngredients = document.createElement('ul');

            ulIngredients.id = 'ingredients';

            for (var j=0; j<recipes.ingredients.length; j++){

                var li = document.createElement('li');

                li.innerHTML = recipes.ingredients[j];

                ulIngredients.appendChild(li);
            }

            section2.appendChild(ulIngredients);

            article2.appendChild(section2);

            //création noeud section
            var section3 = document.createElement('section');

            //création noeud h3
            var h3Preparation = document.createElement('h3');

            h3Preparation.innerHTML = 'Préparation de la recette';

            section3.appendChild(h3Preparation);

            //création noeud p
            var p_preparation = document.createElement('p');

            p_preparation.innerHTML = recipes.recette;

            section3.appendChild(p_preparation);

            article2.appendChild(section3);

            div1.appendChild(article2);
        }
    }
}

//Affiche les éléments au clic dans le menu
function displayDetail(id) {

    var list = document.getElementById('liste-recettes');
    var tabRecette = document.getElementsByClassName('ficheRecette');
    var div = document.getElementById(id);
    var li_accueil = document.getElementById('active');

    if (div.style.display == 'none'){

        list.style.display = 'none';
        li_accueil.firstChild.style.color = "#FFFFFF";

        for(var i = 0; i < tabRecette.length; i++){

            if(tabRecette[i].style.display == 'block'){

                tabRecette[i].style.display = 'none';
            }
        }

        div.style.display = 'block';
    }
}

//affiche le popup d'aide
function displayPopup() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

//gère le champ de recherche
function findstr() {

    var div = document.getElementsByClassName('ficheRecette');
    var resultSearch = document.getElementById('resultSearch');
    var list = document.getElementsByClassName('recette');
    var listRecipe = document.getElementById('liste-recettes');
    var listDisplay = [];

    var form = document.forms['search'];
    var searchValue = form.searchStr.value;

    form.searchStr.value = searchValue;

    if (searchValue.indexOf('&') > -1 || ((searchValue.indexOf('&') > -1) && (searchValue.indexOf('=') > -1))) {

        var tabSearch = searchValue.split('&');

        if(tabSearch[0].indexOf('=') > -1 && tabSearch[1].indexOf('=') > -1){

            var tabSearch1 = tabSearch[0].split('=');
            var tabSearch2 = tabSearch[1].split('=');

            doubleSpecification(tabSearch1[1], tabSearch2[1]);

        } else {

            tabSearch = searchValue.split('&');

            doubleSearch(tabSearch[0], tabSearch[1]);

                }

    } else if(searchValue.indexOf('=') > -1) {

        tabSearch = searchValue.split('=');

        if (tabSearch[0] == 'ingredient') {

            ingredientSearch(tabSearch[1]);

        } else if (tabSearch[0] == 'avis') {

            noteSearch(tabSearch[1]);
        }

    } else {

        simpleSearch(searchValue);
    }

        //affiche la liste de recettes au cours d'une recherche simple (un seul terme)
        function simpleSearch(value){

            for (var i = 0; i < div.length; i++) {

                for(var j = 0; j < div.length; j++){

                    if (div[j].style.display == 'block'){

                        div[j].style.display = 'none';
                    }

                    listRecipe.style.display = 'flex';
                }

                resultSearch.style.display = 'none';

                if (div[i].innerHTML.toLowerCase().indexOf(value.toLowerCase()) > -1) {

                    list[i].style.display = 'block';

                } else {

                    list[i].style.display = 'none';
                }
            }
        }

    //affiche la liste de recettes au cours d'une recherche avec deux termes
    function doubleSearch(value1, value2){

        for (var i = 0; i < div.length; i++) {

            for(var j = 0; j < div.length; j++){

                if (div[j].style.display == 'block'){

                    div[j].style.display = 'none';
                }

                listRecipe.style.display = 'flex';
            }

            resultSearch.style.display = 'none';

            if ((div[i].innerHTML.toLowerCase().indexOf(value1.toLowerCase()) > -1) && (div[i].innerHTML.toLowerCase().indexOf(value2.toLowerCase()) > -1) ) {

                list[i].style.display = 'block';

            } else {

                list[i].style.display = 'none';
            }
        }
    }

        //affiche la liste de recettes au cours d'une recherche par avis
        function noteSearch(value){

            for (var i = 0; i < div.length; i++) {

                for(var j = 0; j < div.length; j++){

                    if (div[j].style.display == 'block'){

                        div[j].style.display = 'none';
                    }

                    listRecipe.style.display = 'flex';
                }

                resultSearch.style.display = 'none';

                var noteSrc = div[i].childNodes[0].childNodes[2].childNodes[1].childNodes[0].childNodes[1].src;

                if (noteSrc.indexOf('etoile' + value.toLowerCase()) > -1) {

                    list[i].style.display = 'block';

                } else {

                    list[i].style.display = 'none';
                }
            }
        }

        //affiche la liste de recettes au cours d'une recherche par ingrédient
        function ingredientSearch(value){

            for (var i = 0; i < div.length; i++) {

                for(var j = 0; j < div.length; j++){

                    if (div[j].style.display == 'block'){

                        div[j].style.display = 'none';
                    }

                    listRecipe.style.display = 'flex';
                }

                resultSearch.style.display = 'none';

                var ulIngredients = div[i].childNodes[1].childNodes[0].childNodes[1];

                if (ulIngredients.innerHTML.toLowerCase().indexOf(value.toLowerCase()) > -1) {

                    list[i].style.display = 'block';

                } else {

                    list[i].style.display = 'none';
                }
            }
        }

        function doubleSpecification(value1, value2){

            for (var i = 0; i < div.length; i++) {

                for(var j = 0; j < div.length; j++){

                    if (div[j].style.display == 'block'){

                        div[j].style.display = 'none';
                    }

                    listRecipe.style.display = 'flex';
                }

                resultSearch.style.display = 'none';

                ulIngredients = div[i].childNodes[1].childNodes[0].childNodes[1];
                noteSrc = div[i].childNodes[0].childNodes[2].childNodes[1].childNodes[0].childNodes[1].src;

                if (ulIngredients.innerHTML.toLowerCase().indexOf(value1.toLowerCase()) > -1 && noteSrc.indexOf('etoile' + value2.toLowerCase()) > -1
                || ulIngredients.innerHTML.toLowerCase().indexOf(value2.toLowerCase()) > -1 && noteSrc.indexOf('etoile' + value1.toLowerCase()) > -1) {

                    list[i].style.display = 'block';

                } else {

                    list[i].style.display = 'none';
                }
            }

        }

        //affiche le bloc "erreur" si la recherche n'aboutit pas
        function error() {

            for (var j = 0; j < list.length; j++) {

                if (list[j].style.display == 'none') {

                    listDisplay[j] = 'none';

                } else {

                    listDisplay[j] = 'block';
                }
            }

            return listDisplay;
        }

        if (!error().includes('block')) {

            resultSearch.style.display = 'block';
        }
}

//gère le clic sur le bouton accueil suivant si une recherche est en cours ou pas
function displayAccueil () {

    var listRecipe = document.getElementById('liste-recettes');
    var div = document.getElementsByClassName('ficheRecette');
    var form = document.forms['search'];
    var searchValue = form.searchStr.value;
    var linkActive = document.getElementById('active');

    if (searchValue != "") {

        for(var i = 0; i < div.length; i++){

            if (div[i].style.display == 'block'){

                div[i].style.display = 'none';
            }

        listRecipe.style.display = 'flex';

        }

        findstr();

    } else {

        linkActive.firstChild.href = 'index.html';

    }
}