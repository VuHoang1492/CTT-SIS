let countBlock = 0; // id for blocks
let countInfo = 0;  // id for info item




// delete group info
const onDelete = (obj) => {
    const i = prompt("VŨ ĐỨC HOÀNG 20204750 -- NHẬP CONFIRM ĐỂ XÓA!!");
    if (i === null) return;
    if (i === "CONFIRM") {
        const objParent = obj.parentElement.parentElement.parentElement;
        document.getElementById("block-parent").removeChild(objParent);
        return;
    }
    alert("Nhập sai! Vui lòng nhập lại!");
}



//add group info
const addGroupitem = () => {
    const cloneItem = document.getElementById("block-default").cloneNode(true);
    document.getElementById("block-parent").appendChild(cloneItem);
    cloneItem.id = `block-${countBlock}`;
    ++countBlock;
}

//add info item
const addInfoItem = (obj) => {
    const infoClone = document.getElementById('info-default').cloneNode(true);
    infoClone.id = `info-${countInfo}`
    countInfo++;
    const objParent = obj.parentElement.parentElement.parentElement;
    const content = objParent.getElementsByClassName('content');
    content[0].appendChild(infoClone);
}

//delete info item
const onDeleteInfo = (obj) => {
    const i = prompt("VŨ ĐỨC HOÀNG 20204750 -- NHẬP CONFIRM ĐỂ XÓA!!");
    if (i === null) return;
    if (i === "CONFIRM") {
        const itemToDel = obj.parentElement.parentElement;
        const content = obj.parentElement.parentElement.parentElement;
        content.removeChild(itemToDel);
        return;
    }
    alert("Nhập sai! Vui lòng nhập lại!");
}


//handle change title
const handleChangeTitle = (obj) => {
    const parent = obj.parentElement;
    const title = parent.getElementsByClassName('info-title');
    const inputGroup = parent.getElementsByClassName('group-input');
    const input = parent.getElementsByClassName('input-title');


    title[0].style.display = 'none';
    inputGroup[0].style.display = 'block';

    input[0].value = title[0].innerHTML;
}

const onCancelChangeTitle = (obj) => {
    const parent = obj.parentElement.parentElement;
    const title = parent.getElementsByClassName('info-title');
    const inputGroup = parent.getElementsByClassName('group-input');


    title[0].style.display = 'block';
    inputGroup[0].style.display = 'none';
}

const onSubmitChangeTitle = (obj) => {
    const parent = obj.parentElement.parentElement;
    const title = parent.getElementsByClassName('info-title');
    const inputGroup = parent.getElementsByClassName('group-input');
    const input = parent.getElementsByClassName('input-title');

    title[0].innerHTML = input[0].value;

    title[0].style.display = 'block';
    inputGroup[0].style.display = 'none';
}


//change info item
const onChangeInfoName = (obj) => {
    const parent = obj.parentElement;
    const inputGroup = parent.getElementsByClassName('group-input-name');
    const label = parent.getElementsByTagName('i');

    inputGroup[0].style.display = 'block';
    label[0].style.display = 'none';
}

const onChangeInfoValue = (obj) => {
    const parent = obj.parentElement;
    const inputGroup = parent.getElementsByClassName('group-input-value');
    const value = parent.getElementsByTagName('strong');

    inputGroup[0].style.display = 'block';
    value[0].style.display = 'none';
}

const onCancelChangeInfoName = (obj) => {
    const parent = obj.parentElement.parentElement;
    const inputGroup = parent.getElementsByClassName('group-input-name');
    const label = parent.getElementsByTagName('i');

    inputGroup[0].style.display = 'none';
    label[0].style.display = 'block';
}

const onSubmitChangeInfoName = (obj) => {
    const parent = obj.parentElement.parentElement;
    const inputGroup = parent.getElementsByClassName('group-input-name');
    const label = parent.getElementsByTagName('i');
    const input = parent.getElementsByClassName('input-info-name');
    label[0].innerText = input[0].value;

    inputGroup[0].style.display = 'none';
    label[0].style.display = 'block';

}


const onCancelChangeInfoValue = (obj) => {
    const parent = obj.parentElement.parentElement;
    const inputGroup = parent.getElementsByClassName('group-input-value');
    const value = parent.getElementsByTagName('strong');

    inputGroup[0].style.display = 'none';
    value[0].style.display = 'block';
}

const onSubmitChangeInfoValue = (obj) => {
    const parent = obj.parentElement.parentElement;
    const inputGroup = parent.getElementsByClassName('group-input-value');
    const value = parent.getElementsByTagName('strong');
    const input = parent.getElementsByClassName('input-info-value');
    value[0].innerText = input[0].value;

    inputGroup[0].style.display = 'none';
    value[0].style.display = 'block';
}



//export pdf

$("body").on("click", "#btnExport", function () {
    $('button').hide();

    html2canvas($('#block-parent')[0], {
        onrendered: function (canvas) {

            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 550
                }]
            };
            pdfMake.createPdf(docDefinition).download("SinhVien.pdf");
        }
    });

    setTimeout(() => {
        $('button').show()
    }, 100);
});





