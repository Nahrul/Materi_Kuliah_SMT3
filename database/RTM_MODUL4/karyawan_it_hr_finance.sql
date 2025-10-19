/* tampilkan pegawai departemen it, hr, finance */
SELECT * FROM pegawai
WHERE pegawai.Departemen IN("IT","HR","Finance")