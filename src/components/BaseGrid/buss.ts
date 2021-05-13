import { PlainObject } from "@/typings/component";
import { Ref, ref, watchEffect } from "vue";

type TGridRequestParam = {
  pageNum: number;
  pageSize: number;
  query?: PlainObject[];
};

type TGridResponseData = {
  total: number;
  list: PlainObject[];
};

export type TLoadData = (
  param: TGridRequestParam
) => Promise<TGridResponseData>;

export function initGrid(loadData?: TLoadData) {
  let data: Ref<PlainObject[]> = ref([]);
  const total = ref(0);
  const pageNum = ref(1);
  const pageSize = ref(20);

  const fn = (pageNum: number, pageSize: number) => {
    if (typeof loadData !== "function") return;

    const param = {
      pageNum,
      pageSize,
    };
    loadData(param).then((res: TGridResponseData) => {
      total.value = res.total;
      data.value = res.list;
    });
  };

  // 默认会触发一次
  watchEffect(() => {
    fn(pageNum.value, pageSize.value);
  });

  return {
    total,
    pageNum,
    pageSize,
    data,
  };
}
