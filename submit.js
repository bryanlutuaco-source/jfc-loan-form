function doGet(e) {
  try {

    // ✅ Guard: e is undefined when run from editor
    if (!e) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "ok", message: "No event object - test via Web App URL" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (e.parameter && e.parameter.data) {
      const data = JSON.parse(e.parameter.data);

      const sheet = SpreadsheetApp
        .openById("1qDm2xRU_lAM0YpMyrcWaFllksvCNmeggDT3BJseUk1g")
        .getSheetByName("Sheet1");

      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          "Timestamp","Date","Amount Applied","Loan Term",
          "Loan Purpose","How Found","First Name","Middle Name",
          "Last Name","Civil Status","Date of Birth",
          "Dependents Minor","Dependents Adult","Residence Ownership",
          "Present Address","Stay Years","Stay Months",
          "Provincial Address","Home Phone","Mobile Phone","Work Phone",
          "Personal Email","Store Email","Company","Location",
          "Position","Employee Number","Date of Employment","SSS/TIN",
          "Co-Borrower 1","Co-Borrower 2","Superior First",
          "Superior Last","Superior Position","Loan Proceeds","Account Number"
        ]);
      }

      sheet.appendRow([
        new Date().toLocaleString(),
        data.date,           data.amountApplied,    data.loanTerm,
        data.loanPurpose,    data.howFound,          data.firstName,
        data.middleName,     data.lastName,          data.civilStatus,
        data.dateOfBirth,    data.dependentsMinor,   data.dependentsAdult,
        data.residenceOwnership, data.presentAddress, data.stayYears,
        data.stayMonths,     data.provincialAddress, data.homePhone,
        data.mobilePhone,    data.workPhone,         data.personalEmail,
        data.storeEmail,     data.company,           data.location,
        data.position,       data.employeeNumber,    data.dateOfEmployment,
        data.sssTin,         data.coBorrower1Name,   data.coBorrower2Name,
        data.superiorFirstName, data.superiorLastName, data.superiorPosition,
        data.loanProceeds,   data.accountNumber
      ]);

      return ContentService
        .createTextOutput(JSON.stringify({ status: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok", message: "Service running" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
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
