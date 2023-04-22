const infoStudent = {
    name: "Vũ Đức Hoàng", gender: "Nam", namVaoTruong: 2020, lop: "Kỹ thuật máy tính 01-K65",
    bacDaoTao: "Đại Học Đại Trà", khoaHoc: 65, chuongTrinh: "Kỹ thuật máy tính 2020", khoaVien: "Trường Công nghệ - Thông tin và Truyền Thông",
    mail: "hoang.vd204750@sis.hust.edu.vn", tinhTrang: "Học"
}





const showInfo = (infoStudent) => {
    document.getElementById('name').innerText = infoStudent.name;
    document.getElementById('gender').innerText = infoStudent.gender;
    document.getElementById('nam-vao-truong').innerText = infoStudent.namVaoTruong;
    document.getElementById('bac-dao-tao').innerText = infoStudent.bacDaoTao;
    document.getElementById('chuong-trinh').innerText = infoStudent.chuongTrinh;
    document.getElementById('tinh-trang').innerText = infoStudent.tinhTrang;
    document.getElementById('khoa-vien').innerText = infoStudent.khoaVien;
    document.getElementById('lop').innerText = infoStudent.lop;
    document.getElementById('khoa').innerText = infoStudent.khoaHoc;
    document.getElementById('mail').innerText = infoStudent.mail;

    document.getElementById('name-input').value = infoStudent.name;
    document.getElementById('gender-input').value = infoStudent.gender;
    document.getElementById('nam-vao-truong-input').value = infoStudent.namVaoTruong;
    document.getElementById('bac-dao-tao-input').value = infoStudent.bacDaoTao;
    document.getElementById('chuong-trinh-input').value = infoStudent.chuongTrinh;
    document.getElementById('tinh-trang-input').value = infoStudent.tinhTrang;
    document.getElementById('khoa-vien-input').value = infoStudent.khoaVien;
    document.getElementById('lop-input').value = infoStudent.lop;
    document.getElementById('khoa-input').value = infoStudent.khoaHoc;
    document.getElementById('mail-input').value = infoStudent.mail;

}

showInfo(infoStudent);

document.getElementById('btn-group').style.display = "none";


const inputList = document.getElementsByClassName('input-info')
for (inputItem of inputList) {
    inputItem.style.display = "none"
}


//click edit
const clickEdit = () => {
    document.getElementById('btn-group').style.display = "flex";
    const listInfo = document.getElementsByClassName("infoSV");
    for (info of listInfo) {
        info.style.display = "none";
    }
    for (inputItem of inputList) {
        inputItem.style.display = "block"
    }

}


//clickSubmit
const onOke = () => {
    document.getElementById('btn-group').style.display = "none";
    const infoChange = {
        name: document.getElementById('name-input').value,
        gender: document.getElementById('gender-input').value,
        namVaoTruong: document.getElementById('nam-vao-truong-input').value,
        lop: document.getElementById('lop-input').value,
        bacDaoTao: document.getElementById('bac-dao-tao-input').value,
        khoaHoc: document.getElementById('khoa-input').value,
        chuongTrinh: document.getElementById('chuong-trinh-input').value,
        khoaVien: document.getElementById('khoa-vien-input').value,
        mail: document.getElementById('mail-input').value,
        tinhTrang: document.getElementById('tinh-trang-input').value
    };
    console.log(infoChange);
    const listInfo = document.getElementsByClassName("infoSV");
    for (info of listInfo) {
        info.style.display = "inline-block";
    }
    for (inputItem of inputList) {
        inputItem.style.display = "none"
    }
    showInfo(infoChange);
}

//clickCancel
const onCancel = () => {
    document.getElementById('btn-group').style.display = "none";
    console.log(infoStudent);
    const listInfo = document.getElementsByClassName("infoSV");
    for (info of listInfo) {
        info.style.display = "inline-block";
    }
    for (inputItem of inputList) {
        inputItem.style.display = "none"
    }
}


//clickReset
const onReset = () => {
    document.getElementById('btn-group').style.display = "none";
    console.log(infoStudent);
    const listInfo = document.getElementsByClassName("infoSV");
    for (info of listInfo) {
        info.style.display = "inline-block";
    }
    for (inputItem of inputList) {
        inputItem.style.display = "none"
    }
    showInfo(infoStudent);
}