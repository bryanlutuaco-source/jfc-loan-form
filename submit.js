function updateSuperiorFullName() {
  var first  = document.getElementById('superiorFirst').value;
  var middle = document.getElementById('superiorMiddle').value;
  var last   = document.getElementById('superiorLast').value;
  document.getElementById('superiorFullNameDisplay').textContent =
    [first, middle, last].filter(Boolean).join(' ');
}

function previewSign(event, imgId) {
  var file = event.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById(imgId).src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function getChecked(name) {
  return Array.from(document.querySelectorAll('input[name="' + name + '"]:checked'))
              .map(function(cb) { return cb.value; }).join(', ');
}

function val(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function submitForm() {
  var statusEl = document.getElementById('submitStatus');
  statusEl.textContent = 'Submitting... please wait';
  statusEl.style.color = '#555';

  var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxg8mi30OTb522jGknjadqj-b33pFghwrNrYqLJP4KPe32kb6lqIPsRktNCw0M38R7y/exec";

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
    presentAddress:          val('presentAddress'),
    provincialAddress:       val('provincialAddress'),
    homePhone:               val('homePhone'),
    mobilePhone:             val('mobilePhone'),
    workPhone:               val('workPhone'),
    personalEmail:           val('personalEmail'),
    company:                 val('company'),
    position:                val('position'),
    employeeNumber:          val('employeeNumber'),
    timestamp:               new Date().toLocaleString()
  };

  console.log("submitForm called!");
  console.log("Data:", JSON.stringify(formData));

  var params = new URLSearchParams();
  params.append("data", JSON.stringify(formData));

  fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString()
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

window.addEventListener('load', function() {
  var hrFile = document.getElementById('hrFileInput');
  if (hrFile) {
    hrFile.addEventListener('change', function(event) {
      var file = event.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = document.getElementById('hrPreviewImg');
        img.src = e.target.result;
        img.style.display = 'block';
      };
      reader.readAsDataURL(file);
    });
  }

  var sigUpload = document.getElementById('signatureUpload');
  if (sigUpload) {
    sigUpload.addEventListener('change', function(event) {
      var file = event.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = document.getElementById('signaturePreview');
        img.src = e.target.result;
        img.style.display = 'block';
        document.getElementById('signatureUpload').style.display = 'none';
      };
      reader.readAsDataURL(file);
    });
  }
});
