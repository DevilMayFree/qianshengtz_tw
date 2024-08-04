$(function () {

	// contactForm
	if ($('form#contactForm').length > 0) {
		$('form#contactForm').validate({
			success:'valid',
			errorElement:'span',
			errorClass:'error',
			rules:{
				'name': { required: true },
				'email': { required: true, email: true },
				'phoneNumber': { required: true },
				'description': { required: true }
			},
			messages:{
				'name': { required: '' },
				'email': { required: '', email: 'x' },
				'phoneNumber': { required: '' },
				'description': { required: '' }
			},
			submitHandler:function(form) {
				var formAction = '/main/contactProcess';
				var formSerialize = $('form#contactForm').serialize();

				$.post(formAction, formSerialize, function(jsonData) {
					alert(jsonData.msg);
					if (jsonData.status != 0) { location.reload(true); }
					return false;
				}, 'json')
			}
		})
	}

})