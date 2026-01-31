"use client"

import * as React from "react"
import { Moon, Sun, Heart } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const active = (resolvedTheme ?? theme ?? 'light')

  const themes = ['light', 'dark', 'bishoujo'] as const
  const toggleTheme = () => {
    const idx = themes.indexOf(active as typeof themes[number])
    const next = themes[(idx + 1) % themes.length]
    setTheme(next)
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="relative"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${active === 'dark' || active === 'bishoujo' ? '-rotate-90 scale-0 absolute' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${active === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
      <Heart className={`absolute h-[1.2rem] w-[1.2rem] text-pink-500 transition-all ${active === 'bishoujo' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
