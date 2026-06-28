const desc = ["BMI (Body Mass Index) atau Indeks Massa Tubuh adalah metode untuk menilai apakah berat badan Anda berada dalam kisaran proporsional atau tidak. Angka ini didapatkan dari kalkulasi perbandingan antara berat badan dan tinggi badan.<br><br>Skor yang dihasilkan akan dikelompokkan ke dalam kategori berikut:<br>&middot; < 18,5: Berat badan kurang (Underweight)<br>&middot; 18,5 - 24,9: Berat badan normal / ideal<br>&middot; 25,0 - 29,9: Kelebihan berat badan (Overweight)<br>&middot; ≥ 30,0: Obesitas<br><br>Catatan: Standar Asia/Indonesia mungkin memiliki sedikit perbedaan batas, di mana angka 23,0 - 24,9 sudah dikategorikan sebagai kelebihan berat badan.",
    "BMR (Basal Metabolic Rate) adalah jumlah kalori minimum yang dibakar tubuh untuk bertahan hidup saat Anda beristirahat total, seperti bernapas dan memompa darah.<br><br>TDEE (Total Daily Energy Expenditure) adalah total kalori yang Anda bakar dalam sehari, dihitung dengan menambahkan kalori dari aktivitas fisik (olahraga, berjalan) pada angka BMR.<br><br>Mengetahui kedua angka ini membantu Anda merencanakan asupan kalori secara spesifik sesuai tujuan tubuh Anda:<br>&middot; Menurunkan Berat Badan (Defisit Kalori): Kurangi sekitar 300-500 kalori dari angka TDEE Anda, tetapi pastikan asupan tidak pernah turun di bawah angka BMR Anda agar metabolisme tidak terganggu.<br>&middot; Menaikkan Berat Badan (Surplus Kalori): Tambahkan sekitar 250-500 kalori di atas TDEE Anda."];
const btn_desc = ["BMR dan TDEE","BMI"];

const res_bmi = ["Nilai BMI anda adalah %.", "Anda masuk dalam kategori %.",
    "BMI Anda menunjukkan bahwa berat badan Anda berada di bawah rentang ideal. Kondisi ini dapat disebabkan oleh asupan kalori yang kurang, metabolisme yang tinggi, atau faktor kesehatan lainnya.",
    "BMI Anda berada dalam rentang ideal. Ini menunjukkan bahwa berat badan Anda secara umum sudah proporsional terhadap tinggi badan.",
    "BMI Anda menunjukkan bahwa berat badan Anda berada di atas rentang ideal. Kondisi ini dapat meningkatkan risiko berbagai penyakit apabila tidak dikelola dengan baik.",
    "BMI Anda berada pada kategori obesitas. Kondisi ini berkaitan dengan peningkatan risiko penyakit seperti diabetes, hipertensi, penyakit jantung, dan gangguan metabolisme lainnya."];
const res_bmi_cat = ["Kurus", "Normal", "Gemuk", "Obesitas"];
const res_bmi_saran = ["Tingkatkan asupan kalori secara bertahap dengan makanan bergizi seimbang, perbanyak konsumsi protein, dan lakukan latihan kekuatan untuk membantu meningkatkan massa otot. Jika berat badan sulit naik atau disertai keluhan kesehatan, pertimbangkan untuk berkonsultasi dengan tenaga medis.",
    "Pertahankan pola makan bergizi seimbang, rutin berolahraga minimal 150 menit per minggu, tidur yang cukup, dan lakukan pemeriksaan kesehatan secara berkala agar kondisi tubuh tetap optimal.",
    "Kurangi asupan kalori secara bertahap, batasi makanan tinggi gula dan lemak jenuh, tingkatkan aktivitas fisik, serta usahakan penurunan berat badan secara bertahap sekitar 0,25–0,5 kg per minggu.",
    "Terapkan pola makan sehat dengan pendampingan bila diperlukan, lakukan aktivitas fisik secara bertahap sesuai kemampuan, dan pertimbangkan untuk berkonsultasi dengan dokter atau ahli gizi guna mendapatkan program penurunan berat badan yang aman dan efektif."];
const res_bmr = "BMR Anda adalah sebesar % kkal per hari. Nilai ini menunjukkan estimasi jumlah energi minimum yang dibutuhkan tubuh untuk menjalankan fungsi-fungsi vital, seperti bernapas, menjaga detak jantung, mengatur suhu tubuh, serta mendukung kerja organ ketika tubuh berada dalam kondisi istirahat.";
const res_tdee = "Berdasarkan data fisik dan tingkat aktivitas yang dipilih, kebutuhan energi harian (TDEE) Anda diperkirakan sebesar % kkal per hari. Nilai ini merupakan estimasi jumlah kalori yang dibutuhkan untuk mempertahankan berat badan dengan pola aktivitas saat ini.";
const res_more_head = ["Rekomendasi Menurunkan Berat Badan", "Rekomendasi Mempertahankan Berat Badan", "Rekomendasi Menaikkan Berat Badan"];
const res_more_child = ["Untuk menurunkan berat badan secara bertahap dan sehat, disarankan mengurangi asupan kalori sekitar 300 - 500 kkal per hari dari nilai TDEE. Penurunan kalori yang terlalu besar dapat meningkatkan rasa lapar, mengurangi massa otot, dan lebih sulit dipertahankan dalam jangka panjang.",
    "Untuk mempertahankan berat badan saat ini, usahakan mengonsumsi kalori mendekati nilai TDEE setiap hari. Menjaga pola makan yang seimbang dan aktivitas fisik secara rutin dapat membantu mempertahankan komposisi tubuh dan kesehatan secara keseluruhan.",
    "Untuk menaikkan berat badan secara bertahap, disarankan menambah asupan kalori sekitar 250 - 400 kkal per hari di atas nilai TDEE. Surplus kalori yang dikombinasikan dengan asupan protein yang cukup dan latihan kekuatan dapat membantu meningkatkan massa otot secara lebih optimal. Prioritaskan makanan tinggi protein seperti ayam, ikan, telur, susu, tahu, dan tempe untuk mendukung pembentukan massa otot. Lengkapi dengan sumber karbohidrat kompleks, lemak sehat, serta latihan kekuatan secara rutin agar kenaikan berat badan lebih optimal."];
const res_more_child2 = [["Prioritaskan makanan tinggi protein.", "Perbanyak sayur dan buah.", "Kurangi minuman manis.", "Tetap lakukan aktivitas fisik.", "Targetkan penurunan sekitar 0,25 - 0,75 kg per minggu."],
    ["Konsumsi makanan dengan gizi seimbang.", "Pertahankan aktivitas fisik rutin.", "Tidur cukup.", "Pantau berat badan setiap beberapa minggu."],
    ["Tambahkan sumber protein berkualitas.", "Makan lebih sering jika sulit menghabiskan porsi besar.", "Pilih makanan padat nutrisi.", "Lakukan latihan beban 2 - 4 kali per minggu.", "Targetkan kenaikan sekitar 0,25 - 0,5 kg per minggu."]];

var bool_content = false;
var selectedValue = null;
var has_bmi = 0;

const main_init = document.getElementsByClassName("init");
const main_slider = document.getElementById("mid_slider");
const main_txt_head = document.getElementById("mid_slider_head");
const main_txt_desc = document.getElementById("mid_slider_content");
const main_btn_slide = document.getElementById("mid_btn_slide");
const main_slider_result = document.getElementById("mid_slider_result");
const m_inp_mass = document.querySelectorAll("#mid_inp_mass");
const m_inp_height = document.querySelectorAll("#mid_inp_height");
const m_inp_age = document.getElementById("mid_inp_age");
const m_button = document.querySelectorAll(".btn-input");
const m_radio = document.querySelectorAll('input[type="radio"]');
const main_dropdown = document.getElementById("mid_dropdown_act");
const main_selected = document.querySelector(".dropdown-selected");
const main_items = document.querySelectorAll(".dropdown-item");
const main_popup = document.getElementById("mid_more_group");

main_btn_slide.addEventListener('click', () => {
    bool_content = !bool_content;
    refreshContent();
});

main_selected.addEventListener("click", ()=> {
    main_dropdown.classList.toggle("active");
});

main_items.forEach(item => {
    item.addEventListener("click", ()=> {
        main_selected.childNodes[0].textContent = item.textContent.substring(0, item.innerHTML.indexOf("<br>"));
        selectedValue = item.dataset.value;
        main_dropdown.classList.remove("active");
    });
});

document.addEventListener("click", (e)=> {
    if(!main_dropdown.contains(e.target)){
        main_dropdown.classList.remove("active");
    }
});

m_button.forEach(ele => {
    ele.addEventListener('click', () => {
        let v_mass = Number(m_inp_mass[Number(bool_content)].value);
        let v_height = Number(m_inp_height[Number(bool_content)].value);
        let v_age = Number(m_inp_age.value);
        if(v_mass == "" || v_height == "" || ((bool_content && selectedValue == null) || (bool_content && v_age == ""))) {
            alert("Harap masukkan semua kolom field!");
            return;
        }

        updateText(main_txt_desc, "");
        main_slider_result.style.opacity = 1;
        if(!bool_content) {
            let v_bmi = (v_mass / ((v_height / 100) * (v_height / 100))).toFixed(2);
            let v_bmi_cat = getBMICategory(v_bmi);
            let str_res = res_bmi[0].replace("%", v_bmi) + " " + res_bmi[1].replace("%", res_bmi_cat[v_bmi_cat]) + "<br>" + res_bmi[v_bmi_cat + 2] + "<br><br>Saran:<br>" + res_bmi_saran[v_bmi_cat];
            main_slider_result.innerHTML = str_res;
            has_bmi = v_bmi;
        } else {
            let v_factor_tdee = selectedValue;
            let v_gender = 0;
            m_radio.forEach(radio => {
                if(radio.checked) v_gender = Number(radio.value);
            });

            let v_bmr = ((10 * v_mass) + (6.25 * v_height) - (5 * v_age) + (Boolean(v_gender) ? -161:5)).toFixed(2);
            let v_tdee = (v_bmr * v_factor_tdee).toFixed(2);
            let str_res = res_bmr.replace("%", v_bmr) + "<br><br>" + res_tdee.replace("%", v_tdee) + `<br><br><a onclick='openmorebmr(${v_bmr}, ${v_tdee})'>Baca Selengkapnya...</a>`;
            main_slider_result.innerHTML = str_res;
        }
    });
});

function refreshContent() {
    main_slider.style.left = (bool_content) ? 0:main_slider.getBoundingClientRect().width + "px";
    main_slider.style.borderRadius = (bool_content) ? "16px 0px 0px 16px":"0px 16px 16px 0px";
    main_init[1].style.opacity = Number(bool_content);
    main_init[0].style.opacity = Number(!bool_content);
    updateText(main_txt_head, (bool_content) ? "BMR & TDEE":"BMI");
    updateText(main_txt_desc, desc[Number(bool_content)]);
    updateText(main_btn_slide, btn_desc[Number(bool_content)]);
    main_slider_result.style.opacity = 0;
    selectedValue = null;
    main_selected.childNodes[0].textContent = "Pilih Kategori Kegiatan";

    m_inp_age.value = "";
    m_inp_mass.forEach(ele => {
        ele.value = "";
    });

    m_inp_height.forEach(ele => {
        ele.value = "";
    });
}

function openmorebmr(bmr, tdee) {
    main_popup.style.opacity = 1;
    main_popup.style.visibility = "visible";
    let head_child = document.getElementsByClassName("more-header")[0].childNodes;
    head_child[1].innerHTML = `BMR<br>Nilai anda ${bmr} kkal`;
    head_child[3].innerHTML = `TDEE<br>Nilai anda ${tdee} kkal`;
    let child_desc = "";
    let rec = 0;
    switch(getBMICategory(has_bmi)) {
        case 0: rec = 2;
            break;
        case 1: rec = 1;
            break;
        case 2: rec = 0;
            break;
        default: rec = 0;
    }

    for(let i = 0;i < res_more_head.length;i++) {
        child_desc = child_desc + "<h1>" + res_more_head[i] + ((has_bmi > 0) ? ((rec == i) ? " (Disarankan)":""):"") + "</h1><br>" + res_more_child[i] + "<br><br>Saran :<br>";
        for(let j = 0;j < res_more_child2[i].length;j++) {
            child_desc = child_desc + "&middot; " + res_more_child2[i][j] + "<br>";
        }

        child_desc = child_desc + "<br>";
    }

    document.getElementById("mid_more_content").innerHTML = child_desc;
}

function closepopup() {
    main_popup.style.opacity = 0;
    main_popup.style.visibility = "hidden";
}

function getBMICategory(value) {
    if(value < 18.5) return 0;
    else if(value >= 18.5 && value < 25) return 1;
    else if(value >= 25 && value < 30) return 2;
    else return 3;
}

function updateText(element, value) {
  const fadeOut = element.animate([{ opacity: 1}, { opacity: 0}], {
    duration: 125,
    fill: 'forwards'
  });

  fadeOut.onfinish = () => {
    element.innerHTML = value;
    element.animate([{ opacity: 0}, { opacity: 1}], {
      duration: 125,
      fill: 'forwards'
    });
  };
}

function filterExponential(event) {
    if (['e', 'E', '+', '-'].includes(event.key)) {
        event.preventDefault();
    }
}

function filterDecimal(event) {
    if (['.', ',', 'e', 'E', '+', '-'].includes(event.key)) {
        event.preventDefault();
    }
}

refreshContent();

let previousWidth = window.innerWidth;
document.getElementsByClassName("blocker")[0].style.display = (window.innerWidth < 501) ? "block":"none";
window.addEventListener('resize', () => {
    if (window.innerWidth !== previousWidth) {
        document.getElementsByClassName("blocker")[0].style.display = (window.innerWidth < 501) ? "block":"none";
    }
});