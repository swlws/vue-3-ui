import { PlainObject } from "@/typings/component";

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
