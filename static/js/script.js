/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $("select").formSelect();
    $(".materialboxed").materialbox();
    $(".modal").modal();
    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });

// back-to-top-button            
var btn = $('#button');
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '300');
	});
});

    validateMaterializeSelect();
    function validateMaterializeSelect() {
        let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
        let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
        if ($("select.validate").prop("required")) {
            $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
        }
        $(".select-wrapper input.select-dropdown").on("focusin", function () {
            $(this).parent(".select-wrapper").on("change", function () {
                if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                    $(this).children("input").css(classValid);
                }
            });
        }).on("click", function () {
            if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                $(this).parent(".select-wrapper").children("input").css(classValid);
            } else {
                $(".select-wrapper input.select-dropdown").on("focusout", function () {
                    if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                        if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                            $(this).parent(".select-wrapper").children("input").css(classInvalid);
                        }
                    }
                });
            }
        });
    }
});


$('.rating-star').on('click', function() {
            $(this).parents('.rating').find('.rating-star').removeClass('checked'); // uncheck previously checked star

            $(this).addClass('checked'); // check currently selected star

            var ratingValue = $(this).attr('data-rating'); // get rating value
            var ratingTarget = $(this).attr('data-target');

            // set the rating value to corresponding target radio input
            $('input[name="' + ratingTarget + '"][value="' + ratingValue + '"]').prop('checked', true);
        });

(function($) {
	var wordCounter = {
		init: function() {
			this.DOM();
			this.events();
		},
		DOM: function() {
			this.textbox = $("#book_review");
			this.wordCount = $("#wordCount");
			this.charCount = $("#charCount");
		},
		events: function() {
			this.textbox.on("input", this.count.bind(this));
		},
		count: function() {
			var words = this.textbox.val().split(" "),
				chars = this.textbox.val();

			//DELETE EMPTY STRINGS
			for (var i = 0; i < words.length; i++) {
				while (words[i] === "") {
					words.splice(i, 1);
				}
			}
			//COUNT WORDS
			if (words.length === 1) {
				this.wordCount.text(words.length + " word");
			} else {
				this.wordCount.text(words.length + " words");
			}
			//COUNT CHARACTERS
			if (chars.length < 0) {
				words = [];
			} else if (chars.length === 1) {
				this.charCount.text(chars.length + " character");
			} else {
				this.charCount.text(chars.length + " characters");
			}
		}
	}
	wordCounter.init();
}(jQuery));