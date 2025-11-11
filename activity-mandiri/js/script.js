function fn_ValForm() {
    var sMsg = "";
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (email == "") {
        sMsg += "\n* Anda belum mengisikan email";
    }
    if (message == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }

    var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Format email tidak valid!");
        return false;
    }

    alert("Pesan berhasil dikirim!");
    return true;
}
