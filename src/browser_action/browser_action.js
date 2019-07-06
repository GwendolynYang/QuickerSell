function load() {

  var pred_list = document.getElementById("results");

  chrome.storage.local.get(["prediction"], function(data) {

    var list = document.createElement('ul');

    var prediction = data.prediction;
    console.log(typeof(data.prediction));
    console.log(data.prediction);

//// static string of house address: "Address: "
//    var tx_ad = document.createElement('li');
//    tx_ad.innerHTML = "Address: ";
//    //tx_ad.appendChild(document.createTextNode());
//    list.appendChild(tx_ad);

// display Address of this house
    var addr = document.createElement('h3');
    addr.textContent = prediction.address;
    list.appendChild(addr);

/******* Listing price *******/
// static string of days on market: "Days on Market: "
    var tx_p = document.createElement('li');
    tx_p.innerHTML = "Listing price: ";
    list.appendChild(tx_p);

// display the days(or weeks):
    var lp = document.createElement('a1');
    lp.textContent = prediction.listing_price ;
    tx_p.appendChild(lp);
    //list.appendChild(dom);

/******* Days on market *******/
// static string of days on market: "Days on Market: "
    var tx_d = document.createElement('li');
    tx_d.innerHTML = "Days on market: ";
    list.appendChild(tx_d);

// display the days(or weeks):
    var dom = document.createElement('a1');
    dom.textContent = prediction.dom ;
    tx_d.appendChild(dom);
    //list.appendChild(dom);

/******* Predict time *******/
// static string of prediction:
    var tx_1 = document.createElement('li');
    tx_1.innerHTML = "This home has 75% probability sold in:"
    //tx_1.innerHTML = "This home has 75% probability sold in: "  +  prediction.pred_weeks ;
    list.appendChild(tx_1);

// display the prediction of days
    var wk75 = document.createElement('a1');
    wk75.textContent = prediction.pred_weeks ;
    tx_1.appendChild(wk75);

/******* Predict price *******/
//// static string of prediction:
    var tx_2 = document.createElement('li');
    tx_2.appendChild(document.createTextNode("This home has 75% probability sold at:"));
    list.appendChild(tx_2);

// display the prediction of price drop
    var off = document.createElement('a');
    var off_1 = document.createElement('span');
    off_1.textContent = prediction.off_usd;
    off.appendChild(off_1)


    var tx_3 = document.createElement('span1');
    tx_3.innerHTML = " with " ;
    off_1.appendChild(tx_3);

// display the prediction of price drop
    var off_2 = document.createElement('span');
    off_2.textContent = prediction.off_pct;
    off_1.appendChild(off_2);

    var tx_4 = document.createElement('span1');
    tx_4.innerHTML  = " off listing price.";
    off_1.appendChild(tx_4);
    list.appendChild(off);

    pred_list.appendChild(list);

  })
}


document.addEventListener('DOMContentLoaded', function() {

  load();

})