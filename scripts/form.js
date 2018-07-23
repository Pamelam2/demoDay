var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwH_Lxp0Z_-qgAfb68DICT1dfkW1Nce0mjxin6ZFbmabIJVVm4/exec'

$('#submit-form').on('click', function(e) {
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