$(document).ready(() => {
    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.pirogs-menu').hide()
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElement.addClass('active')
    })

    let select = function () {
        $('.select__body').hide()
        let fl = 0;
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)

        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
            if (fl===0){
                $('.select__body').show()
                fl=1

                $('.select__header').css('border-radius', '25px 25px 0 0')

                $('.select .fill-line').hide();
            }
            else{
                $('.select__body').hide()
                fl=0
                $('.select__header').css('border-radius', '33px 33px 33px 33px')
            }

        }

        function selectChoose() {

            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');
            $('.select__body').hide()
            $('.select__header').css('border-radius', '33px 33px 33px 33px')
            fl=0
            sl_open+=1
            $('.select__current').css('display', 'block', 'color', 'rgb(143, 188, 98)')
            $('.select__default').css('display', 'none')

        }
    };


    select();
})