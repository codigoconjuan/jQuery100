    function generate(type) {
        var n = noty({
            text        : type,
            type        : type,
            dismissQueue: true,
            layout      : 'topCenter',
            theme       : 'defaultTheme',
            maxVisible  : 10
        });
    }

    function generateAll() {
        generate('success');
    }

    $(document).ready(function () {

        $('button').click(function() {
            generateAll();
        });

    });