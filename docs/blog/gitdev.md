# Github Dev Workflow 

Saat Anda meng-clone sebuah repository, hanya akan menampilkan **branch default** (biasanya `main` atau `master`) yang akan otomatis di-checkout. Namun, branch lainnya hanya tersedia di remote repository.

Jika Anda menjalankan perintah berikut setelah cloning:

```bash
git checkout dev
```

Kemungkinan besar akan muncul error seperti ini:

```
error: pathspec 'dev' did not match any file(s) known to git
```

Ini terjadi karena branch `dev` belum ada secara lokal. Anda perlu mengambil daftar branch dari remote dengan:

```bash
git fetch origin
```

Kemudian, untuk berpindah ke branch `dev`, gunakan:

```bash
git checkout -b dev origin/dev
```

Atau lebih sederhana di versi terbaru Git (>=2.23):

```bash
git switch dev
```

Jika `dev` sudah ada di remote, Git akan otomatis membuat branch lokal dan melacaknya dari remote.

Selain branch `main` atau `master` **tidak otomatis terbaca** setelah cloning. Anda perlu menjalankan `git fetch` dan `git checkout` atau `git switch` untuk mulai bekerja di branch tersebut. 🚀