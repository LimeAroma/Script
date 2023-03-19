// 作者：LimeAroma
/*
^https?:\/\/j1\.pupuapi\.com\/client\/marketing\/banner\/v7\?position_types=[A-Z0-9%]+&store_id=[a-z0-9\-]+ url script-response-body https://raw.githubusercontent.com/LimeAroma/Quantumultx/main/Js/PupuSplashAds.js

hostname=j1.pupuapi.com
*/

let obj=JSON.parse($response.body);
let count = 0;
obj.data.forEach(item => {
  if (item.image_width === 1080) {
    item.img_url = null;
    count++;
    if (count === 2) {
      return false;
    }
  }
});
$done({body: JSON.stringify(obj)});
