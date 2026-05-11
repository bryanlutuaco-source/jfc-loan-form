function doGet(e) {
  // Handle the data passed as a GET parameter
  if (e.parameter && e.parameter.data) {
    try {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName("Sheet1");
      var data = JSON.parse(e.parameter.data);

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(Object.keys(data));
      }
      sheet.appendRow(Object.values(data));

      return ContentService
        .createTextOutput("SUCCESS")
        .setMimeType(ContentService.MimeType.TEXT);

    } catch(err) {
      return ContentService
        .createTextOutput("ERROR: " + err.toString())
        .setMimeType(ContentService.MimeType.TEXT);
    }
  }

  return ContentService
    .createTextOutput("JFC COOP Form Script is running ✅")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet1");
    var raw = e.parameter.data || e.postData.contents;
    var data = JSON.parse(raw);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(Object.keys(data));
    }
    sheet.appendRow(Object.values(data));

    return ContentService
      .createTextOutput("SUCCESS")
      .setMimeType(ContentService.MimeType.TEXT);

  } catch(err) {
    return ContentService
      .createTextOutput("ERROR: " + err.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
