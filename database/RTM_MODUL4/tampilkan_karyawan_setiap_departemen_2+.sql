/* tampilkan departemen yang memiliki lebih dari 2 pegawai  */
SELECT pegawai.Departemen, COUNT(*) FROM pegawai
GROUP BY pegawai.Departemen
HAVING COUNT(*) > 2;