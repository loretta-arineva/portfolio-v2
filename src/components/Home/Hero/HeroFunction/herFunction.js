class heroView {
    _hero = document.querySelector("#hero");
    _markup;
    _top;
    _left;
    _sunSize;
    _windowWidth;
    _windowHeight;
    _suns = [];
    _menu = document.querySelector(".menu")

    render(data) {
        // Render the sun
        
        // Window proportion
        this._windowHeight = data.height;
        this._windowWidth = data.width;

        // Sun size
        this._sunSize = this._generateSunSize();
        
        // Sun position
        this._top = this._positionOfSunTop;
        this._left = this._positionOfSunLeft;
        
        // Generate and insert div in document
        this._markup = this._generateMarkup(this._top(), this._left(), this._sunSize);

        this._insertMarkup(this._markup);
        this._suns.push(this._markup);
    }

    openMenu(view) {
        // add overflow hidden to body
        this._menu.addEventListener("click", function() {
            view.render();
        });
    }

    _insertMarkup(markup) {
        this._hero.appendChild(markup);
    }

    _generateSunSize() {
        // Random number from 5 to 40
        const size = Math.trunc((Math.random() * 36) + 5);
        return size;
    }

    _positionOfSunTop() {
        const top = Math.trunc(Math.random() * ((this._windowHeight - 100) - (this._sunSize * 2)) + 100);
        return top;
    }

    _positionOfSunLeft() {
        const left = Math.trunc(Math.random() * (this._windowWidth - this._sunSize  * 4) + this._sunSize * 2);
        return left;
    }

    _generateMarkup(top, left, size) {
        const div = document.createElement("div");
        div.classList.add("sun");
        div.style.top = top + "px";
        div.style.left = left + "px";
        div.style.width = size + "px";
        div.style.height = size + "px";

        return div;
    }

    deleteSun() {
        const remItem = this._suns.shift();
        remItem.remove();
    }
}


export default new heroView();