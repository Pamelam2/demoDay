// from https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175

var $form = $('#frmMyForm'),
    url = 'https://script.google.com/macros/s/AKfycbwH_Lxp0Z_-qgAfb68DICT1dfkW1Nce0mjxin6ZFbmabIJVVm4/exec'

$('#btnSubmit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})