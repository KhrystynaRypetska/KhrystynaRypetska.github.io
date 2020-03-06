import '../../../vendor/jquery.spincrement'

export default class CounterModule {
    counterHandler(className) {
        let countBlockTop = $("." + className).offset().top;
        let windowHeight = $(window).innerHeight();
        let show = true;

        $(window).scroll(() => {
            if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
                show = false;
                $('.' + className).spincrement({
                    from: 1,
                    duration: 4000,
                });
            }
        })

    }
}