<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplikasi Surat Keterangan Sakit - Mambal Medical Care</title>
    <link rel="stylesheet" href="assets/style.css">
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="app-container">
        <!-- Sidebar Form Input -->
        <div class="form-section card">
            <div class="brand-header">
                <img src="assets/logo.png" alt="Logo Mambal Medical Care" class="logo-img" id="sidebarLogo">
                <div>
                    <h2>Mambal Medical Care</h2>
                    <p>Input Surat Keterangan Sakit</p>
                </div>
            </div>

            <form id="suratForm">
                <div class="form-group">
                    <label for="noSurat"><i class="fa-solid fa-hashtag"></i> No. Surat</label>
                    <input type="text" id="noSurat" value="445 / 123 / MMC / VII / 2026" required>
                </div>

                <div class="form-group">
                    <label for="nama"><i class="fa-solid fa-user"></i> Nama Pasien</label>
                    <input type="text" id="nama" placeholder="Masukkan nama lengkap" required>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="tempatLahir"><i class="fa-solid fa-location-dot"></i> Tempat Lahir</label>
                        <input type="text" id="tempatLahir" placeholder="Contoh: Denpasar" required>
                    </div>
                    <div class="form-group">
                        <label for="tanggalLahir"><i class="fa-solid fa-calendar"></i> Tgl Lahir</label>
                        <input type="date" id="tanggalLahir" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="umur"><i class="fa-solid fa-user-clock"></i> Umur (Th)</label>
                        <input type="number" id="umur" placeholder="Otomatis" readonly>
                    </div>
                    <div class="form-group">
                        <label><i class="fa-solid fa-venus-mars"></i> Jenis Kelamin</label>
                        <div class="radio-group">
                            <label><input type="radio" name="jenisKelamin" value="Laki-laki" checked> Laki-laki</label>
                            <label><input type="radio" name="jenisKelamin" value="Perempuan"> Perempuan</label>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="alamat"><i class="fa-solid fa-house"></i> Alamat</label>
                    <textarea id="alamat" rows="2" placeholder="Masukkan alamat lengkap pasien" required></textarea>
                </div>

                <div class="form-group">
                    <label for="pekerjaan"><i class="fa-solid fa-briefcase"></i> Pekerjaan</label>
                    <input type="text" id="pekerjaan" placeholder="Contoh: Pegawai Swasta / Mahasiswa" required>
                </div>

                <div class="form-group">
                    <label for="diagnosa"><i class="fa-solid fa-stethoscope"></i> Diagnosa</label>
                    <input type="text" id="diagnosa" placeholder="Contoh: Common Cold / Febris" required>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="lamaSakit"><i class="fa-solid fa-clock"></i> Lama (Hari)</label>
                        <input type="number" id="lamaSakit" min="1" value="3" required>
                    </div>
                    <div class="form-group">
                        <label for="mulaiTanggal"><i class="fa-solid fa-calendar-day"></i> Mulai Tanggal</label>
                        <input type="date" id="mulaiTanggal" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="sampaiTanggal"><i class="fa-solid fa-calendar-check"></i> Sampai Tanggal</label>
                    <input type="date" id="sampaiTanggal" readonly>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="kotaSurat"><i class="fa-solid fa-city"></i> Kota Surat</label>
                        <input type="text" id="kotaSurat" value="Badung" required>
                    </div>
                    <div class="form-group">
                        <label for="tanggalSurat"><i class="fa-solid fa-calendar-days"></i> Tgl Tanda Tangan</label>
                        <input type="date" id="tanggalSurat" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="dokter"><i class="fa-solid fa-user-doctor"></i> Dokter Pemeriksa</label>
                    <input type="text" id="dokter" value="dr. Dewa Gede Angga Aditya, S.Ked" required>
                </div>

                <div class="form-actions">
                    <button type="button" id="btnPrint" class="btn btn-primary"><i class="fa-solid fa-print"></i> Cetak Surat</button>
                    <button type="button" id="btnSave" class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Simpan ke Riwayat</button>
                </div>
            </form>
        </div>

        <!-- Preview Section -->
        <div class="preview-section">
            <div class="preview-toolbar">
                <h3><i class="fa-solid fa-eye"></i> Pratinjau Dokumen Asli</h3>
                <span class="badge">A4 / Surat Keterangan Sakit</span>
            </div>

            <div class="paper-wrapper">
                <div class="paper" id="printableArea">
                    <!-- Header Klinik -->
                    <div class="clinic-header">
                        <img src="assets/logo.png" alt="Logo" class="print-logo">
                        <div class="clinic-info">
                            <h2>Klinik Pratama Rawat Jalan</h2>
                            <h1>Mambal Medical Care</h1>
                            <p class="sio">SIO : 261002300725840003</p>
                            <p>Telp: 081338813760</p>
                            <p>Alamat : Br. Samu, Mekar Bhuwana, Abiansemal, Badung</p>
                        </div>
                    </div>
                    <div class="header-divider"></div>

                    <!-- Judul Surat -->
                    <div class="doc-title-container">
                        <h3 class="doc-title">Surat Keterangan Sakit</h3>
                        <p class="doc-no">No : <span id="outNo">...... / ...... / ...... / ......</span></p>
                    </div>

                    <!-- Isi Surat -->
                    <div class="doc-body">
                        <p class="intro-text">Yang bertanda tangan di bawah ini, menerangkan bahwa:</p>
                        
                        <table class="patient-table">
                            <tr>
                                <td class="label-col">Nama</td>
                                <td class="sep-col">:</td>
                                <td class="val-col" id="outNama">....................................................................................</td>
                            </tr>
                            <tr>
                                <td class="label-col">Tempat/Tanggal Lahir</td>
                                <td class="sep-col">:</td>
                                <td class="val-col" id="outTTL">....................................................................................</td>
                            </tr>
                            <tr>
                                <td class="label-col">Umur</td>
                                <td class="sep-col">:</td>
                                <td class="val-col"><span id="outUmur">...</span> tahun</td>
                            </tr>
                            <tr>
                                <td class="label-col">Jenis Kelamin</td>
                                <td class="sep-col">:</td>
                                <td class="val-col">
                                    <span id="checkLaki" class="checkbox-box">[ <span id="markL"> </span> ]</span> Laki-laki &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span id="checkPera" class="checkbox-box">[ <span id="markP"> </span> ]</span> Perempuan
                                </td>
                            </tr>
                            <tr>
                                <td class="label-col">Alamat</td>
                                <td class="sep-col">:</td>
                                <td class="val-col" id="outAlamat">....................................................................................</td>
                            </tr>
                            <tr>
                                <td class="label-col">Pekerjaan</td>
                                <td class="sep-col">:</td>
                                <td class="val-col" id="outPekerjaan">....................................................................................</td>
                            </tr>
                            <tr>
                                <td class="label-col">Diagnosa</td>
                                <td class="sep-col">:</td>
                                <td class="val-col" id="outDiagnosa">....................................................................................</td>
                            </tr>
                        </table>

                        <p class="statement-text">
                            Oleh karena S A K I T, Perlu diberikan I S T I R A H AT Selama <strong id="outLama">...</strong> hari terhitung mulai tanggal <strong id="outMulai">....................</strong> s/d <strong id="outSampai">....................</strong>.
                        </p>

                        <p class="closing-text">
                            Demikian surat keterangan ini dibuat dengan sebenarnya dan untuk dipergunakan semestinya.
                        </p>
                    </div>

                    <!-- Tanda Tangan & Stempel -->
                    <div class="signature-section">
                        <div class="signature-box">
                            <p id="outKotaTgl">Badung, ............................</p>
                            <p class="sig-title">Dokter Pemeriksa,</p>
                            <div class="stamp-signature-area">
                                <img src="assets/stamp.png" alt="Stempel Klinik" class="stamp-img" id="printStamp">
                                <p class="doctor-name" id="outDokter">dr. Dewa Gede Angga Aditya, S.Ked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Riwayat Tersimpan -->
            <div class="history-card card">
                <div class="history-header">
                    <h4><i class="fa-solid fa-clock-rotate-left"></i> Riwayat Surat Tersimpan</h4>
                    <button id="btnClearHistory" class="btn-sm"><i class="fa-solid fa-trash"></i> Hapus Riwayat</button>
                </div>
                <div class="table-responsive">
                    <table id="historyTable">
                        <thead>
                            <tr>
                                <th>No. Surat</th>
                                <th>Nama Pasien</th>
                                <th>Diagnosa</th>
                                <th>Mulai</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody id="historyBody">
                            <tr><td colspan="5" class="text-center">Belum ada riwayat tersimpan</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
