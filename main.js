// console.log("working")
let bodyElement = document.querySelector("body")

let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let randNum = Math.round(Math.random())
        this.state = randNum

        console.log(this.state)
        console.log(randNum)
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return ("Heads! ")
        } else {
            return ("Tails! ")

        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.src = "https://images-na.ssl-images-amazon.com/images/I/51xs7F%2BtP5L._AC_.jpg"
        } else {
            image.src = "https://m.media-amazon.com/images/I/51NyMaKLydL._SL500_.jpg"
        }
    // Added this to make the coins smaller and easier to see.  Help from 3W Schools .
        if (image && image.style) {
            image.style.height = "90px";
            image.style.width = "auto";
        }
        return image;
    },
};

// With help from watching Pete with Andre

function display20Flips() {
    for (let index = 0; index < 20; index = index + 1) {
        coin.flip()
        coin.toString()
        bodyElement.append(coin.toString())
    }
}
function display20Images() {
    for (let index = 1; index < 20; index = index + 1) {
        coin.flip()
        coin.toHTML()
        bodyElement.append(coin.toHTML())
    }
}

display20Flips()

display20Images()

coin.flip()

bodyElement.append(coin.toHTML())

console.log(coin)

coin.flip()

console.log(coin)

console.log(coin.toString())

console.log(coin.toHTML())

