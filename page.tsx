'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Twitter, ChevronDown, Menu, X, Check } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-100 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-950 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-green-400"
            >
              HusoNode
            </motion.div>
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                  <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-lg hover:text-green-400 transition-colors ${
                        activeSection === item.toLowerCase() ? 'text-green-400' : ''
                      }`}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-100 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-950"
            >
              <ul className="py-4">
                {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(52, 211, 153, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    className="py-2"
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`block text-center text-lg hover:text-green-400 transition-colors ${
                        activeSection === item.toLowerCase() ? 'text-green-400' : ''
                      }`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            style={{ opacity, scale }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="filter brightness-25"
            />
          </motion.div>
          <div className="text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-bold mb-4 text-green-400"
            >
              HusoNode
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl text-gray-300"
            >
              Güvenilir Validatör Hizmeti
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, backgroundColor: '#065f46' }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-800 text-gray-100 px-8 py-4 rounded-full transition-colors text-lg font-semibold inline-block"
              >
                Keşfet
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={40} className="text-green-400" />
          </motion.div>
        </section>

        <section id="about" className="py-20 bg-gray-950 bg-opacity-70">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-12 text-center text-green-400"
            >
              Hakkımızda
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <div className="rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="About Us"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 md:pl-12"
              >
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  HusoNode, blockchain ağlarında güvenilir ve yüksek performanslı validatör hizmetleri sunan öncü bir platformdur. Misyonumuz, ağ güvenliğini ve verimliliğini en üst düzeye çıkararak, blockchain ekosisteminin sürdürülebilir büyümesine katkıda bulunmaktır.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Deneyimli ekibimiz ve gelişmiş altyapımız sayesinde, müşterilerimize kesintisiz ve güvenilir hizmet sunuyoruz. HusoNode ile geleceğin merkeziyetsiz dünyasında öncü olun ve blockchain teknolojisinin sunduğu fırsatları en iyi şekilde değerlendirin.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-gray-900 bg-opacity-50">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-12 text-center text-green-400"
            >
              Portföy
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { name: 'Cosmos', description: 'Cosmos Hub validatör hizmeti', image: '/placeholder.svg?height=200&width=300' },
                { name: 'Polkadot', description: 'Polkadot ağında güvenilir node işletimi', image: '/placeholder.svg?height=200&width=300' },
                { name: 'Ethereum', description: 'Ethereum 2.0 staking çözümleri', image: '/placeholder.svg?height=200&width=300' },
                { name: 'Avalanche', description: 'Avalanche ağında yüksek performanslı validatör', image: '/placeholder.svg?height=200&width=300' },
                { name: 'Solana', description: 'Solana ekosisteminde hızlı ve güvenilir node', image: '/placeholder.svg?height=200&width=300' },
                { name: 'Cardano', description: 'Cardano stake pool operatörü', image: '/placeholder.svg?height=200&width=300' },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
                  className="bg-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-green-300">{project.name}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-950 bg-opacity-70">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-12 text-center text-green-400"
            >
              İletişim
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Contact Us"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 md:pl-12"
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-green-300 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-full bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-green-300 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-full bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-green-300 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-3xl bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, backgroundColor: '#065f46' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-green-700 text-gray-100 py-3 px-6 rounded-full transition-colors text-lg font-semibold"
                  >
                    Gönder
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-green-400 mb-2">HusoNode</h3>
              <p className="text-gray-300">Güvenilir Validatör Hizmeti</p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#34D399' }}
                whileTap={{ scale: 0.9 }}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#34D399' }}
                whileTap={{ scale: 0.9 }}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#34D399' }}
                whileTap={{ scale: 0.9 }}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Twitter size={28} />
              </motion.a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2023 HusoNode Validator. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
