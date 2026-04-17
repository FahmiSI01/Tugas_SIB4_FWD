<?php
session_start();

$nama = $email = $nilai = "";
$keterangan = $pesan = $catatan = "";
$cardClass = "secondary";

// PROSES FORM
if (isset($_POST['proses'])) {
    $_SESSION['data'] = [
        'nama' => $_POST['nama'],
        'email' => $_POST['email'],
        'nilai' => $_POST['nilai']
    ];

    header("Location: index.php");
    exit;
}

// AMBIL DATA (SETELAH REDIRECT)
if (isset($_SESSION['data'])) {
    $nama = $_SESSION['data']['nama'];
    $email = $_SESSION['data']['email'];
    $nilai = $_SESSION['data']['nilai'];

    // hapus biar refresh kosong
    unset($_SESSION['data']);

    if ($nilai < 0 || $nilai > 100) {
        $keterangan = "Tidak Valid";
        $pesan = "Nilai harus berada di antara 0 sampai 100.";
        $cardClass = "warning";
    } else {
        if ($nilai > 70) {
            $keterangan = "Lulus";
            $pesan = "Kerja bagus! Nilai kamu sudah melewati standar kelulusan. Pertahankan dan terus tingkatkan kemampuanmu.";
            $cardClass = "success";
        } else {
            $keterangan = "Remedial";
            $pesan = "Nilai masih perlu ditingkatkan. Jangan menyerah, gunakan kesempatan ini untuk belajar lebih baik lagi.";
            $catatan = "Tips: Pelajari kembali materi dan latihan soal.";
            $cardClass = "danger";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Sistem Penilaian Mahasiswa</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- HEADER -->
<header class="header text-center">
    <h2>Sistem Penilaian Mahasiswa</h2>
    <p>Masukkan data untuk melihat hasil evaluasi</p>
</header>

<div class="container my-5">
    <div class="row g-4">

        <!-- FORM -->
        <div class="col-md-6">
            <div class="card custom-card h-100">
                <div class="card-header bg-primary text-white text-center">
                    <h5 class="fw-bold mb-0">Form Input Nilai</h5>
                </div>
                <div class="card-body">

                    <form method="POST">
                        <div class="mb-3">
                            <label class="fw-semibold">Nama</label>
                            <input type="text" name="nama" class="form-control"
                                   placeholder="Masukkan nama lengkap" required>
                        </div>

                        <div class="mb-3">
                            <label class="fw-semibold">Email</label>
                            <input type="email" name="email" class="form-control"
                                   placeholder="contoh@email.com" required>
                        </div>

                        <div class="mb-3">
                            <label class="fw-semibold">Nilai Ujian</label>
                            <input type="number" name="nilai" class="form-control"
                                   placeholder="Masukkan nilai (0 - 100)" min="0" max="100" required>
                        </div>

                        <button type="submit" name="proses" class="btn btn-primary w-100">
                            Proses Nilai
                        </button>
                    </form>

                </div>
            </div>
        </div>

        <!-- HASIL -->
        <div class="col-md-6">
            <div class="card custom-card h-100 border-<?php echo $cardClass; ?>">
                <div class="card-header bg-<?php echo $cardClass; ?> text-white text-center">
                    <h5 class="fw-bold mb-0">Hasil Penilaian</h5>
                </div>
                <div class="card-body">

                    <?php if ($nama == ""): ?>
                        <p class="text-muted text-center">Belum ada data yang diproses.</p>
                    <?php else: ?>
                        <p><strong>Nama:</strong> <?= $nama ?></p>
                        <p><strong>Email:</strong> <?= $email ?></p>
                        <p><strong>Nilai:</strong> <?= $nilai ?></p>

                        <hr>

                        <h5 class="fw-bold">
                            Keterangan:
                            <span class="badge bg-<?php echo $cardClass; ?>">
                                <?= $keterangan ?>
                            </span>
                        </h5>

                        <p><?= $pesan ?></p>

                        <?php if ($catatan): ?>
                            <small class="text-muted"><?= $catatan ?></small>
                        <?php endif; ?>
                    <?php endif; ?>

                </div>
            </div>
        </div>

    </div>
</div>

<!-- FOOTER -->
<footer class="footer text-center">
    <p>© 2026 Muhammad Fahmi</p>
</footer>

</body>
</html>