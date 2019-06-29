function load() {

  var pred_list = document.getElementById("prediction");

  chrome.storage.local.get("prediction", function(data) {
    var list = document.createElement('ul');

// static string of house address: "Address: "
    var tx_ad = document.createElement('li');
    tx_ad.appendChild(document.createTextNode("Address: "));
    list.appendChild(tx_ad);

// display Address of this house
    var addr = document.createElement('a');
    addr.appendChild(document.createTextNode(prediction.address));

// display city, state, zip code in second line
    var city = document.createElement('a');
    city.appendChild(document.createTextNode(prediction.city));
    list.appendChild(city);

/*
    // Don't show price. It is obvious to see from the web page itself.
    // Hard question, "current price" or "original listed price"?
    // Current model only deal with original price.
// static string of (current/listing) house price: "Price:"
    var tx_p = document.createElement('li');
    tx_p.appendChild(document.createTextNode("Price: "));
    list.appendChild(tx_p);

// display the price: $1,023,000
    var price = document.createElement('a');
    price.appendChild(document.createTextNode(prediction.curr_price));
    list.appendChild(price);*/

// static string of days on market: "Days on Market: "
    var tx_d = document.createElement('li');
    tx_d.appendChild(document.createTextNode("Days on market: "));
    list.appendChild(tx_d);

// display the days(or weeks):
    var dom = document.createElement('a');
    dom.appendChild(document.createTextNode(prediction.dom));
    list.appendChild(dom);

// TODO: should be in a separate bounding box apart from above info.
// static string of prediction:
    var tx_1 = document.createElement('li');
    tx_1.appendChild(document.createTextNode("This home has 75% probability sold in:   "));
    list.appendChild(tx_1);

// display the prediction of days
    var days75 = document.createElement('span');
    days75.appendChild(document.createTextNode(prediction.days));
    list.appendChild(days75);

//// static string of prediction: TODO
    var tx_2 = document.createElement('li');
    tx_2.appendChild(document.createTextNode("This home has 75% probability sold at "));
    list.appendChild(tx_2);

// display the prediction of price drop
    var off_1 = document.createElement('span');
    off_1.appendChild(document.createTextNode(prediction.off_usd));
    list.appendChild(off_1);

    var tx_3 = document.createElement('a');
    tx_3.appendChild(document.createTextNode(" with "));
    list.appendChild(tx_3);

// display the prediction of price drop
    var off_2 = document.createElement('span');
    off_2.appendChild(document.createTextNode(prediction.off_pct));
    list.appendChild(off_2);

    var tx_4 = document.createElement('a');
    tx_4.appendChild(document.createTextNode(" listing price."));
    list.appendChild(tx_4);



    pred_list.appendChild(list);


  })
}



document.addEventListener('DOMContentLoaded', function() {

  load();

})