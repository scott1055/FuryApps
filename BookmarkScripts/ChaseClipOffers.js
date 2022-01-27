function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function addOffers() {
    var count = 0;
    var loop = true;
    while (loop) {
        loop = false;
        var buttons = document.getElementsByClassName('mds-button--cpo');
        console.log(`Adding ${buttons.length} offers.`);
        for (i = 0; i < buttons.length; i++) {
            var iconType = buttons[i].getAttribute('icon-type');
            if (iconType === 'ico_add_circle') {
                buttons[i].click();
                await delay(2000);
                if (!clickButton('flyout-close')) {
                    alert('Close button not found.');
                    break;
                }
                await delay(2000);
                count++;
                loop = true;
            }
        }
    }
    alert(`${count} offers(s) added`);
    return count;
}

function clickButton(className) {
    var elements = document.getElementsByClassName(className);
    if (elements.length === 1) {
        elements[0].click();
        return true;
    }
    return false;
}

addOffers();