function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function clickShowAllButton() {
    var tags = document.getElementsByTagName("button");
    var searchText = "Show All";

    for (var i = 0; i < tags.length; i++) {
        if (tags[i].textContent.indexOf(searchText) >= 0) {
            var found = tags[i];
            found.click();
            break;
        }
    }
}

async function clipCoupons() {
    clickShowAllButton();

    await delay(1000);

    var tags = document.getElementsByTagName("a");
    var searchText = "Load To Card";
    var buttonsClicked = 0;

    for (var i = 0; i < tags.length; i++) {
        if (tags[i].textContent.indexOf(searchText) >= 0) {
            var found = tags[i];
            found.click();
            buttonsClicked++;
        }
    }

    alert(`${buttonsClicked} coupon(s) clipped`);
    return buttonsClicked;
}

clipCoupons();