# Task Manager App

A modern task management application built with React + Vite and styled with Tailwind CSS. This application demonstrates efficient state management in React and responsive design principles.

![Screenshot_27-11-2024_175852_localhost](https://github.com/user-attachments/assets/b35efd70-f51c-47eb-a876-b17fe62663cb)

## Features

- Create, edit, and delete tasks
- Mark tasks as complete/incomplete
- Filter tasks by status (All, Active, Completed)
- Drag and drop tasks to reorder
- Persistent storage using localStorage
- Responsive design for all device sizes
- Dark/Light theme support

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Icons
- React Beautiful DND (for drag and drop)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

## State Management

This project demonstrates various approaches to React state management:

- useState for local component state
- useContext for global theme and user preferences
- Custom hooks for task management logic
- localStorage for persistent data storage

## Styling

The application uses Tailwind CSS for styling, showcasing:

- Responsive design principles
- Custom color schemes
- Dark/Light theme implementation
- Modern UI components
- Smooth transitions and animations

## Project Structure

```
src/
├── components/
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── TaskForm.jsx
│   └── FilterBar.jsx
├── hooks/
│   ├── useTasks.js
│   └── useTheme.js
├── context/
│   └── ThemeContext.jsx
├── styles/
│   └── index.css
└── App.jsx
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- All contributors who help improve this project
