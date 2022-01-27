function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

async function clipCoupons() {
    var buttonsClicked = 0;
    var loop = true;
    while (loop) {
        var buttons = document.getElementsByClassName('btn red-btn widthHeight');
        for (i = 0; i < buttons.length; i++) {
            let buttonText = buttons[i].innerText.toLowerCase();
            if (buttonText.includes('clip to card')) {
                buttons[i].click();
            }
            buttonsClicked++;
            await delay(randomIntFromInterval(500, 2000));
        }
        if (!clickButton('pageNext')) {
            loop = false;
        }
    }
    alert(`${buttonsClicked} coupon(s) clipped`);
    return buttonsClicked;
};

function clickButton(className) {
    var elements = document.getElementsByClassName(className);
    if (elements.length === 1) {
        elements[0].click();
        return true;
    }
    return false;
};

clipCoupons();