$(document).ready(function () {

    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Solo un momento!</strong> estamos guardando tu confirmacion.'));

		$.post('https://script.google.com/macros/s/AKfycbwSVoo4P1mIMqnX9VKGKqhagZK-BmJKhymSQTN1PyxjVaTARu_CGxwK0JBE3zKTgX_-5w/exec', data)
			.done(function (data) {
				console.log(data);
				if (data.result === "error") {
					$('#alert-wrapper').html(alert_markup('danger', data.message));
				} else {
					$('#alert-wrapper').html('');
					$('#rsvp-modal').modal('show');
				}
			})
			.fail(function (data) {
				console.log(data);
				$('#alert-wrapper').html('');
			});
	
    });

});
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}