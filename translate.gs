// custom menu function
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Translate')
      .addItem('Translate this sheet to English','translateActiveSheet')
      .addToUi();
}

function translateActiveSheet() {
  var currentSheet = SpreadsheetApp.getActiveSheet();
  var sheetName = currentSheet.getSheetName();
  var dataRange = currentSheet.getDataRange();
  var rows = dataRange.getNumRows();
  var cols = dataRange.getNumColumns();
  var arrValues = dataRange.getValues();
  Logger.log("rows: " + rows + " - cols: " + rows);
  for (var i in arrValues) {
    for (var j in arrValues[i]) {
      var curVal = arrValues[i][j];
      if (typeof curVal == "string" && curVal != "") {
        arrValues[i][j] = translateJpToEn(curVal);
      }
    }
  }
  dataRange.setValues(arrValues);
}


function translateJpToEn(str) {
  return LanguageApp.translate(str, 'ja', 'en');
}