import React, { forwardRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import './App.css'

function App (props) {
	return (
		<HTMLFlipBook
			width={550}
			height={733}
			size='stretch'
			minWidth={315}
			maxWidth={1000}
			minHeight={400}
			maxHeight={1533}>
			<Page1 number='1' />
			<Page2 number='2'>Page text</Page2>
			<Page3 number='3'>Page text</Page3>
			<Page4 number='4'>Page text</Page4>
			<Page5 number='5'>Page text</Page5>
			<Page6 number='6'>Page text</Page6>
      <Page7 number='7'>Page text</Page7>
		</HTMLFlipBook>
	)
}

export default App

const Page1 = forwardRef((props, ref) => {
	return (
		<div className='demoPage' ref={ref}>
			<div className='dalem'>
				<h1 className='header'>Peta Minda</h1>
				<h3 className='subheader'>Pengertian Peta Minda</h3>
				<div className='isi'>
					<p>
						Peta minda adalah suatu ilustrasi grafis yang konkrit yang dapat menunjukan bagaimana suatu
						konsep berhubungan atau terkait dengan konsep-konsep lain yang termasuk kategori yang sama. Peta
						minda ialah suatu skema atau ringkasan dari hasil belajar. Peta minda juga dikenal dengan peta
						konsep (min mapping). <br />
						<br />
						Peta minda merupakan salah satu cara visual-spatial dalam bentuk kecerdasan beragam atau
						Multiple Intellenges yang sekarang ini sudah diterapkan dalam sistem pembelajaran di
						sekolah-sekolah.<br />
						<br />
						Seluruh siswa dianjurkan untuk menguasai teknik ini setelah mempelajari sesuatu bab guna
						mengingat dan mengupas kembali pemahaman siswa dalam bab tersebut.<br />
						<br />
						Banyak orang beranggapan bahwa teknik ini sulit untuk diaplikasikan. Sebenarnya, teknik ini akan
						lebih memudahkan siswa guna mengingat kembali fakta-fakta penting yang telah di pelajarinya.<br
						/>
						<br />
						Waktu yang tepat untuk menggunakan peta minda ini adlaah digunakan pada setiap baik diawal
						persekolahan maupun saat akhir menhadapi ujian. Siswa sangat dianjurkan untuk berlatih peta
						minda dari awal pembelajaran guna memudahkan siswa menguasai semua subjek dengan baik dan
						cemerlang.<br />
						<br />
						Peta pikiran penting bagi siswa untuk memudahkan belajar. Selain itu, peta minda juga penting
						karena :
					</p>
					<ul>
						<li>Menghemat waktu belajar dan mengulang.</li>
						<li>Memfasilitasi pembelajaran.</li>
						<li>Memperkuat ingatan.</li>
						<li>Memungkinkan siswa menginterpretasikan semua pelajaran yang telah dipelajari.</li>
					</ul>
				</div>
				<p>{props.children}</p>
			</div>
		</div>
	)
})

const Page2 = forwardRef((props, ref) => {
	return (
		<div className='demoPage' ref={ref}>
			<h1 className='header'>Jenis-Jenis Peta Minda</h1>
			<h3 className='subheader'>Peta minda dibedakan menjadi berikut.</h3>
			<div className='isi'>
				<ul>
					<li>
						Circle Map (Peta Bulatan), digunakan untuk sumbangsaran ide yang memamerkan pengetahuan sedia
						berkaitan sesuatu tajuk dengan memberikan maklumat mengikut konteks.
					</li>
					<br />
					<li>
						Bubble Map (Peta Buih), digunakan untuk memperbanyak kebolehan murid untuk mengenal pasti atau
						atau menunjukan kualitas. Umumnya bubble map menggunakan perkataan deskriptif atau uraian.
					</li>
					<br />
					<li>Double Bubble Map (Peta Buih Berganda), digunakan untuk membandingkan beza sesuatu.</li>
					<br />
					<li>Tree Map (Peta Pokok), digunakan untuk mengklasifikasikan bahan atau ide.</li>
					<br />
					<li>
						Brace Map (Peta Dakap), digunakan untuk menganalisis objek fisikal. Garis sebelah kiri adalah
						nama atau gambar keseluruhan objek. Garis pada bagian kedua adalah bagian utama.
					</li>
					<br />
					<li>Flow Map (Peta Alir), digunakan untuk membuat urutan sesuatu proses.</li>
					<br />
					<li>
						Multi Flow Map (Peta Pelbagai Alir), digunakan untuk menunjukan dan menganalisis hubungan sebab
						akibat. Segiempat yang berada ditengah adalah peristiwa yang penting. Bagian sebelah kiri adalah
						sebab-akibat peristiwa tersebut, manakala bagian sebelah kanan pula adalah akibat daripada
						peristiwa tersebut.
					</li>
					<br />
					<li>
						Bridge Map (Peta Titi), digunakan untuk memberi peluang kepada pelajar untuk mengaplikasikan
						proses analogi dengan menggunakan faktor penghubungan.
					</li>
				</ul>
			</div>
		</div>
	)
})

const Page3 = forwardRef((props, ref) => {
	return (
		<div className='demoPage' ref={ref}>
			<div className='dalem'>
				<h1 className='header'>Manfaat Peta Minda</h1>
				<h3 className='subheader'>1.Bagi Guru</h3>
				<div className='isi'>
					<p>Dibawah ini merupakan manfaat peta minda bagi guru adalah :</p>
					<ul>
						<li>
							Membantu guru memahami macam-macam konsep yang terdapat dalam topik yang akan diajarkan dan
							memperoleh wawasan baru.
						</li>
						<br />
						<li>Membantu untuk melihat keterkaitan logis antar konsep-konsep khusus.</li>
						<br />
						<li>Membantu dalam menghindari miskonsepsi oleh siswa.</li>
						<br />
						<li>Membantu untuk mengorganisasi urutan kegiatan belajar mengajar di kelas.</li>
						<br />
						<li>
							Dengan mengidentifikasi konsep-konsep sebelum membuat peta konsep, guru dapat menemukan
							topik-topik sains secara jelas, sehingga dapat membantu untuk menentukan topik-topik yang
							perlu dipelajari.
						</li>
						<br />
						<li>Membantu untuk penilaian siswa.</li>
						<br />
						<li>Sebagai alat untuk menggalakkan pembelajaran kooperatif.</li>
						<br />
						<li>Membantu untuk menggali pemahaman siswa sebelum dilakukan pembelajaran.</li>
						<br />
					</ul>
				</div>
			</div>
		</div>
	)
})

const Page4 = forwardRef((props, ref) => {
	return (
		<div className='demoPage' ref={ref}>
			<h1 className='header'>Manfaat Peta Minda</h1>
			<h3 className='subheader'>2.Bagi Siswa</h3>
			<div className='isi'>
				<p>Dibawah ini merupakan manfaat peta minda bagi siswa.</p>
				<ul>
					<li>Secara tidak langsung mengajak siswa belajar kooperatif.</li>
					<br />
					<li>Membantu siswa menghindari miskonsepsi.</li>
					<br />
					<li>Membantu mempelajari cara belajar menyusun peta konsep.</li>
					<br />
					<li>Membantu untuk mempelajari sains secara bermakna.</li>
					<br />
					<li>Membantu untuk memperoleh wawasan baru.</li>
					<br />
					<li>
						Membantu dalam mempelajari konsep-konsep pokok dan proposisi, serta membantu dalam menghubungkan
						atau mengaitkan pengetahuan yang telah dimilikinya dengan yang sedang dipelajarinya.
					</li>
				</ul>
			</div>
		</div>
	)
})

const Page5 = forwardRef((props, ref) => {
	return (
		<div className='demoPage' ref={ref}>
			<h1 className='header'>Cara Membuat Peta Minda</h1>
      <h3 className='subheader'>Dibawah ini merupakan cara membuat peta minda.</h3>
			<div className='isi'>
				<br />
				<ul>
					<li>Pertama, tentukan terlebih dahulu bahan bacaan.</li>
					<br />
					<li>Tentukan konsep-konsep yang relevan.</li>
					<br />
					<li>
						Urutkan konsep-konsep tersebut mulai dari yang paling inklusif sampai yang paling tidak inklusif
						atau contoh-contoh
					</li>
					<br />
					<li>
						Susunlah konsep-konsep tersebut di atas kertas, mulai dari konsep yang paling inklusif di puncak
						ke konsep yang paling tidak inklusif.
					</li>
					<br />
					<li>
						Kemudian hubungkan kosep yang berkaitan dengan garis-garis penghubung dan memberi kata
						penghubung pada setiap garis punghubung tersebut.
					</li>
					<br />
					<li>
						Kembangkan peta minda yang telah dibuat tersebut. Contohnya dengan menambahkan dua atau lebih
						konsep yang baru ke setiap konsep yang sudah ada di dalam peta minda.
					</li>
					<br />
				</ul>
			</div>
		</div>
	)
})

const Page6 = forwardRef((props, ref) => {
	return (
		<div className='demoPage' ref={ref}>
			<h1 className='header'>Penutup</h1>
			<h3 className='subheader'>.</h3>
			<div className='isi'>
        <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
		</div>
	)
})

const Page7 = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <div className="page-content">
      </div>
    </div>
  );
});
