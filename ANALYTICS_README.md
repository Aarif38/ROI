# AnalyticsScreen Component

A fully refactored React component with Cyberpunk/Dark UI theme using Tailwind CSS and Recharts.

## Features

### 1. Radar Chart - Beceri Analizi (Skill Analysis)
- Displays 5 skill categories in Turkish:
  - **Hafıza** (Memory) - 85%
  - **Mantık** (Logic) - 78%
  - **Dikkat** (Attention) - 92%
  - **Hız** (Speed) - 70%
  - **Sözel** (Verbal) - 88%
- Styled with cyan color (#00F0FF) and glow effect

### 2. Bar Chart - Haftalık Aktivite (Weekly Activity)
- **Replaced the ActivityHeatmap component with a BarChart**
- Shows last 7 days with Turkish day abbreviations:
  - Pt (Pazartesi/Monday)
  - Sa (Salı/Tuesday)
  - Ça (Çarşamba/Wednesday)
  - Pe (Perşembe/Thursday)
  - Cu (Cuma/Friday)
  - Ct (Cumartesi/Saturday)
  - Pz (Pazar/Sunday)
- Features:
  - CartesianGrid with low opacity (0.3)
  - Hidden Y-axis for minimal design
  - Cyan-colored bars (#00F0FF) with glow effect
  - Dark tooltip (backgroundColor: #1F2937)
  - Rounded bar tops

### 3. Progress Bars - Haftalık Gelişim (Weekly Progress)
- Displays ProgressBar components for the same 5 skills
- Each skill has a distinct neon color:
  - **Hafıza** - Cyan (#00F0FF)
  - **Mantık** - Purple (#A855F7)
  - **Dikkat** - Pink (#EC4899)
  - **Hız** - Green (#10B981)
  - **Sözel** - Orange/Yellow (#F59E0B)
- Features glow effects matching the Cyberpunk theme

### 4. Additional Sections
- **İstatistikler (Statistics)**: Display session count, average score, and best score
- **Başarılar (Achievements)**: Showcase user achievements with icons

## Dependencies

```json
{
  "react": "^18.2.0",
  "recharts": "^2.10.0",
  "tailwindcss": "^3.4.0"
}
```

## Imports

The component uses the following Recharts components:

```typescript
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
```

## Styling

- **Theme**: Cyberpunk/Dark UI
- **Color Scheme**: 
  - Primary: Cyan (#00F0FF)
  - Secondary: Purple (#A855F7)
  - Accent: Pink (#EC4899), Green (#10B981), Yellow (#F59E0B)
- **Background**: Dark grays (gray-900, gray-800, gray-700)
- **Effects**: Neon glows, shadows, and gradients
- **Typography**: Clean, modern font with gradient text effects

## Usage

```tsx
import AnalyticsScreen from './AnalyticsScreen';

function App() {
  return <AnalyticsScreen />;
}
```

## Customization

To customize the data, modify the following constants in the component:

- `radarData`: Update skill values (0-100)
- `weeklyActivityData`: Update daily activity values
- `weeklyProgress`: Update progress percentages and colors

## Design Philosophy

The component follows a Cyberpunk aesthetic with:
- Dark backgrounds with colored borders
- Neon glow effects
- Gradient text and backgrounds
- High contrast for readability
- Smooth transitions and animations
