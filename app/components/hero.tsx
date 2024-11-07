import foto from "../myphotoo.jpg";

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
            <div className="hero-content text-center space-y-6">
                <Title />
                <Profile />
                <Description />
            </div>
        </div>
    );
}

function Title() {
    return (
        <div className="space-y-2">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                CV ONLINE
            </h1>
            <h2 className="text-3xl font-semibold text-primary-content">Diky Herawan</h2>
        </div>
    );
}

function Profile() {
    return (
        <div className="avatar mt-6 transition-transform duration-300 transform hover:scale-105">
            <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-lg">
                <img src={foto.src} alt="Diky Profile" className="rounded-full" />
            </div>
        </div>
    );
}

function Description() {
    return (
        <div className="max-w-md py-6 px-4 text-base-content leading-loose bg-opacity-80 bg-base-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="mb-4">
            Saya adalah seorang Mahasiswa <span className="font-semibold text-primary">Sistem Informasi</span> di Universitas Ma'soem yang memiliki ketertarikan mendalam pada pengembangan aplikasi web dan mobile.
            </p>
            <p className="mb-4">
            Dengan semangat belajar yang tinggi, saya terus mengeksplorasi berbagai  <span className="font-semibold text-secondary">teknologi</span> terbaru untuk menciptakan solusi yang inovatif dan efisien.
            </p>
            <p>
            Melalui pengalaman dalam proyek akademik dan pribadi, saya mengasah keterampilan dalam pemrograman, analisis data, dan desain aplikasi yang berfokus pada kebutuhan.<span className="font-semibold text-primary">pengguna</span>!
            </p>
        </div>
    );
}
