const app = new Vue({
    el: '#app',
    data: {
        lists: []
    },
    methods: {
        addList() {
            const newList = {
                name: '',
                status: 'creating',
                cards: []
            }
            this.lists.push(newList)
        },
        saveList(list) {
            list.status = 'saved';
            console.log('lista guardada');

        },
        removeList(index) {
            this.lists.splice(index, 1)
        },
        addCard(list) {

            const plantillas = document.getElementsByClassName('plantilla');

            if (plantillas.length) {
                for (let i = 0; i < plantillas.length; i++) {
                    const inputTag = plantillas[i].getElementsByTagName('input');
                    for (let i = 0; i < inputTag.length; i++) {
                        inputTag[i].readOnly = true;
                        inputTag[i].autofocus = false;
                    }
                }
            }
            const newCard = {
                title: ''
            }
            list.cards.push(newCard);
            window.setTimeout(function () {
                if (plantillas.length) {
                    for (let i = 0; i < plantillas.length; i++) {
                        const cards = plantillas[i].getElementsByTagName('input');
                        console.log(cards[cards.length - 1]);
                        cards[cards.length - 1].focus();
                    }
                }
            }, 1);



            //alert(this.lists[0].cards[0].title);
        },
        showEdit(list, card) {

            const ventana = document.getElementsByClassName('plantilla')[list].getElementsByClassName('edit')[card];
            ventana.classList.toggle('show');


        },
        hideEdit(list, card) {
            window.setTimeout(function () {
                try{
                    const ventana = document.getElementsByClassName('plantilla')[list].getElementsByClassName('edit')[card];
                ventana.classList.remove('show');
                }catch(e){
                    console.log("la ventana ya habia sido removida" + e);
                }
                
            }, 200);

        },
        removeCard(list, card) {
            this.lists[list].cards.splice(card, 1);
            console.log('se ejeccuta eliminar card')
        },
        editCard(list, card) {
            document.getElementsByClassName('plantilla')[list].getElementsByTagName('input')[card].readOnly = false;
        }

    }
})