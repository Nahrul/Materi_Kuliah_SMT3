/* jumlah pegawai setiap departemen */
SELECT pegawai.Departemen, COUNT(*) FROM pegawai
GROUP BY pegawai.Departemen;