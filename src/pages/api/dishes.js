import pool from "../../lib/connection"; // Mengimpor koneksi ke database

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM dishes"); // Mengambil data dari tabel dishes
      res.status(200).json(result.rows); // Mengirimkan data hidangan dalam format JSON
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" }); // Jika terjadi error, kirim status 500
    }
  } else {
    // Menangani metode selain GET
    res.status(405).json({ message: "Method Not Allowed" }); // Mengembalikan status 405 jika metode tidak didukung
  }
}
