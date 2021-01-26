module.exports = function towelSort(matrix) {
  return arguments.length != 0 && matrix.length != 0 && Array.isArray(matrix) ? matrix.map((item, index) => index != 0 && index % 2 != 0 ? item.reverse() : item).flat() : [];
}