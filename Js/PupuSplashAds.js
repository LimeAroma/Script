// 作者：LimeAroma
/*
https?:\/\/j1\.pupuapi\.com\/client\/marketing\/banner\/v7\?position_types=2(%[A-Z0-9]+)+&store_id url script-response-body https://raw.githubusercontent.com/LimeAroma/Quantumultx/main/Js/PupuSplashAds.js

hostname=j1.pupuapi.com
*/

let obj=JSON.parse($response.body);
for (const item of obj.data) {
  if (item.position_type === 50) {
    item.img_url = null;
  }
}
$done({body: JSON.stringify(obj)});
