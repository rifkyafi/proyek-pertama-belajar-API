/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Ganti 'alamat-domain-gambar-anda.com' dengan domain asli dari variabel lingkungan Anda
    domains: [
      'cdn.dummyjson.com', // <--- Tambahkan domain ini
      // Jika ada domain lain (misalnya: 'anotherapi.com'), tambahkan di sini juga
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**' // Ini mengizinkan semua path
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
