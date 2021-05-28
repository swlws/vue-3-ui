import { PlainObject } from "@/typings/component";

/**
 * 函数节流，一个周期内仅执行一次
 * @param fn
 * @param wait
 */
export function throttle(fn: any, wait = 300, that?: any) {
  let timer: any = null;

  return function (...rest: any[]) {
    if (typeof fn !== "function") return;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.call(that, ...rest);
      }, wait);
    }
  };
}

/**
 * 函数防抖
 * 连续触发N次，仅在最后一次执行
 *
 * @param fn
 * @param wait
 */
export function debounce(fn: any, wait = 300, that?: any) {
  let timer: any = null;

  return function (...rest: any[]) {
    if (typeof fn !== "function") return;

    clearTimeout(timer);
    timer = setTimeout(fn.bind(that, ...rest), wait);
  };
}

export function makeTree(
  data: PlainObject[],
  config = { id: "id", pid: "pid" }
) {
  if (!Array.isArray(data)) {
    return [];
  }

  const { id: _id, pid: _pid } = config;
  const map = data.reduce((_map, item) => {
    item.__id__ = item[_id];
    item.__pid__ = item[_pid];
    item.child = [];
    _map[item.__id__] = item;
    return _map;
  }, {});

  const set = new Set(Object.keys(map));
  Object.keys(map).forEach((key) => {
    const item = map[key];
    const pid = item.__pid__;
    const pItem = map[pid];
    if (!pItem) return;
    pItem.child.push(item);
    set.delete(item.__id__);
    Reflect.deleteProperty(item, "__id__");
    Reflect.deleteProperty(item, "__pid__");
  });

  return Array.from(set.values()).map((id) => {
    const item = { ...map[id] };
    item[_id] = item.__id__;
    item[_pid] = item.__pid__;
    Reflect.deleteProperty(item, "__id__");
    Reflect.deleteProperty(item, "__pid__");
    return item;
  });
}
