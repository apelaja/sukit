// Application Logic for Mambal Medical Care
document.addEventListener('DOMContentLoaded', () => {
    // Set default dates to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tanggalLahir').value = '1995-05-14';
    document.getElementById('mulaiTanggal').value = today;
    document.getElementById('tanggalSurat').value = today;

    // DOM Elements
    const noSurat = document.getElementById('noSurat');
    const nama = document.getElementById('nama');
    const tempatLahir = document.getElementById('tempatLahir');
    const tanggalLahir = document.getElementById('tanggalLahir');
    const umur = document.getElementById('umur');
    const alamat = document.getElementById('alamat');
    const pekerjaan = document.getElementById('pekerjaan');
    const diagnosa = document.getElementById('diagnosa');
    const lamaSakit = document.getElementById('lamaSakit');
    const mulaiTanggal = document.getElementById('mulaiTanggal');
    const sampaiTanggal = document.getElementById('sampaiTanggal');
    const kotaSurat = document.getElementById('kotaSurat');
    const tanggalSurat = document.getElementById('tanggalSurat');
    const dokter = document.getElementById('dokter');

    // Output Elements
    const outNo = document.getElementById('outNo');
    const outNama = document.getElementById('outNama');
    const outTTL = document.getElementById('outTTL');
    const outUmur = document.getElementById('outUmur');
    const outAlamat = document.getElementById('outAlamat');
    const outPekerjaan = document.getElementById('outPekerjaan');
    const outDiagnosa = document.getElementById('outDiagnosa');
    const outLama = document.getElementById('outLama');
    const outMulai = document.getElementById('outMulai');
    const outSampai = document.getElementById('outSampai');
    const outKotaTgl = document.getElementById('outKotaTgl');
    const outDokter = document.getElementById('outDokter');
    const markL = document.getElementById('markL');
    const markP = document.getElementById('markP');

    // Set initial sample values
    nama.value = 'I Kadek Fajar Januarta';
    tempatLahir.value = 'Denpasar';
    alamat.value = 'Br. Samu, Mekar Bhuwana, Abiansemal, Badung';
    pekerjaan.value = 'Pegawai Swasta';
    diagnosa.value = 'Common Cold / Febris';

    // Calculate age and end date
    function calculateAge(dob) {
        if (!dob) return 0;
        const birthDate = new Date(dob);
        const todayDate = new Date();
        let age = todayDate.getFullYear() - birthDate.getFullYear();
        const m = todayDate.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && todayDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 0 ? age : 0;
    }

    function formatDateIndo(dateStr) {
        if (!dateStr) return '....................';
        const date = new Date(dateStr);
        return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    function updatePreview() {
        // No surat
        outNo.textContent = noSurat.value || '...... / ...... / ...... / ......';

        // Nama
        outNama.textContent = nama.value || '....................................................................................';

        // TTL & Age
        const ageVal = calculateAge(tanggalLahir.value);
        umur.value = ageVal;
        outUmur.textContent = ageVal || '...';
        const formattedTTL = `${tempatLahir.value || '...'}, ${formatDateIndo(tanggalLahir.value)}`;
        outTTL.textContent = formattedTTL;

        // Gender check
        const gender = document.querySelector('input[name="jenisKelamin"]:checked').value;
        if (gender === 'Laki-laki') {
            markL.textContent = 'X';
            markP.textContent = ' ';
        } else {
            markL.textContent = ' ';
            markP.textContent = 'X';
        }

        // Alamat, Pekerjaan, Diagnosa
        outAlamat.textContent = alamat.value || '....................................................................................';
        outPekerjaan.textContent = pekerjaan.value || '....................................................................................';
        outDiagnosa.textContent = diagnosa.value || '....................................................................................';

        // Leave duration & Dates
        const days = parseInt(lamaSakit.value) || 1;
        outLama.textContent = days;

        const startStr = mulaiTanggal.value;
        if (startStr) {
            const startDate = new Date(startStr);
            outMulai.textContent = formatDateIndo(startStr);

            // Calculate end date (start date + days - 1)
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + days - 1);
            sampaiTanggal.value = endDate.toISOString().split('T')[0];
            outSampai.textContent = formatDateIndo(sampaiTanggal.value);
        } else {
            outMulai.textContent = '....................';
            outSampai.textContent = '....................';
        }

        // Date & Location & Doctor
        const tglSuratFormatted = formatDateIndo(tanggalSurat.value);
        outKotaTgl.textContent = `${kotaSurat.value || 'Badung'}, ${tglSuratFormatted}`;
        outDokter.textContent = dokter.value || 'dr. Dewa Gede Angga Aditya, S.Ked';
    }

    // Attach listeners
    const formElements = document.querySelectorAll('#suratForm input, #suratForm textarea');
    formElements.forEach(el => {
        el.addEventListener('input', updatePreview);
        el.addEventListener('change', updatePreview);
    });

    document.querySelectorAll('input[name="jenisKelamin"]').forEach(radio => {
        radio.addEventListener('change', updatePreview);
    });

    // Initial render
    updatePreview();

    // Print button
    document.getElementById('btnPrint').addEventListener('click', () => {
        window.print();
    });

    // Save to History functionality (LocalStorage)
    const btnSave = document.getElementById('btnSave');
    const historyBody = document.getElementById('historyBody');
    const btnClearHistory = document.getElementById('btnClearHistory');

    function loadHistory() {
        const history = JSON.parse(localStorage.getItem('medical_certificates')) || [];
        if (history.length === 0) {
            historyBody.innerHTML = `<tr><td colspan="5" class="text-center">Belum ada riwayat tersimpan</td></tr>`;
            return;
        }

        historyBody.innerHTML = '';
        history.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.noSurat}</td>
                <td>${item.nama}</td>
                <td>${item.diagnosa}</td>
                <td>${item.mulaiTanggal}</td>
                <td>
                    <button class="btn-sm btn-primary" onclick="loadHistoryItem(${index})" style="background:var(--primary-color); padding: 4px 8px; margin-right:4px;" title="Muat"><i class="fa-solid fa-eye"></i></button>
                    <button class="btn-sm" onclick="deleteHistoryItem(${index})" style="background:#dc3545; padding: 4px 8px;" title="Hapus"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            historyBody.appendChild(tr);
        });
    }

    btnSave.addEventListener('click', () => {
        if (!nama.value || !diagnosa.value) {
            alert('Mohon isi Nama Pasien dan Diagnosa terlebih dahulu!');
            return;
        }

        const newItem = {
            noSurat: noSurat.value,
            nama: nama.value,
            tempatLahir: tempatLahir.value,
            tanggalLahir: tanggalLahir.value,
            jenisKelamin: document.querySelector('input[name="jenisKelamin"]:checked').value,
            alamat: alamat.value,
            pekerjaan: pekerjaan.value,
            diagnosa: diagnosa.value,
            lamaSakit: lamaSakit.value,
            mulaiTanggal: mulaiTanggal.value,
            sampaiTanggal: sampaiTanggal.value,
            kotaSurat: kotaSurat.value,
            tanggalSurat: tanggalSurat.value,
            dokter: dokter.value
        };

        let history = JSON.parse(localStorage.getItem('medical_certificates')) || [];
        history.unshift(newItem);
        if (history.length > 20) history.pop(); // Max 20 items
        localStorage.setItem('medical_certificates', JSON.stringify(history));

        loadHistory();
        alert('Surat berhasil disimpan ke riwayat!');
    });

    btnClearHistory.addEventListener('click', () => {
        if (confirm('Apakah Anda yakin ingin menghapus seluruh riwayat?')) {
            localStorage.removeItem('medical_certificates');
            loadHistory();
        }
    });

    window.loadHistoryItem = function(index) {
        let history = JSON.parse(localStorage.getItem('medical_certificates')) || [];
        const item = history[index];
        if (item) {
            noSurat.value = item.noSurat;
            nama.value = item.nama;
            tempatLahir.value = item.tempatLahir;
            tanggalLahir.value = item.tanggalLahir;
            document.querySelectorAll('input[name="jenisKelamin"]').forEach(r => {
                r.checked = (r.value === item.jenisKelamin);
            });
            alamat.value = item.alamat;
            pekerjaan.value = item.pekerjaan;
            diagnosa.value = item.diagnosa;
            lamaSakit.value = item.lamaSakit;
            mulaiTanggal.value = item.mulaiTanggal;
            sampaiTanggal.value = item.sampaiTanggal;
            kotaSurat.value = item.kotaSurat;
            tanggalSurat.value = item.tanggalSurat;
            dokter.value = item.dokter;
            updatePreview();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    window.deleteHistoryItem = function(index) {
        let history = JSON.parse(localStorage.getItem('medical_certificates')) || [];
        history.splice(index, 1);
        localStorage.setItem('medical_certificates', JSON.stringify(history));
        loadHistory();
    };

    loadHistory();
});
