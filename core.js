const key_theme = "limitless-theme";
const txt_header = ["Beranda", "BMI", "BMR dan TDEE", "Tentang"];
const txt_home = ["<h2>BMI</h2><br><strong>BMI (Body Mass Index)</strong> atau Indeks Massa Tubuh (IMT) adalah metode skrining kesehatan yang digunakan untuk menilai apakah berat badan Anda proporsional terhadap tinggi badan. Pengukuran ini memberikan estimasi cepat mengenai total lemak dalam tubuh.<br><br><strong>Rumus Perhitungan</strong><br>BMI dihitung dengan membagi berat badan (dalam kilogram) dengan kuadrat tinggi badan (dalam meter).", "<strong>Kategori BMI untuk Orang Dewasa (Standar WHO / Kemenkes)</strong><br>Berdasarkan pedoman umum, hasil perhitungan BMI dikelompokkan ke dalam kategori berikut:<br>&middot; < 18,5: Berat badan kurang (Underweight)<br>&middot; 18,5 - 24,9: Berat badan normal / ideal<br>&middot; 25,0 - 29,9: Kelebihan berat badan (Overweight)<br>&middot; ≥ 30,0: Obesitas<br><br><strong>Catatan Penting</strong><br>Meskipun praktis, BMI adalah alat skrining dan bukan alat diagnosis. Angka ini tidak memperhitungkan massa otot, kepadatan tulang, usia, atau jenis kelamin. Oleh karena itu, atlet binaraga atau ibu hamil mungkin memiliki nilai BMI tinggi meski sehat, karena massa otot atau berat janin yang diukur.", "<br><h2>BMR</h2><br><strong>BMR (Basal Metabolic Rate)</strong> atau Angka Metabolisme Basal (AMB) adalah jumlah kalori minimum yang dibutuhkan tubuh untuk menjalankan fungsi dasar saat istirahat total. Fungsi vital ini meliputi bernapas, memompa darah, mengatur suhu tubuh, dan kerja organ lainnya.<br><br><strong>Rumus Perhitungan</strong><br>Untuk menghitung BMR secara ilmiah, biasanya digunakan Persamaan Mifflin-St Jeor:", "<strong>Faktor yang Mempengaruhi BMR</strong><br>Berapa angka BMR Anda tidak bersifat mutlak dan dipengaruhi oleh beberapa faktor:<br>&middot; <strong>Usia:</strong> BMR cenderung menurun seiring bertambahnya usia karena melambatnya metabolisme.<br>&middot; <strong>Jenis Kelamin:</strong> Pria umumnya memiliki BMR lebih tinggi dibandingkan wanita karena massa otot yang lebih besar.<br>&middot; <strong>Komposisi Tubuh:</strong> Semakin banyak massa otot yang Anda miliki, semakin tinggi pula BMR karena otot membakar lebih banyak kalori saat istirahat dibandingkan lemak.<br>&middot; <strong>Genetika:</strong> Faktor bawaan turut menentukan laju metabolisme seseorang.<br>&middot; <strong>Kondisi Medis:</strong> Kondisi seperti demam, stres, atau gangguan tiroid dapat meningkatkan BMR.", "<br><h2>TDEE</h2><br><strong>TDEE atau Total Daily Energy Expenditure</strong> adalah total estimasi jumlah kalori yang dibakar tubuh Anda dalam satu hari, mencakup fungsi metabolisme dasar, pencernaan makanan, hingga aktivitas fisik dan olahraga. Pengetahuan ini sangat penting untuk mengatur pola makan. Jika Anda mengonsumsi kalori di atas TDEE, berat badan akan naik, namun sebaliknya, jika di bawah TDEE, berat badan akan turun.<br><br><strong>Cara Menghitung TDEE</strong><br>Untuk mendapatkan angka TDEE, Anda harus menghitung BMR terlebih dahulu, lalu mengalikannya dengan tingkat aktivitas fisik harian Anda.","<strong>Manfaat Mengetahui TDEE</strong><br>&middot; Menurunkan Berat Badan: Makan dengan jumlah kalori ≈ 300 - 500 kalori di bawah TDEE (defisit kalori).<br>&middot; Menambah Berat Badan/Massa Otot: Makan dengan jumlah kalori ≈ 300 - 500 kalori di atas TDEE (surplus kalori).<br>&middot; Mempertahankan Berat Badan: Makan dengan jumlah kalori yang sama persis dengan angka TDEE Anda.<br><br>"];
const txt_about = ["<strong><h2>Limbomass APP</h2></strong><br><br><strong>Limbomass App</strong> adalah aplikasi web yang dirancang untuk membantu Anda memahami kondisi tubuh melalui perhitungan indeks massa tubuh (Body Mass Index / BMI), kebutuhan energi dasar (Basal Metabolic Rate / BMR), dan total kebutuhan kalori harian (Total Daily Energy Expenditure / TDEE). Dengan antarmuka yang sederhana, responsif, dan mudah digunakan, Limbomass App dapat diakses melalui berbagai perangkat dan web browser tanpa memerlukan instalasi aplikasi tambahan. Aplikasi ini mengutamakan pengalaman pengguna dengan tampilan minimalis yang tetap dilengkapi fitur-fitur penting, sehingga proses perhitungan menjadi cepat, nyaman, dan mudah dipahami.<br><br>Changelog:",
    "<strong>v2.260711</strong><br>&middot; Kini warna tema aplikasi dapat diganti.<br>&middot; Peningkatan perfoma.<br>&middot; Perbaikan bug pada beberapa komponen.",
    "<strong>v2.260705</strong><br>&middot; Tampilan UI yang lebih fresh.<br>&middot; Penambahan tampilan rumus untuk setiap perhitungan.<br>&middot; Perbaikan bug pada beberapa komponen.<br>&middot; Migrasi besar pada system aplikasi sebelumnya.",
    "<strong>v1.260627</strong><br>&middot; Penambahan fitur BMI, BMR, dan TDEE.<br>&middot; Penyempurnaan kompatibilas.<br>&middot; First launcing and hosting."
];

const res_bmi = ["Nilai BMI anda adalah <strong>%</strong>.", "Anda masuk dalam kategori <strong>%</strong>.",
    "BMI Anda menunjukkan bahwa berat badan Anda berada di bawah rentang ideal. Kondisi ini dapat disebabkan oleh asupan kalori yang kurang, metabolisme yang tinggi, atau faktor kesehatan lainnya.",
    "BMI Anda berada dalam rentang ideal. Ini menunjukkan bahwa berat badan Anda secara umum sudah proporsional terhadap tinggi badan.",
    "BMI Anda menunjukkan bahwa berat badan Anda berada di atas rentang ideal. Kondisi ini dapat meningkatkan risiko berbagai penyakit apabila tidak dikelola dengan baik.",
    "BMI Anda berada pada kategori obesitas. Kondisi ini berkaitan dengan peningkatan risiko penyakit seperti diabetes, hipertensi, penyakit jantung, dan gangguan metabolisme lainnya."];
const res_bmi_cat = ["Kurus", "Normal", "Gemuk", "Obesitas"];
const res_bmi_saran = ["Tingkatkan asupan kalori secara bertahap dengan makanan bergizi seimbang, perbanyak konsumsi protein, dan lakukan latihan kekuatan untuk membantu meningkatkan massa otot. Jika berat badan sulit naik atau disertai keluhan kesehatan, pertimbangkan untuk berkonsultasi dengan tenaga medis.",
    "Pertahankan pola makan bergizi seimbang, rutin berolahraga minimal 150 menit per minggu, tidur yang cukup, dan lakukan pemeriksaan kesehatan secara berkala agar kondisi tubuh tetap optimal.",
    "Kurangi asupan kalori secara bertahap, batasi makanan tinggi gula dan lemak jenuh, tingkatkan aktivitas fisik, serta usahakan penurunan berat badan secara bertahap sekitar 0,25-0,5 kg per minggu.",
    "Terapkan pola makan sehat dengan pendampingan bila diperlukan, lakukan aktivitas fisik secara bertahap sesuai kemampuan, dan pertimbangkan untuk berkonsultasi dengan dokter atau ahli gizi guna mendapatkan program penurunan berat badan yang aman dan efektif."];
const res_bmr = "<strong>BMR</strong> Anda adalah sebesar <strong>%</strong> kkal per hari. Nilai ini menunjukkan estimasi jumlah energi minimum yang dibutuhkan tubuh untuk menjalankan fungsi-fungsi vital, seperti bernapas, menjaga detak jantung, mengatur suhu tubuh, serta mendukung kerja organ ketika tubuh berada dalam kondisi istirahat.";
const res_tdee = "Berdasarkan data fisik dan tingkat aktivitas yang dipilih, kebutuhan energi harian <strong>(TDEE)</strong> Anda diperkirakan sebesar <strong>%</strong> kkal per hari. Nilai ini merupakan estimasi jumlah kalori yang dibutuhkan untuk mempertahankan berat badan dengan pola aktivitas saat ini.";
const res_more_head = ["Rekomendasi Menaikkan Berat Badan", "Rekomendasi Mempertahankan Berat Badan", "Rekomendasi Menurunkan Berat Badan"];
const res_more_child = [
    "Untuk menaikkan berat badan secara bertahap, disarankan menambah asupan kalori sekitar 250 - 400 kkal per hari di atas nilai TDEE. Surplus kalori yang dikombinasikan dengan asupan protein yang cukup dan latihan kekuatan dapat membantu meningkatkan massa otot secara lebih optimal. Prioritaskan makanan tinggi protein seperti ayam, ikan, telur, susu, tahu, dan tempe untuk mendukung pembentukan massa otot. Lengkapi dengan sumber karbohidrat kompleks, lemak sehat, serta latihan kekuatan secara rutin agar kenaikan berat badan lebih optimal.",
    "Untuk mempertahankan berat badan saat ini, usahakan mengonsumsi kalori mendekati nilai TDEE setiap hari. Menjaga pola makan yang seimbang dan aktivitas fisik secara rutin dapat membantu mempertahankan komposisi tubuh dan kesehatan secara keseluruhan.",
    "Untuk menurunkan berat badan secara bertahap dan sehat, disarankan mengurangi asupan kalori sekitar 300 - 500 kkal per hari dari nilai TDEE. Penurunan kalori yang terlalu besar dapat meningkatkan rasa lapar, mengurangi massa otot, dan lebih sulit dipertahankan dalam jangka panjang."];
const res_more_child2 = [
    ["Tambahkan sumber protein berkualitas.", "Makan lebih sering jika sulit menghabiskan porsi besar.", "Pilih makanan padat nutrisi.", "Lakukan latihan beban 2 - 4 kali per minggu.", "Targetkan kenaikan sekitar 0,25 - 0,5 kg per minggu."],
    ["Konsumsi makanan dengan gizi seimbang.", "Pertahankan aktivitas fisik rutin.", "Tidur cukup.", "Pantau berat badan setiap beberapa minggu."],
    ["Prioritaskan makanan tinggi protein.", "Perbanyak sayur dan buah.", "Kurangi minuman manis.", "Tetap lakukan aktivitas fisik.", "Targetkan penurunan sekitar 0,25 - 0,75 kg per minggu."]];

var isMale = true;
var selectedValue = null;
var indexPage = 0;
const main_colors = ["#0f85fa", "#c25e7f", "#60c25e"];
const root = document.documentElement;
const main_text_home = document.getElementById("main_text_home");
const main_theme = document.getElementsByClassName("mdi--color")[0];
const main_theme_panel = document.getElementById("main_theme");
const main_theme_child = document.querySelectorAll(".theme-child");
const sec_pages  = document.querySelectorAll(".page");
const nav_bar = document.querySelector(".navbar");
const nav_links = nav_bar.querySelectorAll(".nav-link");
const main_header = document.getElementById("main_text_heading");
const m_inp_mass = document.querySelectorAll("#mid_inp_mass");
const m_inp_height = document.querySelectorAll("#mid_inp_height");
const m_inp_age = document.getElementById("mid_inp_age");
const m_inp_gender = document.querySelectorAll(".radio");
const main_dropdown = document.getElementById("mid_dropdown_act");
const main_selected = document.querySelector(".dropdown-selected");
const main_items = document.querySelectorAll(".dropdown-item");
const main_bottom_sheet = document.getElementById("main_bottom_sheet");
const main_bottom_panel = document.getElementById("main_bottom_panel");
const main_button = document.querySelectorAll(".btn-light");
const main_bottom_close = document.getElementsByClassName("close")[0];
const main_panel_result = document.getElementById("main_panel_result");

updateText(main_header, txt_header[0]);
nav_links.forEach((nav_link, index) => {
    nav_link.addEventListener("click", function() {
        sec_pages.forEach(page => {
            page.classList.remove("active");
        })

        nav_bar.querySelector(".nav-link.active").classList.remove("active");
        this.classList.add("active");
        nav_bar.querySelector(".nav-indicator").style.translate = `${index * 100}% 0`;
        sec_pages[index].classList.add("active");
        updateText(main_header, txt_header[index]);
        indexPage = index;
    })
})

main_button.forEach(button => {
    button.addEventListener("click", () => {
        main_panel_result.replaceChildren();
        if(calculate(indexPage - 1)) {
            main_bottom_sheet.classList.toggle("visible");
            main_bottom_panel.style.transform = "translateY(0)";
        } else alert("Harap Masukkan semua kolom yang telah disediakan!");
    })
})

main_bottom_close.addEventListener("click", () => {
    main_bottom_sheet.classList.remove("visible");
    main_bottom_panel.style.transform = "translateY(100%)";
})

function calculate(code) {
    let v_mass = Number(m_inp_mass[code].value);
    let v_height = Number(m_inp_height[code].value);
    let v_age = Number(m_inp_age.value);
    let head = document.createElement("h1");
    let bodyres = document.createElement("p");
    if(v_mass == "" || v_height == "") return false;

    let v_bmi = (v_mass / ((v_height / 100) * (v_height / 100))).toFixed(2);
    let v_bmi_cat = getBMICategory(v_bmi);

    if(code == 0) {
        head.innerText = "BMI";
        let str_res = res_bmi[0].replace("%", v_bmi) + " " + res_bmi[1].replace("%", res_bmi_cat[v_bmi_cat]) + "<br>" + res_bmi[v_bmi_cat + 2] + "<br><br>Saran:<br>" + res_bmi_saran[v_bmi_cat];
        bodyres.innerHTML = str_res;
    } else if(code == 1) {
        if(v_mass == "" || v_height == "" || selectedValue == null || v_age == "") return false;

        head.innerText = "BMR & TDEE";
        if(v_bmi_cat > 2) v_bmi_cat = v_bmi_cat - 1;
        let v_factor_tdee = selectedValue;
        let v_gender = isMale;
        let v_bmr = ((10 * v_mass) + (6.25 * v_height) - (5 * v_age) + (!v_gender ? -161:5)).toFixed(2);
        let v_tdee = (v_bmr * v_factor_tdee).toFixed(2);
        let str_res = res_bmr.replace("%", v_bmr) + "<br><br>" + res_tdee.replace("%", v_tdee) + "<br><br><strong>" + res_more_head[v_bmi_cat] + "</strong><br>" + res_more_child[v_bmi_cat] + "<br>";
        for(let i = 0;i < res_more_child2[v_bmi_cat].length;i++) {
            str_res = str_res + "&middot; " + res_more_child2[v_bmi_cat][i] + "<br>";
        }

        bodyres.innerHTML = str_res;
    }

    main_panel_result.appendChild(head);
    main_panel_result.appendChild(bodyres);
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    const formula_bmi = "\\mathrm{BMI} = \\frac{\\text{Berat Badan (kg)}}{\\left(\\text{Tinggi Badan (m)}\\right)^2}";
    const formula_bmr = `
        \\begin{aligned}
        \\mathrm{BMR} &= 10m + 6.25h - 5a + s \\\\[8pt]
        m &= \\text{Berat badan (kg)} \\\\
        h &= \\text{Tinggi badan (cm)} \\\\
        a &= \\text{Usia (tahun)} \\\\
        s &=
        \\begin{cases}
        5, & \\text{Pria} \\\\
        -161, & \\text{Wanita}
        \\end{cases}
        \\end{aligned}
        `;

    const formula_tdee = String.raw`
        \begin{array}{l}
        \mathrm{TDEE}=\mathrm{BMR}\times AF \\[10pt]

        AF=
        \begin{cases}
        1.2 & \text{Sangat jarang berolahraga}\\
        1.375 & \text{Olahraga ringan 1--3 hari/minggu}\\
        1.55 & \text{Olahraga sedang 3--5 hari/minggu}\\
        1.725 & \text{Olahraga berat 6--7 hari/minggu}\\
        1.9 & \text{Aktivitas fisik sangat tinggi}
        \end{cases}
        \end{array}
        `;
    
    let factor = 0;
    for(let i = 0;i < (txt_home.length + 3);i++) {
        const tmp = document.createElement("p");
        if(i == 1) {
            factor++;
            tmp.style.marginLeft = "34px";
            katex.render(formula_bmi, tmp, {
                throwOnError: false
            });
        } else if(i == 4) {
            factor++;
            tmp.style.scale = ".9";
            katex.render(formula_bmr, tmp, {
                throwOnError: false
            });
        } else if(i == 7) {
            factor++;
            tmp.className = "formula";
            katex.render(formula_tdee, tmp, {
                throwOnError: false
            });
        } else tmp.innerHTML = txt_home[i - factor];
        main_text_home.appendChild(tmp);
    }
});

main_selected.addEventListener("click", () => {
    main_dropdown.classList.toggle("active");
});

main_items.forEach(item => {
    item.addEventListener("click", () => {
        main_selected.childNodes[0].textContent = item.textContent.substring(0, item.innerHTML.indexOf("<br>"));
        selectedValue = item.dataset.value;
        main_dropdown.classList.remove("active");
    });
});

document.addEventListener("click", (e)=> {
    if(!main_dropdown.contains(e.target)){
        main_dropdown.classList.remove("active");
    }

    if(!main_theme.contains(e.target)){
        main_theme_panel.classList.remove("visible");
    }
});

m_inp_gender.forEach((sex, index) => {
    sex.addEventListener("click", function() {
        if((isMale && index == 0) || (!isMale && index == 1)) return;
        m_inp_gender[Number(isMale)].classList.add("active");
        m_inp_gender[Number(!isMale)].classList.remove("active");
        isMale = !isMale;
    })
})

m_inp_age.addEventListener('input', function (e) {
    this.value = this.value.replace(/[^\d]/g, '');
});

m_inp_height.forEach((ele, index) => {
    ele.addEventListener('input', function (e) {
        this.value = this.value.replace(/[^\d]/g, '');
        m_inp_height[(index == 0) ? 1:0].value = ele.value;
    });
})

m_inp_mass.forEach((ele, index) => {
    ele.addEventListener('input', function (e) {
        let found = false;
        if(this.value.charAt(0) == "," || this.value.charAt(0) == ".") this.value = "";
        this.value = this.value.replace(/[.,]/g, (match) => {
            if(!found) {
                found = true;
                return match;
            }
            return '';
        })

        this.value = this.value.replace(/[^\d.,]/g, '');
        m_inp_mass[(index == 0) ? 1:0].value = ele.value;
    });
})

function getBMICategory(value) {
    if(value < 18.5) return 0;
    else if(value >= 18.5 && value < 25) return 1;
    else if(value >= 25 && value < 30) return 2;
    else return 3;
}

let auth = document.getElementById("main_text_author");
let ele = document.getElementById("main_text_about");
const author = "© Limitless Studio 2026.<br>Make a Something Awesome!<br><br>Akmal Giriyanto";
for(let i = 0;i < txt_about.length;i++) {
    let tmp = document.createElement("p");
    tmp.innerHTML = txt_about[i];
    ele.appendChild(tmp);
}
auth.innerHTML = author;

function updateText(element, value) {
    const fadeOut = element.animate([{ opacity: 1}, { opacity: 0}], {
        duration: 250,
        fill: 'forwards'
    });

    fadeOut.onfinish = () => {
        element.innerHTML = value;
        element.animate([{ opacity: 0}, { opacity: 1}], {
            duration: 250,
            fill: 'forwards'
        });
    };
}

managetheme();
main_theme.addEventListener("click", function() {
    main_theme_panel.classList.toggle("visible");
})

main_theme_child.forEach((color, index) => {
    color.addEventListener("click", function() {
        root.style.setProperty('--col-primary', main_colors[index]);
        main_theme_panel.classList.remove("visible");
        localStorage.setItem(key_theme, index);
        managetheme();
    })
})

function managetheme() {
    let tmp_theme = localStorage.getItem(key_theme);
    main_theme_child.forEach(col => {
        col.classList.remove("active");
    })

    if(tmp_theme != null) {
        main_theme_child[tmp_theme].classList.add("active");
        root.style.setProperty('--col-primary', main_colors[tmp_theme]);
    } else main_theme_child[0].classList.add("active");
}