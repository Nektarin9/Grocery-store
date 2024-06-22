module.exports = function (str) {
  // Проверяем наличие всех типов скобок и точек
  return (
    str.includes("(") ||
    str.includes(")") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes(".")
  );
};
