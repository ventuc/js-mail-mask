'use strict';

(function($){
	
	function strAsciiEncode(s){
		var enc = [];
		for (var i = 0; i < s.length; i++){
			enc.push(s.charCodeAt(i));
		}
		return enc.join('.');
	}
	function strAsciiDecode(encoded){
		var chars = encoded.split('.');
		var s = "";
		for (var i = 0; i < chars.length; i++){
			s = s + String.fromCharCode(parseInt(chars[i]));
		}
		return s;
	}

	jQuery(function(){
		jQuery('[data-mail-encoded]').each(function(){
			var $this = jQuery(this);
			var mail = strAsciiDecode($this.data('mail-encoded'));
			$this.attr('href', "mailto:" + mail).text(mail);
		});
	});
	
})(jQuery);
