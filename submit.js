function doGet(e) {
  try {
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

      // Auto-create headers if sheet is empty
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          "Timestamp", "Date",
          // Loan Details
          "Amount Applied", "Loan Term", "Loan Purpose", "Purpose Other",
          "How Found", "Member Other FI", "FI Type", "Credit Card Bank", "Online Lending App",
          // Borrower Personal
          "First Name", "Middle Name", "Last Name", "Civil Status", "Date of Birth",
          "Dependents Minor", "Dependents Adult", "Residence Ownership", "Rent Amount",
          "Present Address", "Present Stay Years", "Present Stay Months",
          "Provincial Address", "Provincial Stay Years", "Provincial Stay Months",
          "Additional Notes",
          // Borrower Employment
          "Home Phone", "Mobile Phone", "Work Phone",
          "Personal Email", "Store Email",
          "Company", "Company Branch", "Location",
          "Position", "Employee Number", "Date of Employment", "SSS/TIN",
          // Co-Borrower 1
          "Co-Borrower 1 Name", "Co-Borrower 1 Address",
          "Co-Borrower 1 Stay Years", "Co-Borrower 1 Stay Months",
          "Co-Borrower 1 Contact Label", "Co-Borrower 1 Contact",
          "Co-Borrower 1 Company", "Co-Borrower 1 Email",
          "Co-Borrower 1 Location", "Co-Borrower 1 Position",
          "Co-Borrower 1 Date Employed", "Co-Borrower 1 Employee Num",
          // Co-Borrower 2
          "Co-Borrower 2 Name", "Co-Borrower 2 Address",
          "Co-Borrower 2 Stay Years", "Co-Borrower 2 Stay Months",
          "Co-Borrower 2 Contact Label", "Co-Borrower 2 Contact",
          "Co-Borrower 2 Company", "Co-Borrower 2 Email",
          "Co-Borrower 2 Location", "Co-Borrower 2 Position",
          "Co-Borrower 2 Date Employed", "Co-Borrower 2 Employee Num",
          // Immediate Superior
          "Superior First Name", "Superior Middle Name", "Superior Last Name",
          "Superior Position", "Superior Yrs Service", "Superior Landline", "Superior Mobile",
          // Loan Proceeds
          "Loan Proceeds", "Account Number"
        ]);
      }

      sheet.appendRow([
        new Date().toLocaleString(),
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

        // Immediate Superior
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
      new Date().toLocaleString(),
      data.date,
      data.amountApplied,      data.loanTerm,
      data.loanPurpose,        data.purposeOther,
      data.howFound,           data.memberOtherFI,
      data.fiType,             data.creditCardBank,        data.onlineLendingApp,
      data.firstName,          data.middleName,            data.lastName,
      data.civilStatus,        data.dateOfBirth,
      data.dependentsMinor,    data.dependentsAdult,
      data.residenceOwnership, data.rentAmount,
      data.presentAddress,     data.presentStayYears,      data.presentStayMonths,
      data.provincialAddress,  data.provincialStayYears,   data.provincialStayMonths,
      data.additionalNotes,
      data.homePhone,          data.mobilePhone,           data.workPhone,
      data.personalEmail,      data.storeEmail,
      data.company,            data.companyBranch,         data.location,
      data.position,           data.employeeNumber,        data.dateOfEmployment,
      data.sssTin,
      data.coBorrower1Name,    data.coBorrower1Address,
      data.co1StayYears,       data.co1StayMonths,
      data.coBorrower1ContactLabel, data.coBorrower1Contact,
      data.coBorrower1Company, data.coBorrower1Email,
      data.coBorrower1Location, data.coBorrower1Position,
      data.coBorrower1DateEmployed, data.coBorrower1EmployeeNum,
      data.coBorrower2Name,    data.coBorrower2Address,
      data.co2StayYears,       data.co2StayMonths,
      data.coBorrower2ContactLabel, data.coBorrower2Contact,
      data.coBorrower2Company, data.coBorrower2Email,
      data.coBorrower2Location, data.coBorrower2Position,
      data.coBorrower2DateEmployed, data.coBorrower2EmployeeNum,
      data.superiorFirstName,  data.superiorMiddleName,    data.superiorLastName,
      data.superiorPosition,   data.superiorYearsService,
      data.superiorLandline,   data.superiorMobile,
      data.loanProceeds,       data.accountNumber
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
