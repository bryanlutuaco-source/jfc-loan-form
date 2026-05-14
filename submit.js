function doGet(e) {
  try {
    if (!e) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "ok", message: "No event object" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (e.parameter && e.parameter.data) {
      const data = JSON.parse(e.parameter.data);
      const sheet = SpreadsheetApp
        .openById("1qDm2xRU_lAM0YpMyrcWaFllksvCNmeggDT3BJseUk1g")
        .getSheetByName("Sheet1");

      sheet.appendRow([
        new Date().toLocaleString(), // A: Date Submitted
        data.date,                   // B: Form Date
        data.amountApplied,          // C
        data.loanTerm,               // D
        data.loanPurpose,            // E
        data.howFound,               // F
        data.firstName,              // G
        data.middleName,             // H
        data.lastName,               // I
        data.civilStatus,            // J
        data.dateOfBirth,            // K
        data.dependentsMinor,        // L
        data.dependentsAdult,        // M
        data.residenceOwnership,     // N
        data.presentAddress,         // O
        data.presentStayYears,       // P
        data.presentStayMonths,      // Q
        data.provincialAddress,      // R
        data.homePhone,              // S
        data.mobilePhone,            // T
        data.workPhone,              // U
        data.personalEmail,          // V
        data.storeEmail,             // W
        data.company,                // X
        data.location,               // Y
        data.position,               // Z
        data.employeeNumber,         // AA
        data.dateOfEmployment,       // AB
        data.sss,                    // AC
        data.Tin,                    // 
        data.coBorrower1Name,        // AD
        data.coBorrower1Address,     // AE
        data.coBorrower1Contact,     // AF
        data.coBorrower1Company,     // AG
        data.coBorrower1Email,       // AH
        data.coBorrower1Location,    // AI
        data.coBorrower1Position,    // AJ
        data.coBorrower1DateEmployed,// AK
        data.coBorrower1EmployeeNum, // AL
        data.coBorrower2Name,        // AM
        data.coBorrower2Address,     // AN
        data.coBorrower2Contact,     // AO
        data.coBorrower2Company,     // AP
        data.coBorrower2Email,       // AQ
        data.coBorrower2Location,    // AR
        data.coBorrower2Position,    // AS
        data.coBorrower2DateEmployed,// AT
        data.coBorrower2EmployeeNum, // AU
        data.superiorFirstName,      // AV ✅
        data.superiorMiddleName,     // AW
        data.superiorLastName,       // AX
        data.superiorPosition,       // AY
        data.superiorYearsService,   // AZ
        data.superiorLandline,       // BA
        data.superiorMobile,         // BB
        data.loanProceeds,           // BC
        data.accountNumber           // BD
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
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "error", message: "No data received" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    const sheet = SpreadsheetApp
      .openById("1qDm2xRU_lAM0YpMyrcWaFllksvCNmeggDT3BJseUk1g")
      .getSheetByName("Sheet1");
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date().toLocaleString(), data.date,
      data.amountApplied, data.loanTerm, data.loanPurpose, data.howFound,
      data.firstName, data.middleName, data.lastName,
      data.civilStatus, data.dateOfBirth, data.dependentsMinor, data.dependentsAdult,
      data.residenceOwnership, data.presentAddress, data.presentStayYears, data.presentStayMonths,
      data.provincialAddress,
      data.homePhone, data.mobilePhone, data.workPhone, data.personalEmail, data.storeEmail,
      data.company, data.location, data.position, data.employeeNumber, data.dateOfEmployment, data.sss,
      data.company, data.location, data.position, data.employeeNumber, data.dateOfEmployment, data.Tin,
      data.coBorrower1Name, data.coBorrower1Address, data.coBorrower1Contact,
      data.coBorrower1Company, data.coBorrower1Email, data.coBorrower1Location,
      data.coBorrower1Position, data.coBorrower1DateEmployed, data.coBorrower1EmployeeNum,
      data.coBorrower2Name, data.coBorrower2Address, data.coBorrower2Contact,
      data.coBorrower2Company, data.coBorrower2Email, data.coBorrower2Location,
      data.coBorrower2Position, data.coBorrower2DateEmployed, data.coBorrower2EmployeeNum,
      data.superiorFirstName, data.superiorMiddleName, data.superiorLastName,
      data.superiorPosition, data.superiorYearsService, data.superiorLandline, data.superiorMobile,
      data.loanProceeds, data.accountNumber
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
