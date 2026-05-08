import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SecretLetterPageProps {
  onBackToStart?: () => void;
}

interface PolaroidItem {
  id: number;
  image: string;
  song: string;
  artist: string;
  audio: string;
}

const polaroids: PolaroidItem[] = [
  {
    id: 2,
    image: 'https://giftinn.github.io/music-host/frenpict.jpg',
    song: 'Count on Me',
    artist: 'Bruno Mars',
    audio: 'https://giftinn.github.io/music-host/Count%20on%20Me%20-%20Bruno%20Mars.mp3'
  },
];

const SecretLetterPage: React.FC<SecretLetterPageProps> = ({ onBackToStart }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const fullText = `Untuk kalian, 7 orang yang selama ini jadi rumah paling nyaman di sekolah.
  
Rasanya aneh banget mikirin kalau nanti kita bakal jalan masing-masing. Dulu kita ketemu cuma sebagai orang asing, tapi sekarang malah jadi bagian paling berharga dari cerita hidup satu sama lain. Banyak hal yang udah kita lewatin bareng, mulai dari ketawa sampai sakit perut, saling ejek, ngambek-ngambekan, nangis diam-diam, sampai momen kecil yang mungkin orang lain anggap biasa, tapi buat kita itu kenangan yang bakal susah dilupain.

Kadang aku masih ga nyangka, ternyata orang-orang yang awalnya cuma “temen kelas” bisa berubah jadi keluarga sendiri. Kalian selalu ada di masa-masa paling capek, paling ribet, bahkan di saat dunia rasanya ga berpihak. Terima kasih karena udah jadi alasan aku semangat datang ke sekolah, jadi tempat cerita paling aman, dan jadi orang-orang yang selalu berhasil bikin hari buruk terasa lebih ringan.

Jujur, aku takut sama kata “berpisah”. Takut kalau nanti semuanya berubah. Takut kita jadi sibuk sama hidup masing-masing sampai perlahan asing. Takut nanti cuma bisa lihat kabar lewat story atau repost kenangan lama. Padahal sekarang rasanya baru kemarin kita mulai deket, baru kemarin bikin inside joke yang cuma kita yang ngerti, baru kemarin ketawa bareng tanpa mikirin kalau suatu saat bakal ada pertemuan yang berubah jadi perpisahan.

Kalau nanti kita udah punya jalan hidup sendiri-sendiri, aku harap kalian tetap bahagia. Semoga mimpi kalian satu-satu tercapai, semoga kalian dipertemukan sama banyak hal baik, dan semoga dunia selalu lembut sama kalian. Tapi di antara semua hal yang berubah nanti, aku harap satu hal ini tetap sama: jangan lupain kita. Jangan lupain cerita tentang 7 orang yang pernah saling punya satu sama lain di masa paling indah.

Terima kasih buat semuanya.
Buat tawa yang ga ada habisnya.
Buat pelukan waktu lagi hancur.
Buat semua foto random, video jelek, suara berisik di kelas, dan kenangan kecil yang ternyata jadi sesuatu yang paling berharga sekarang.

Mungkin nanti kita ga akan bisa kumpul selengkap ini lagi. Mungkin setelah ini semuanya cuma tinggal cerita. Tapi percayalah, seberapa jauhnya kita nanti, kalian tetap jadi bagian terbaik yang pernah hadir di hidupku.

7 orang,
1 cerita,
dan kenangan yang ga akan pernah benar-benar selesai.`;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowFinalMessage(true);
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-center space-y-6 max-w-5xl mx-auto px-4">

      {/* LETTER BOX */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6 sm:p-10 bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl border-2 border-blue-200 backdrop-blur-lg shadow-2xl relative overflow-hidden">

          {/* corners */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-blue-300 rounded-full"/>
          <div className="absolute top-2 right-2 w-3 h-3 bg-blue-300 rotate-45"/>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-blue-300 rounded-full"/>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-lg"/>

          {/* TEXT */}
          <div className="text-left">
            <div className="text-sm sm:text-base text-blue-900 whitespace-pre-wrap leading-relaxed font-medium">
              {displayedText}
              {displayedText.length < fullText.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-blue-400 ml-1"
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>


      {/* POLAROID */}
      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >

            <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
              Our Songs & Memories 🎧
            </h3>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {polaroids.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, rotate: -8, y: 40 }}
                  animate={{ opacity: 1, rotate: i % 2 ? 6 : -6, y: 0 }}
                  transition={{ delay: i * 0.2, type: 'spring' }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  className="bg-white p-3 rounded-xl shadow-xl w-60"
                >
                  <img
                    src={item.image}
                    alt="memory"
                    className="rounded-lg mb-3 object-cover w-full h-48"
                  />

                  <div className="text-left mb-2">
                    <p className="font-semibold text-blue-900 text-sm">
                      {item.song}
                    </p>
                    <p className="text-xs text-blue-600">
                      {item.artist}
                    </p>
                  </div>

                  {/* AUDIO */}
                  <audio controls className="w-full accent-blue-500">
                    <source src={item.audio} type="audio/mpeg" />
                  </audio>

                </motion.div>
              ))}
            </div>

            {onBackToStart && (
              <button
                onClick={onBackToStart}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                Back to Start
              </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecretLetterPage;




















