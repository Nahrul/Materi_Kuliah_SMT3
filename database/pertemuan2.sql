-- CREATE DATABASE db_kampus;
USE db_kampus;
CREATE TABLE mahasiswa(
id_mahasiswa INT PRIMARY KEY AUTO_INCREMENT,
nama VARCHAR(100),
nim VARCHAR(15) UNIQUE,
prodi VARCHAR(50),
angkatan YEAR);
