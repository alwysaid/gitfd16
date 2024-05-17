/**
 * 
 * HTTP Methode
 * 
 * CRUD
 * Post = Create Data = Membuat data baru di database. 
 * Get = Read Data = Membaca/mengambil data dari server
 * Put or Patch = Update Data = Put dapat mengedit semua data, patch itu partial/sebagian data
 * Delete = Delete Data = menghapus data
 * 
 * Kalo mau bikin http, function harus menyesuaikan methode
 * ex :
 *  Service : 
 *      Membuat data user ke dalam database, method : Post
 *      Menampikan semua data barang yang dijual, method : Get
 *      Merubah fullname user, methode : Patch
 *      Merubah semua data user, methode : Put
 *      Menghapus data belanjaan user, methode : Delete
 *      Menghapus data user soft delete, methode : post/put/patch
 * 
 * Methode ini bergantung dengan controller
 * 
 * Idealnya semua status code yg berhubungan dengan requestnya kita siapkan
 * 
 * 
 */

