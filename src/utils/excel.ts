/* eslint-disable */

import FileSaver from "file-saver";
import XLSX from "XLSX";

/**
 * 导出excel
 * @param excelInfo 需要导出的数据
 * @param title  excel文件名
 */
export function export2Excel(
  excelInfo: {
    [key: string]: string[][];
  },
  title: string
) {
  const workbook = XLSX.utils.book_new();
  for (const key in excelInfo) {
    const sheet = XLSX.utils.aoa_to_sheet(excelInfo[key]);
    XLSX.utils.book_append_sheet(workbook, sheet, key);
  }

  try {
    const wbOut = XLSX.write(workbook, {
      bookType: "xlsx",
      bookSST: true,
      type: "array",
    });
    FileSaver.saveAs(
      new Blob([wbOut], { type: "application/octet-stream" }),
      `${title}.xlsx`
    );
  } catch (e) {
    if (typeof console !== "undefined") console.log(e);
  }
}

export const import2Excel = (file: File) => {
  return new Promise((resolve, reject) => {
    // 文件读取对象
    const reader = new FileReader();
    // 读取文件
    reader.readAsBinaryString(file);
    //监听加载完成
    reader.onload = (e: any) => {
      const data = e.target.result;
      if (!data) {
        reject(new Error("读取文件失败"));
      }
      // 读取
      const readData = XLSX.read(data, {
        type: "binary",
      });
      // 拼接数据
      const dataList = XLSX.utils.sheet_to_json(
        readData.Sheets[readData.SheetNames[0]]
      );
      let dataArr: any = [];
      console.log(dataList);
      dataList.forEach((item: any) => {
        console.log(dataList["序号"]);
        dataArr.push({
          sort: item["序号"],
          schoolName: item["学校名称"],
          studentCount: item["出勤学生数量"],
          studentPrecent: item["人数占比"],
        });
      });
      resolve(dataArr);
    };
    reader.onerror = function(e) {
      reject(new Error("导入文件失败"));
    };
  });
};
