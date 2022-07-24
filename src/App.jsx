import React,{ useState } from 'react'

function App() {
  // hamburger
  const [isActive, setActive] = useState();
  const hamburger = () => {
    setActive(!isActive);
  };
  // navbar fixed
  window.onscroll=function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
      header.classList.add('navbar-fixed');
    }else{
      header.classList.remove('navbar-fixed');
    }
  }

  return (
    <React.Fragment>
      {/* Header Start */}
      <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="" className='font-bold text-lg text-primary block py-6'>Randi</a>
            </div>
            <div className="flex items-center px-4">
              <button onClick={hamburger} type='button' className={isActive ? "block absolute right-4 hamburger-active lg:hidden" : "block absolute right-4 lg:hidden"}>
                <span className='hamburger-line origin-top-left transition duration-300 ease-in-out'></span>
                <span className='hamburger-line transition duration-300 ease-in-out'></span>
                <span className='hamburger-line origin-bottom-left transition duration-300 ease-in-out'></span>
              </button>

              <nav className={isActive ?'absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none':'hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'}>
                <ul className='block lg:flex'>
                  <li className='group'>
                    <a href="#home" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Beranda</a>
                  </li>
                  <li className='group'>
                    <a href="#about" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Tentang Saya</a>
                  </li>
                  <li className='group'>
                    <a href="#portfolio" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Portfolio</a>
                  </li>
                  <li className='group'>
                    <a href="#clients" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Klien</a>
                  </li>
                  <li className='group'>
                    <a href="#blog" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Blog</a>
                  </li>
                  <li className='group'>
                    <a href="#contact" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Kontak</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Start */}
      <section id='home' className='pt-36'>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className='text-base font-semibold text-primary md:text-xl'>halo Semua 👋, saya <span className='block font-bold text-dark text-4xl mt-1'>Randi Apriliyadi Rahmat</span></h1>
              <h2 className='font-medium text-secondary text-lg mb-5 lg:text-2xl'>Full-stack Web Developer | <span className='text-dark'>Laravel Developer</span></h2>
              <p className='font-medium text-secondary mb-10 leading-relaxed'>Selamat datang di GithubPages saya.</p>
              <a href="#contact" className='text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Hubungi Saya</a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img src="./../public/assets/img/person.png" alt="randi" className='max-w-full mx-auto w-50' />
                <span className='absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
                <svg width='400' height='400' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#14b8a6" d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                    transform="translate(100 100) scale(1.1)" />
                </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className='font-bold uppercase text-primary text-lg mb-3'>Tentang Saya</h4>
              <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>Biografi singkat saya</h2>
              <p className='font-medium text-base text-secondary max-w-xl lg:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem alias, dolor accusantium doloribus, illo iste ducimus placeat est laudantium corporis impedit, debitis delectus aliquid hic! Nam, natus repellendus! Odit assumenda praesentium quo alias eum quasi cumque suscipit consequatur nam minus recusandae cum ipsam sapiente, eius, fugiat nobis qui esse id.</p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className='font-semibold font-dark text-2xl mb-4 lg:text-3xl lg:pt-10'>Kenapa Memilih menjadi programmer?</h3>
              <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, dolores quia eligendi sequi cupiditate totam alias? Natus nulla ad consequuntur quos accusamus magnam deserunt laboriosam a autem repellendus perferendis tempora nam fugiat est, odio cum ratione vitae harum aperiam fugit nesciunt! Tempora saepe sapiente sit perspiciatis similique. Quod, consequuntur dicta.</p>
            <div className="flex items-center">
              {/* youtube */}
              <a href="" target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
                <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* instagram */}
              <a href="" target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
                <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              {/* github */}
              <a href="" target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
                <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              {/* linkdin */}
              <a href="" target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
                <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Portfolio Section Start */}
    <section id="portfolio" className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Project Terbaru</h2>
            <p className="text-md font-medium text-secondary md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus porro consequuntur alias, commodi nemo enim aliquam ipsam obcaecati? Assumenda, ipsam?
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src="https://source.unsplash.com/360x200?website-company" alt="Landing Page" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Landing Page Sandhika Galih</h3>
            <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src="https://source.unsplash.com/360x200?website-store" alt="E-Commerce" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">E-Commerce</h3>
            <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src="https://source.unsplash.com/360x200?website-market" alt="Technical Documentation" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Technical Documentation</h3>
            <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src="https://source.unsplash.com/360x200?website-security" alt="Tribute Page" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Tribute Page</h3>
            <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
          </div>
        </div>
      </div>
    </section>
    {/* Portfolio Section End */}

    {/* Clients Section Start */}
    <section id="clients" className="bg-slate-800 pt-36 pb-32 dark:bg-slate-300">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Clients</h4>
            <h2 className="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl">Yang Pernah Bekerjasama</h2>
            <p className="text-md font-medium text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit facilis velit!</p>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a href="#" className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
              <img src="./../public/assets/img/clients/google.svg" alt="Google" />
            </a>
            <a href="#" className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
              <img src="./../public/assets/img/clients/gojek.svg" alt="Gojek" />
            </a>
            <a href="#" className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
              <img src="./../public/assets/img/clients/tokopedia.svg" alt="Tokopedia" />
            </a>
            <a href="#" className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
              <img src="./../public/assets/img/clients/traveloka.svg" alt="traveloka" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Clients Section End */}

    {/* Blog Section Start */}
    <section id="blog" className="bg-slate-100 pt-36 pb-32 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
            <p className="text-md font-medium text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam perspiciatis blanditiis dolores?</p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
              <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a href="#" className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">Tips Belajar Programming</a>
                </h3>
                <p className="mb-6 text-base font-medium text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?</p>
                <a href="#" className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
              <img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="Mechanical Keyboard" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a href="#" className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">Review Keyboard GMMK Pro</a>
                </h3>
                <p className="mb-6 text-base font-medium text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi facilis illum in.</p>
                <a href="#" className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
              <img src="https://source.unsplash.com/360x200?coffee" alt="Coffee" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a href="#" className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">Menikmati Secangkir Kopi</a>
                </h3>
                <p className="mb-6 text-base font-medium text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, totam ipsum ea quam sequi velit sunt.</p>
                <a href="#" className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Blog Section End */}

    {/* Contact Section Start */}
    <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Contact</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
            <p className="text-md font-medium text-secondary md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sed.</p>
          </div>
        </div>

        <form>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="mb-8 w-full px-4">
              <label htmlFor="name" className="text-base font-bold text-primary">Nama</label>
              <input type="text" id="name" className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="mb-8 w-full px-4">
              <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
              <input type="email" id="email" className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="mb-8 w-full px-4">
              <label htmlFor="message" className="text-base font-bold text-primary">Pesan</label>
              <textarea id="email" className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
            </div>
            <div className="w-full px-4">
              <button className="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">Kirim</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    {/* Contact Section End */}

    {/* Footer Start */}
    <footer className="bg-dark pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h2 className="mb-5 text-4xl font-bold text-white">RANDI</h2>
            <h3 className="mb-2 text-2xl font-bold">Hubungi Saya</h3>
            <p>randiapriliyadi@gmail.com</p>
            <p>pagedangan, Kabupaten Tangerang</p>
            <p>Banten</p>
          </div>
          <div className="mb-12 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-white">Kategori Tulisan</h3>
            <ul className="text-slate-300">
              <li>
                <a href="#" className="mb-3 inline-block text-base hover:text-primary">Programming</a>
              </li>
              <li>
                <a href="#" className="mb-3 inline-block text-base hover:text-primary">Teknologi</a>
              </li>
              <li>
                <a href="#" className="mb-3 inline-block text-base hover:text-primary">Gaya Hidup</a>
              </li>
            </ul>
          </div>
          <div className="mb-12 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-white">Tautan</h3>
            <ul className="text-slate-300">
              <li>
                <a href="#home" className="mb-3 inline-block text-base hover:text-primary">Beranda</a>
              </li>
              <li>
                <a href="#about" className="mb-3 inline-block text-base hover:text-primary">Tentang Saya</a>
              </li>
              <li>
                <a href="#portfolio" className="mb-3 inline-block text-base hover:text-primary">Portfolio</a>
              </li>
              <li>
                <a href="#clients" className="mb-3 inline-block text-base hover:text-primary">Klien</a>
              </li>
              <li>
                <a href="#blog" className="mb-3 inline-block text-base hover:text-primary">Blog</a>
              </li>
              <li>
                <a href="#contact" className="mb-3 inline-block text-base hover:text-primary">kontak</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-slate-700 pt-10">
          <div className="mb-5 flex items-center justify-center">
            {/* Youtube */}
            <a
              href="https://youtube.com/webprogrammingunpas"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>YouTube</title>
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/sandhikagalih"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/sandhikagalih"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Twitter</title>
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@sandhika.galih"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>TikTok</title>
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sandhikagalih"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
          <p className="text-center text-xs font-medium text-slate-500">
            Dibuat dengan <span className="text-pink-500">❤️</span> oleh <a href="https://instagram.com/randiapriliyadi" target="_blank" className="font-bold text-primary">Randi Apriliyadi Rahmat.</a>
          </p>
        </div>
      </div>
    </footer>
    {/* Footer End */}
    </React.Fragment>
  )
}

export default App
