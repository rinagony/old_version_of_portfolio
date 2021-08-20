
(function () {
    function openModal() {

        var modalTrigger = document.getElementsByClassName('licenseOpenImage');

        for (var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function () {
                let images = document.getElementById('imageItemLicense');
                if(typeof(images) != 'undefined' && images != null ) {
                    images.remove();
                }
                var target = this.getAttribute('href').substr(1);
                var modalWindow = document.getElementById(target);
                let modalContainer = document.getElementById('modal__container');
                let attributes = this.getAttribute('data-license');
                var node = document.createElement("img");
                node.src = `img/license/${attributes}.jpg`;
                node.setAttribute('id','imageItemLicense');
                modalContainer.appendChild(node);
                modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
            }
        }
    }

    function closeModal() {
        var closeButton = document.getElementsByClassName('jsModalClose');
        var closeOverlay = document.getElementsByClassName('jsOverlay');

        for (var i = 0; i < closeButton.length; i++) {
            closeButton[i].onclick = function () {
                var modalWindow = this.parentNode.parentNode;

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

        for (var i = 0; i < closeOverlay.length; i++) {
            closeOverlay[i].onclick = function () {
                var modalWindow = this.parentNode;

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

    }

    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(openModal);
    ready(closeModal);
}());