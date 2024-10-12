// 获取当前日期并生成数组
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // JavaScript month is 0-based, so + 1 for human-readable month
const day = today.getDate();

const Today: [number, number, number] = [year, month, day];


// 导出 Today 组件和 todayArray 数组
export default Today;
