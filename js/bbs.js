$(function () {
    let selectAll = $('#selectAll');
    let checkBoxs = $('tbody input[type="checkbox');

    selectAll.on('change', function () {
        checkBoxs.prop('checked', $(this).prop('checked'));
        // 첫번째 prop,두번째prop 체크박스의 속성 설정을 의미하며
        // 선택된 상태를 selectAll과 동기화 하는 역할을 수행
    });
    // 체크박스 중 하나라도 해제가 되면 전체 박스도 해제
    checkBoxs.on('change', function () {
        if (!$(this).prop('checked')) {
            selectAll.prop('checked', false);
            // false 체크해제상태
            // .prop() - 요소의 속성 가져오거나 설정할때 사용하는 메서드
        }
    });
    // 삭제
    $('.delete').on('click', function () {
        // 체크박스들 순회
        checkBoxs.each(function () {
            // 현재 체크되어있다면
            if ($(this).prop('checked')) {
                $(this).closest('tr').remove();
            }
        });

        let totalRows = $('tbody tr').length;
        $('tbody tr').each(function (index) {
            $(this).find('td').eq(1).text(totalRows - index);
        });
        // 전체 선택된 체크박스들 선택 해제
        selectAll.prop('checked', false);

        // 체크박스 리스트 다시 선택
        checkBoxs = $('tbody input[type="checkbox"]');

    });
});