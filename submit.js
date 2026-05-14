function doGet(e) {
  // Handle form data submitted via GET (query string)
  if (e && e.parameter && e.parameter.data) {
    try {
      const sheet = SpreadsheetApp
        .openById("1qDm2xRU_lAM0YpMyrcWaFllksvCNmeggDT3BJseUk1g")
        .getSheetByName("Sheet1");

      const data = JSON.parse(e.parameter.data);

      sheet.appendRow([
  data.timestamp,
  data.date,

  // Loan Details
  data.amountApplied,
  data.loanTerm,
  data.loanPurpose,
  data.purposeOther,
  data.howFound,
  data.memberOtherFI,
  data.fiType,
  data.creditCardBank,
  data.onlineLendingApp,

  // Borrower Personal
  data.firstName,
  data.middleName,
  data.lastName,
  data.civilStatus,
  data.dateOfBirth,
  data.dependentsMinor,
  data.dependentsAdult,
  data.residenceOwnership,
  data.rentAmount,
  data.presentAddress,
  data.presentStayYears,
  data.presentStayMonths,
  data.provincialAddress,
  data.provincialStayYears,
  data.provincialStayMonths,
  data.additionalNotes,

  // Borrower Employment
  data.homePhone,
  data.mobilePhone,
  data.workPhone,
  data.personalEmail,
  data.storeEmail,
  data.company,
  data.companyBranch,
  data.location,
  data.position,
  data.employeeNumber,
  data.dateOfEmployment,
  data.sssTin,

  // Co-Borrower 1
  data.coBorrower1Name,
  data.coBorrower1Address,
  data.co1StayYears,
  data.co1StayMonths,
  data.coBorrower1ContactLabel,
  data.coBorrower1Contact,
  data.coBorrower1Company,
  data.coBorrower1Email,
  data.coBorrower1Location,
  data.coBorrower1Position,
  data.coBorrower1DateEmployed,
  data.coBorrower1EmployeeNum,

  // Co-Borrower 2
  data.coBorrower2Name,
  data.coBorrower2Address,
  data.co2StayYears,
  data.co2StayMonths,
  data.coBorrower2ContactLabel,
  data.coBorrower2Contact,
  data.coBorrower2Company,
  data.coBorrower2Email,
  data.coBorrower2Location,
  data.coBorrower2Position,
  data.coBorrower2DateEmployed,
  data.coBorrower2EmployeeNum,

  // ✅ Immediate Superior — must be HERE, after Co-Borrower 2
  data.superiorFirstName,
  data.superiorMiddleName,
  data.superiorLastName,
  data.superiorPosition,
  data.superiorYearsService,
  data.superiorLandline,
  data.superiorMobile,

  // Loan Proceeds
  data.loanProceeds,
  data.accountNumber
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

  // No data param — just serve the HTML page
  return HtmlService.createHtmlOutputFromFile('Index')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
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
      data.timestamp,
      data.date,
      data.amountApplied,
      data.loanTerm,
      data.loanPurpose,
      data.purposeOther,
      data.howFound,
      data.memberOtherFI,
      data.fiType,
      data.creditCardBank,
      data.onlineLendingApp,
      data.firstName,
      data.middleName,
      data.lastName,
      data.civilStatus,
      data.dateOfBirth,
      data.dependentsMinor,
      data.dependentsAdult,
      data.residenceOwnership,
      data.rentAmount,
      data.presentAddress,
      data.presentStayYears,
      data.presentStayMonths,
      data.provincialAddress,
      data.provincialStayYears,
      data.provincialStayMonths,
      data.additionalNotes,
      data.homePhone,
      data.mobilePhone,
      data.workPhone,
      data.personalEmail,
      data.storeEmail,
      data.company,
      data.companyBranch,
      data.location,
      data.position,
      data.employeeNumber,
      data.dateOfEmployment,
      data.sssTin,
      data.coBorrower1Name,
      data.coBorrower1Address,
      data.co1StayYears,
      data.co1StayMonths,
      data.coBorrower1ContactLabel,
      data.coBorrower1Contact,
      data.coBorrower1Company,
      data.coBorrower1Email,
      data.coBorrower1Location,
      data.coBorrower1Position,
      data.coBorrower1DateEmployed,
      data.coBorrower1EmployeeNum,
      data.coBorrower2Name,
      data.coBorrower2Address,
      data.co2StayYears,
      data.co2StayMonths,
      data.coBorrower2ContactLabel,
      data.coBorrower2Contact,
      data.coBorrower2Company,
      data.coBorrower2Email,
      data.coBorrower2Location,
      data.coBorrower2Position,
      data.coBorrower2DateEmployed,
      data.coBorrower2EmployeeNum,
      data.superiorFirstName,
      data.superiorMiddleName,
      data.superiorLastName,
      data.superiorPosition,
      data.superiorYearsService,
      data.superiorLandline,
      data.superiorMobile,
      data.loanProceeds,
      data.accountNumber
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
