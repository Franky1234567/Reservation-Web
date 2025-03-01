# Aplikasi Web Reservasi

Ini adalah **Aplikasi Web Reservasi** yang dibangun dengan **Next.js**, **TypeScript**, dan **Redux** untuk pengelolaan state. Aplikasi ini memungkinkan pengguna untuk melakukan reservasi kamar, memilih tanggal check-in/check-out, dan lainnya. Aplikasi ini menggunakan **react-datepicker** untuk pemilihan tanggal dan **Tailwind CSS** untuk styling.

## Daftar Isi
- [Petunjuk Pengaturan](#petunjuk-pengaturan)
- [Manajemen State](#manajemen-state)
- [Komponen UI](#komponen-ui)
- [Struktur Folder](#struktur-folder)
- [Penanganan Data](#penanganan-data)
- [Masalah yang Diketahui](#masalah-yang-diketahui)
- [Peningkatan yang Dapat Dilakukan](#peningkatan-yang-dapat-dilakukan)

## Petunjuk Pengaturan

### Prasyarat
Sebelum memulai, pastikan Anda sudah menginstal hal-hal berikut:
- **Node.js** (lebih disarankan versi LTS terbaru)
- **npm** atau **yarn**

### Langkah-langkah Menjalankan Secara Lokal

1. **Clone Repositori**:
https://github.com/Franky1234567/Reservation-Web.git

2. **Instal Dependensi**:
Anda bisa menggunakan `npm` atau `yarn` untuk menginstal dependensi:

- Dengan npm:
  ```
  npm install
  ```

- Dengan yarn:
  ```
  yarn install
  ```

3. **Jalankan Server Pengembangan**:
Setelah menginstal dependensi, jalankan aplikasi secara lokal:

- Dengan npm:
  ```
  npm run dev
  ```

- Dengan yarn:
  ```
  yarn dev
  ```

4. **Kunjungi Aplikasi**:
Buka browser Anda dan pergi ke `http://localhost:3000` untuk melihat aplikasi.

---

## Manajemen State

### **Redux untuk Manajemen State**
Aplikasi ini menggunakan **Redux** untuk manajemen state global. Redux digunakan untuk menyimpan data reservasi dan mengelola status reservasi di seluruh aplikasi. Dengan menggunakan Redux, aplikasi memiliki satu sumber kebenaran untuk semua data reservasi, termasuk tanggal check-in, check-out, tipe kamar, dan nama tamu.

- **State Slice**: Kami menggunakan `reservationSlice` untuk mengelola reservasi.
- **Actions**: Aksi-aksi meliputi menambahkan reservasi dan memperbarui status reservasi.
- **Reducers**: Reducer memproses aksi-aksi seperti menambah reservasi atau memperbarui status reservasi.

Pendekatan ini memastikan bahwa state dikelola secara terpusat dan mudah diakses serta dimodifikasi di berbagai komponen aplikasi.

---

## Komponen UI

Aplikasi ini menggunakan arsitektur **berbasis komponen**. Komponen utama meliputi:
- **InputNewData**: Komponen form untuk menambah reservasi baru.
- **ReservationList**: Menampilkan daftar reservasi.
- **ReservationItem**: Menampilkan detail reservasi individual dengan opsi untuk memperbarui status.
- **DatePicker**: Komponen pihak ketiga yang digunakan untuk memilih tanggal.

### Komunikasi Antar Komponen:
- **Props** digunakan untuk meneruskan data antar komponen (misalnya, meneruskan data reservasi ke `InputNewData`).
- **State** dikelola menggunakan **Redux** untuk state global dan state lokal komponen (misalnya, input form).

---

## Struktur Folder

Struktur folder diorganisasikan untuk memisahkan berbagai bagian dari aplikasi:

/src/app #UI utama atau page Utama /page

/src /Components # Komponen UI yang dapat digunakan ulang tetapi disini karna aplikasinya ringan dan sederhana saya langsung membuat componen besar2 berbeda ketika aplikasi web kompleks dan banyak menggunakan componen yang sama maka saya akan menerapkan ATOMIC DESIGN # Komponen untuk menampilkan semua reservasi/reservasiList  # Komponen untuk menampilkan detail reservasi /ReservationItem

/src/pages #Komponen form untuk input data reservasi /InputNewData  # Komponen tingkat halaman /Home # Halaman utama untuk menampilkan dan mengelola reservasi  # Fungsi utilitas seperti format tanggal  # Gaya global (Tailwind CSS) 

/src/Redux
/Redux # Slice Redux untuk mengelola data reservasi

/src/Types
/Types # Tipe TypeScript untuk aplikasi (misalnya tipe Reservation)

Struktur ini memungkinkan aplikasi berkembang dengan mudah dan memudahkan pemeliharaan kode dengan memisahkan masalah.

---

## Penanganan Data

### **Mengambil dan Menyimpan Data**
Data disimpan di Redux, yang mengelola state reservasi global. Aksi-aksi dipicu untuk memperbarui data reservasi atau statusnya saat pengguna berinteraksi dengan aplikasi (misalnya, menambah reservasi baru atau memperbarui status reservasi).

### **Penanganan Tanggal**
Tanggal ditangani menggunakan komponen `react-datepicker`. Tanggal disimpan dalam objek `reservation` dengan format `dd-mm-yyyy`. Kami juga memastikan bahwa tanggal yang tidak valid tidak diteruskan ke komponen dengan memvalidasi tanggal sebelum mengonversinya menjadi objek `Date`.

---

## Masalah yang Diketahui

- **Jarak Tanggal tidak bisa terlalu jauh, misalkan CI tanggal 01, max CO yang bisa disimpan datanya adalah tanggal 10, Kalo CI tanggal 10 max CO adalah tanggal 12, dan Seterusnya, Hingga Aplikasi di deploy fitur tersebut belum di sempurnakan.
- **Hydration Error**: Ada masalah dengan **hydration error** jika ada spasi ekstra atau node teks yang tidak sengaja ditambahkan antara tag `<html>` dan `<body>`, yang menyebabkan perbedaan antara HTML yang dirender di server dan yang dirender di klien, Namun Hingga Aplikasi di Deploy Masalah tersebut berhasil di tangani.


---

## Peningkatan yang Dapat Dilakukan

Jika diberikan lebih banyak waktu, peningkatan berikut bisa dilakukan:
1. **Penanganan Error**: Meningkatkan penanganan error untuk pemilihan tanggal dan pengisian form, misalnya dengan menampilkan pesan error jika tanggal tidak valid atau jika kolom wajib kosong.
2. **Desain Responsif**: Meningkatkan responsivitas aplikasi untuk memastikan aplikasi dapat berfungsi dengan baik di semua perangkat seluler.
3. **Autentikasi Pengguna**: Mengimplementasikan autentikasi pengguna untuk membuat dan mengelola reservasi, termasuk fitur login dan registrasi.
4. **Integrasi Backend**: Mengintegrasikan API backend untuk menyimpan reservasi secara persisten dalam database daripada hanya menggunakan Redux untuk state sementara.
5. **Aksesibilitas**: Meningkatkan aksesibilitas dengan memastikan bahwa semua komponen dapat diakses menggunakan navigasi keyboard dan pembaca layar.

---



##dibawah INI adalah bawaan next.js

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
