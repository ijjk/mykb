module.exports = {
  getKey: e => e.which || e.keyCode,
  isCtrlKey: key => key === 91 || key === 93 || key === 17
};