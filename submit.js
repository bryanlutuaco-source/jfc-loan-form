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
        // A: Date Submitted
        new Date().toLocaleString(),
        // B: Form Date
        data.date,

        // C: Amount Applied  D: Loan Term  E: Loan Purpose  F: How Found
        data.amountApplied,
        data.loanTerm,
        data.loanPurpose,
        data.howFound,

        // G: First Name  H: Middle Name  I: Last Name
        data.firstName,
        data.middleName,
        data.lastName,

        // J: Civil Status  K: Date of Birth  L: Dependents Minor  M: Dependents Adult
        data.civilStatus,
        data.dateOfBirth,
        data.dependentsMinor,
        data.dependentsAdult,

        // N: Residence Ownership  O: Present Address  P: Stay Years  Q: Stay Months
        data.residenceOwnership,
        data.presentAddress,
        data.presentStayYears,
        data.presentStayMonths,

        // R: Provincial Address
        data.provincialAddress,

        // S: Home Phone  T: Mobile Phone  U: Work Phone  V: Personal Email  W: Store Email
        data.homePhone,
        data.mobilePhone,
        data.workPhone,
        data.personalEmail,
        data.storeEmail,

        // X: Company  Y: Location/Dept  Z: Position  AA: Employee/SAP No.
        // AB: Date of Employment  AC: SSS/TIN
        data.company,
        data.location,
        data.position,
        data.employeeNumber,
        data.dateOfEmployment,
        data.sssTin,

        // AD: Co-Borrower 1 Name  AE: Address  AF: Contact  AG: Company
        // AH: Email  AI: Location  AJ: Position  AK: Date Employed  AL: Employee No.
        data.coBorrower1Name,
        data.coBorrower1Address,
        data.coBorrower1Contact,
        data.coBorrower1Company,
        data.coBorrower1Email,
        data.coBorrower1Location,
        data.coBorrower1Position,
        data.coBorrower1DateEmployed,
        data.coBorrower1EmployeeNum,

        // AM: Co-Borrower 2 Name  AN: Address  AO: Contact  AP: Company
        // AQ: Email  AR: Location  AS: Position  AT: Date Employed  AU: Employee No.
        data.coBorrower2Name,
        data.coBorrower2Address,
        data.coBorrower2Contact,
        data.coBorrower2Company,
        data.coBorrower2Email,
        data.coBorrower2Location,
        data.coBorrower2Position,
        data.coBorrower2DateEmployed,
        data.coBorrower2EmployeeNum,

        // AV: Superior First Name  AW: Middle Name  AX: Last Name
        // AY: Position  AZ: Yrs Service  BA: Landline  BB: Mobile
        data.superiorFirstName,
        data.superiorMiddleName,
        data.superiorLastName,
        data.superiorPosition,
        data.superiorYearsService,
        data.superiorLandline,
        data.superiorMobile,

        // BC: Loan Proceeds Type  BD: Account Number
        data.loanProceeds,
        data.accountNumber
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
      data.company, data.location, data.position, data.employeeNumber, data.dateOfEmployment, data.sssTin,
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
