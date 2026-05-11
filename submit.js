function submitForm() {
  var statusEl = document.getElementById('submitStatus');
  statusEl.textContent = 'Submitting... please wait';
  statusEl.style.color = '#555';

  var SCRIPT_URL = "https://script.google.com/macros/s/YOUR_NEW_SCRIPT_URL/exec";

  var formData = {
    date:                    val('formDate'),
    amountApplied:           val('amountApplied'),
    loanTerm:                val('loanTerm'),
    loanPurpose:             getChecked('loanPurpose'),
    howFound:                getChecked('howFound'),
    firstName:               val('borrowerFirst'),
    middleName:              val('borrowerMiddle'),
    lastName:                val('borrowerLast'),
    civilStatus:             getChecked('civilStatus'),
    dateOfBirth:             val('dateOfBirth'),
    dependentsMinor:         val('dependentsMinor'),
    dependentsAdult:         val('dependentsAdult'),
    residenceOwnership:      getChecked('residenceOwnership'),
    presentAddress:          val('presentAddress'),
    stayYears:               val('presentStayYears'),
    stayMonths:              val('presentStayMonths'),
    provincialAddress:       val('provincialAddress'),
    homePhone:               val('homePhone'),
    mobilePhone:             val('mobilePhone'),
    workPhone:               val('workPhone'),
    personalEmail:           val('personalEmail'),
    storeEmail:              val('storeEmail'),
    company:                 val('company'),
    location:                val('location'),
    position:                val('position'),
    employeeNumber:          val('employeeNumber'),
    dateOfEmployment:        val('dateOfEmployment'),
    sssTin:                  val('sssTin'),
    coBorrower1Name:         val('coBorrower1Name'),
    coBorrower2Name:         val('coBorrower2Name'),
    superiorFirstName:       val('superiorFirst'),
    superiorLastName:        val('superiorLast'),
    superiorPosition:        val('superiorPosition'),
    loanProceeds:            getChecked('loanProceeds'),
    accountNumber:           val('accountNumber'),
    timestamp:               new Date().toLocaleString()
  };

  console.log("submitForm called!");
  console.log("Data:", JSON.stringify(formData));

  // Send as GET request (appended to URL)
  var url = SCRIPT_URL + "?data=" + encodeURIComponent(JSON.stringify(formData));

  fetch(url, {
    method: "GET",
    mode: "no-cors"
  })
  .then(function() {
    statusEl.textContent = "✅ Form Submitted Successfully!";
    statusEl.style.color = "green";
    console.log("Done!");
  })
  .catch(function(error) {
    statusEl.textContent = "❌ Error: " + error.message;
    statusEl.style.color = "red";
    console.error("Fetch error:", error);
  });
}
