/* tampilkan jumlah karyawan dengan gaji yang tidak null */
SELECT COUNT(*) FROM pegawai
WHERE pegawai.Gaji != '(NULL)';