import Email from '@/components/Email'
import SocialIcons from '@/components/SocialsIcons'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import Projects from '@/sections/Project'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <SocialIcons/>
      <Email/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  )
}
