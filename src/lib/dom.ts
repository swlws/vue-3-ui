export const on = function (
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};

/**
 * 事件代理
 *
 * @param pEl
 * @param cb
 */
export function clickProxy(
  pEl: HTMLElement,
  cb: (target: HTMLElement) => void
) {
  on(pEl, "click", (event) => {
    const target = lookupParentNodeByClassName(
      "item",
      event.target as HTMLElement,
      pEl
    );
    if (!target) return;

    cb(target);
  });
}

/**
 * 查找指定具备ClassName的父节点
 */
export function lookupParentNodeByClassName(
  pClassName: string,
  currentTarget: HTMLElement,
  rootNode: HTMLElement
) {
  if (currentTarget === rootNode) {
    return null;
  }

  if (rootNode && !rootNode.contains(currentTarget)) {
    return null;
  }

  let tmp: HTMLElement | null = currentTarget;
  while (tmp !== null && tmp !== rootNode) {
    const classList = tmp.classList;
    if (classList.contains(pClassName)) {
      return tmp;
    }

    tmp = tmp.parentElement;
  }

  return null;
}
