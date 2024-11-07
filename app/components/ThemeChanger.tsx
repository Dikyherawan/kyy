'use client'
import { useEffect, useState } from 'react'

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
    <div className="fixed top-4 right-4 flex gap-2">
      <button
        onClick={() => toggleTheme('light')}
        className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-ghost'}`}
      >
        🌞 Light
      </button>
      <button
        onClick={() => toggleTheme('dark')}
        className={`btn ${theme === 'dark' ? 'btn-primary' : 'btn-ghost'}`}
      >
        🌙 Dark
      </button>
      <button
        onClick={() => toggleTheme('cyberpunk')}
        className={`btn ${theme === 'cyberpunk' ? 'btn-primary' : 'btn-ghost'}`}
      >
        🤖 Cyberpunk
      </button>
    </div>
  )
}

export default ThemeChanger