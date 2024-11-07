'use client'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon, FaRobot } from 'react-icons/fa'

const ThemeChanger = () => {
  const [theme, setTheme] = useState('light')

  // Fungsi untuk mengubah tema
  const toggleTheme = (newTheme: string) => {
    document.querySelector('html')?.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  // Load tema dari localStorage saat komponen dimount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.querySelector('html')?.setAttribute('data-theme', savedTheme)
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Desktop View */}
      <div className="hidden sm:flex gap-2">
        <ThemeButton
          onClick={() => toggleTheme('light')}
          isActive={theme === 'light'}
          icon={<FaSun />}
          label="Light"
        />
        <ThemeButton
          onClick={() => toggleTheme('dark')}
          isActive={theme === 'dark'}
          icon={<FaMoon />}
          label="Dark"
        />
        <ThemeButton
          onClick={() => toggleTheme('cyberpunk')}
          isActive={theme === 'cyberpunk'}
          icon={<FaRobot />}
          label="Cyberpunk"
        />
      </div>

      {/* Mobile View */}
      <div className="dropdown dropdown-end sm:hidden">
        <label tabIndex={0} className="btn btn-circle btn-primary">
          {theme === 'light' ? <FaSun /> : theme === 'dark' ? <FaMoon /> : <FaRobot />}
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li>
            <button onClick={() => toggleTheme('light')} className={theme === 'light' ? 'active' : ''}>
              <FaSun /> Light
            </button>
          </li>
          <li>
            <button onClick={() => toggleTheme('dark')} className={theme === 'dark' ? 'active' : ''}>
              <FaMoon /> Dark
            </button>
          </li>
          <li>
            <button onClick={() => toggleTheme('cyberpunk')} className={theme === 'cyberpunk' ? 'active' : ''}>
              <FaRobot /> Cyberpunk
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

interface ThemeButtonProps {
  onClick: () => void
  isActive: boolean
  icon: React.ReactNode
  label: string
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ onClick, isActive, icon, label }) => (
  <button
    onClick={onClick}
    className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-ghost'}`}
  >
    {icon}
    <span className="hidden md:inline ml-2">{label}</span>
  </button>
)

export default ThemeChanger