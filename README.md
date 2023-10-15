# Judul Proyek

Assignment 2 - Rest API

## Gambar

![Postman Test](/image/postman.png)
![Login Test](/image/login.png)
![Dashboard Test](/image/dashboard.png)


## Deskripsi

"Server Rest API ini dibangun menggunakan Express.js dengan integrasi JSON Web Token (JWT). API ini menyediakan layanan autentikasi pengguna dengan fitur login, serta akses ke data pengguna dan data pengajar. Untuk mengakses data pengguna dan pengajar, pengguna diharuskan untuk melakukan login terlebih dahulu guna memperoleh token autentikasi yang valid."

## Fitur

- APi Login
- Get Data User
- Get Data Teachers

## Instalasi

1. Pastikan Node.js dan npm terinstal di komputer Anda.
2. Salin repositori ini ke komputer Anda.
3. Buka terminal dan navigasikan ke direktori proyek.
4. Instal dependensi dengan menjalankan perintah `npm install`.
5. Jalankan server dengan perintah `nodemon`.

## Penggunaan

1. Setelah server berjalan, buka browser dan kunjungi [http://localhost:3000/](http://localhost:3000/).
2. Gunakan username dan password yang ada dalam file users.json untuk login.
3. Setelah login berhasil, Anda akan menerima token autentikasi.
4. Gunakan token tersebut untuk mengakses endpoint seperti /data dan /teachers menggunakan perangkat lunak Postman atau alat serupa untuk melakukan permintaan HTTP.

© Tahun 2023 Ipung Dwi Ari Saputra
