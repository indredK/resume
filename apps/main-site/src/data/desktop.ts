import type { SkillNode } from './types'

export const desktopSkills: SkillNode = {
  id: 'desktop',
  name: '桌面端技术',
  icon: '🖥️',
  color: '#60a5fa',
  children: [
    {
      id: 'dt-web',
      name: 'Web 桌面端',
      children: [
        { id: 'electron', name: 'Electron', level: 88, link: 'https://github.com/kindred-resume-hub/electron-demo' },
        { id: 'tauri', name: 'Tauri (Rust)', level: 72 },
        { id: 'wails', name: 'Wails (Go)', level: 75, link: 'https://github.com/kindred-resume-hub/wails-demo' },
        { id: 'neutralino', name: 'Neutralino.js', level: 60 }
      ]
    },
    {
      id: 'dt-dotnet',
      name: 'C# .NET 生态',
      children: [
        { id: 'wpf', name: 'WPF', level: 85 },
        { id: 'winforms', name: 'WinForms', level: 82 },
        { id: 'maui', name: '.NET MAUI', level: 70 },
        { id: 'avalonia', name: 'Avalonia', level: 72 },
        { id: 'blazor-hybrid', name: 'Blazor Hybrid', level: 68 },
        { id: 'console-dotnet', name: 'Console Application', level: 90 },
        { id: 'unity3d', name: 'Unity3D', level: 75 }
      ]
    },
    {
      id: 'dt-cpp',
      name: 'C++ 生态',
      children: [
        { id: 'qt', name: 'Qt', level: 78 },
        { id: 'mfc', name: 'MFC', level: 70 },
        { id: 'gtk', name: 'GTK+', level: 55 }
      ]
    },
    {
      id: 'dt-delphi',
      name: 'Delphi / Lazarus',
      level: 50
    },
    {
      id: 'dt-cross',
      name: '跨平台框架',
      children: [
        { id: 'flutter-dt', name: 'Flutter Desktop', level: 70 },
        { id: 'javafx', name: 'JavaFX', level: 60 }
      ]
    }
  ]
}
