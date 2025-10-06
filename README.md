# Galactic Orbit 🚀

A modern web application built with Vite and TanStack Router that provides real-time space weather data from NASA's DONKI (Space Weather Database Of Notifications, Knowledge, Information).

## Features

- **Real-time Space Weather Data**: Access NASA's DONKI API for up-to-date information
- **Solar Flare Monitoring**: Track solar flare events and intensity levels
- **Geomagnetic Storm Alerts**: Stay informed about geomagnetic storm forecasts
- **CME Analysis**: View Coronal Mass Ejection predictions and analysis
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS for a sleek, dark theme
- **Type-Safe**: Full TypeScript support throughout the application
- **Fast Development**: Powered by Vite for lightning-fast HMR

## Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Library**: [React](https://react.dev/) - UI library
- **Routing**: [TanStack Router](https://tanstack.com/router) - Type-safe routing
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icons
- **API**: [NASA API](https://api.nasa.gov/) - DONKI Space Weather Database

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/emy3/galactic-orbit.git
cd galactic-orbit
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up NASA API key:
Create a `.env` file in the root directory:
```bash
VITE_NASA_API_KEY=your_api_key_here
```

Get your free API key at: https://api.nasa.gov/

Note: The app will use `DEMO_KEY` by default, which has rate limits.

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
galactic-orbit/
├── src/
│   ├── routes/              # Application routes
│   │   ├── __root.tsx       # Root layout
│   │   └── index.tsx        # Home page
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── lib/
│   │   ├── utils.ts         # Utility functions
│   │   └── nasa-api.ts      # NASA API integration
│   ├── styles/
│   │   └── globals.css      # Global styles
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts        # Vite environment types
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind CSS config
├── tsr.config.json          # TanStack Router config
└── package.json
```

## NASA DONKI API

This application uses NASA's DONKI (Space Weather Database Of Notifications, Knowledge, Information) API to provide:

- **CME (Coronal Mass Ejection)**: Large expulsions of plasma from the solar corona
- **GST (Geomagnetic Storm)**: Disturbances in Earth's magnetosphere
- **FLR (Solar Flare)**: Sudden flashes of increased brightness on the Sun
- **SEP (Solar Energetic Particle)**: High-energy particles from the Sun
- **MPC (Magnetopause Crossing)**: When solar wind compresses Earth's magnetosphere
- **RBE (Radiation Belt Enhancement)**: Increases in radiation belt particle populations
- **HSS (High Speed Stream)**: Fast-moving solar wind streams

API Documentation: https://api.nasa.gov/

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- NASA for providing the DONKI API
- TanStack team for the amazing Start framework
- shadcn for the beautiful UI components

