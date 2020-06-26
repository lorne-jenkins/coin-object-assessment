let coin = {
    state: 0,
    flip: function () {
        return this.state = Math.floor(Math.random() * 2);
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        let h2Element = document.createElement('h2')
        if (this.state) {
            h2Element.innerHTML = 'Heads'
            document.body.appendChild(h2Element)
            return "Heads"
        } else {
            h2Element.innerHTML = 'Tails'
            document.body.appendChild(h2Element)
            return "Tails"
        }

    },
    toHTML: function () {
        let image = document.createElement('img');
        image.setAttribute("width", "152");
        image.setAttribute("height", "114");
        image.setAttribute("alt", "Susan B in the house");

        if (this.state) {
            image.setAttribute("src", "./images/SB-heads.jpg")
        } else {
            image.setAttribute("src", "./images/SB-tails.jpg")
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        document.body.appendChild(image);
        return image;
    }
};
function display20Flips() {
    for (let index = 1 ; index <= 20; index++) {
        coin.flip();
        coin.toString()
    }
    return "Text Loop Completed"
}
function display20Images() {
    for (let index = 1 ; index <= 20; index++) {
        coin.flip();
        coin.toHTML()
    } 
    return "Image Loop Completed"
}