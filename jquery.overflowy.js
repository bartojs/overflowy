/* overflowy: a really simple jquery plugin for handling vertical overflow. http://github.com/bartonj/overflowy */
(function($) {
    $.fn.overflowy = function(settings) {
        return this.each(function() {
            $(this).css('overflow-y', 'scroll');
            if (this.clientHeight < this.scrollHeight)
            {
                $(this).after('<div class="ellipsis" title="' + $.trim($(this).text()) + '">...</div>');
            }
            else if (settings && settings.resetHeight)
            {
                $(this).css('height', 'auto');
            }
            $(this).css('overflow-y', 'hidden');
        });
    };
})(jQuery);
