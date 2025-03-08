# Alur Kerja Pengembangan Proyek di Repo `wellsheet`

## 1. Membuka Repo dan Beralih ke Branch `dev`

```bash
# Clone repo (jika belum ada di lokal)
git clone https://github.com/username/wellsheet.git
cd wellsheet
```

### **Cek Status & Branch yang Tersedia**

```bash
# Menampilkan daftar branch lokal
git branch

# Menampilkan daftar branch remote
git branch -r

# Fetch branch terbaru dari remote jika tidak terdeteksi
git fetch --all
```

### **Beralih ke Branch **``

```bash
# Beralih ke branch dev
git checkout dev

# Pastikan branch dev up to date
git pull origin dev
```

---

## 2. Melakukan Pengembangan dan Commit di Branch `dev`

```bash
# Menambahkan perubahan setelah pengembangan
git add .

# Melakukan commit dengan pesan yang deskriptif
git commit -m "Deskripsi perubahan yang dilakukan"

# Push commit ke remote dev
git push origin dev
```

---

## 3. Rollback Commit di Branch `dev`

### **a) Hard Reset (Menghapus Commit Secara Permanen)**

```bash
git reset --hard <commit_id>
git push origin dev --force
```

**Catatan:** Menghapus commit sepenuhnya tanpa bisa dikembalikan.

### **b) Soft Reset (Hapus Commit Tapi Simpan Perubahan di Staging)**

```bash
git reset --soft <commit_id>
```

**Catatan:** Commit dihapus, tapi perubahan tetap ada untuk diedit ulang.

### **c) Revert (Membatalkan Commit Tanpa Menghapus Riwayat)**

```bash
git revert HEAD  # Membatalkan commit terakhir
git revert HEAD~1  # Membatalkan commit ke-2 terakhir
git push origin dev
```

**Catatan:** Cocok jika commit sudah di-push dan ingin menjaga riwayat commit tetap rapi.

---

## 4. Merge `dev` ke `main` Setelah Stabil

```bash
# Beralih ke branch main
git checkout main

# Pastikan branch main up to date
git pull origin main

# Merge branch dev ke main
git merge dev

# Push hasil merge ke remote
git push origin main
```

---

## 5. Merge via Pull Request (Alternatif di GitHub)

Jika ingin menggunakan Pull Request:

1. **Push branch dev ke remote** (sudah dilakukan di langkah 2).
2. **Buka GitHub dan buat Pull Request:**
   - Pergi ke repo `wellsheet` di GitHub.
   - Klik "Compare & pull request".
   - Pastikan base = `main`, compare = `dev`.
   - Tambahkan deskripsi lalu klik "Create pull request".
3. **Review & Merge PR di GitHub.**
4. **Sinkronisasi branch main ke lokal:**

```bash
git checkout main
git pull origin main
```

---

## 6. Rollback di Branch `main` (Jika Terlanjur Merge `dev`)

### **a) Hard Reset (Menghapus Merge & Commit Setelahnya)**

```bash
git reset --hard <commit_id>
git push origin main --force
```

**Catatan:** Menghapus perubahan secara permanen.

### **b) Revert Merge Tanpa Menghapus Riwayat**

```bash
git revert -m 1 <commit_id_merge>
git push origin main
```

**Catatan:** Gunakan `git log --oneline` untuk mencari `<commit_id_merge>`.

---

## 7. Menghapus Branch `dev` Setelah Merge (Opsional)

Jika `dev` sudah tidak diperlukan setelah merge:

```bash
git branch -d dev  # Hapus branch di lokal
git push origin --delete dev  # Hapus branch di remote
```

🚀 **Alur ini membantu memastikan workflow yang rapi, baik untuk individu maupun tim yang akan membaca dokumentasi proyek.**

