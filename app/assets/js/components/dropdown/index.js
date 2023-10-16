export function initDropDown() {
    const $dropDownList = document.querySelectorAll('.dropdown')
    if ($dropDownList.length === 0) return

    // Добавляем функционал к dropdown
    [].forEach.call($dropDownList, dropdown => {
        const $dropDownContainer = dropdown.querySelector('.dropdown__menu')
        const $dropDownTitle = dropdown.querySelector('.dropdown__title')
        $dropDownContainer.style.height = 0

        $dropDownTitle.addEventListener('click', (e) => {
            if (dropdown.classList.contains('closed')) {
                // calc height
                const dropdownHeight = dropdown.querySelector('.dropdown__menu__wrap').getBoundingClientRect().height
                dropdown.classList.remove('closed')
                // add height to container
                $dropDownContainer.style.height = dropdownHeight + 'px'
                dropdown.classList.add('open')
            } else {
                dropdown.classList.remove('open')
                dropdown.classList.add('closed')
                $dropDownContainer.style.height = 0
            }
        })
    })
}