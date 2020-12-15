/**
 * 源请求
 * @param url
 * @param callback
 * @param onProgress
 * @param onError
 */
function sourceRequest(
  url: string,
  callback: Function,
  onProgress?: Function,
  onError?: Function
) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.open("get", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onprogress = (event: ProgressEvent) => {
    if (event.lengthComputable) {
      onProgress &&
        onProgress({
          loaded: event.loaded,
          total: event.total,
          percent: Math.ceil((event.loaded / event.total) * 100),
        });
    }
  };
  xhr.onerror = () => {
    onError &&
      onError({
        code: 500,
        msg: "下载错误",
      });
  };
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 返回Blob对象
      callback && callback(new Blob([xhr.response]));
    }
  };
  xhr.send();
}

/**
 *
 * @param opt
 */
export const downloadApi = (opt: {
  source: string;
  filename?: string;
  ext?: string;
  onSuccess?(result: boolean): void;
  onProgress?(progress: {
    loaded: number;
    total: number;
    percent: number;
  }): void;
  onError?(err: { code: number; msg: string }): void;
}) => {
  const currentDate: Date = new Date();
  const nameTime =
    currentDate.getFullYear() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate();
  // 文件名
  const fileName =
    nameTime +
    "_" +
    (opt.filename || "文件") +
    ((opt.ext && "." + opt.ext) || ".mp4");
  sourceRequest(
    opt.source,
    (blob: Blob) => {
      console.log("start download");
      const aLink = document.createElement("a");
      const url = URL.createObjectURL(blob);
      aLink.download = fileName;
      aLink.href = url;
      let event;
      if (window.MouseEvent) {
        event = new MouseEvent("click");
      } else {
        event = document.createEvent("MouseEvent");
        event.initMouseEvent(
          "click",
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        );
      }
      aLink.dispatchEvent(event);
      opt.onSuccess && opt.onSuccess(true);
    },
    (progress: { loaded: number; total: number; percent: number }) => {
      opt.onProgress && opt.onProgress(progress);
    },
    (err: { code: number; msg: string }) => {
      opt.onError && opt.onError(err);
    }
  );
};
