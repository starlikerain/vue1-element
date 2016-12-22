/**
 * Created by StarLikeRain on 2016/12/17.
 */
export function saveToLocal (id, key, value) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {
    //  JSON字符串解析成一个javascript值
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  //  JavaScript 值序列化成 JSON 字符串
  window.localStorage.__seller__ = JSON.stringify(seller);
}

export function loadFromLocal (id, key, def) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
}
