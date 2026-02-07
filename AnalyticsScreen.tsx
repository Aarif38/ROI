import React from 'react';
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

// ProgressBar Component
const ProgressBar = ({ 
  label, 
  value, 
  color 
}: { 
  label: string; 
  value: number; 
  color: string; 
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        <span className="text-sm font-medium text-gray-300">{value}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-2.5 rounded-full transition-all duration-300"
          style={{
            width: `${value}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      </div>
    </div>
  );
};

const AnalyticsScreen = () => {
  // Radar Chart Data - Updated with 5 Turkish skill categories
  const radarData = [
    { skill: 'Hafıza', value: 85 },
    { skill: 'Mantık', value: 78 },
    { skill: 'Dikkat', value: 92 },
    { skill: 'Hız', value: 70 },
    { skill: 'Sözel', value: 88 },
  ];

  // Bar Chart Data - Last 7 days (Turkish day abbreviations)
  const weeklyActivityData = [
    { day: 'Pt', activity: 65 },
    { day: 'Sa', activity: 45 },
    { day: 'Ça', activity: 80 },
    { day: 'Pe', activity: 55 },
    { day: 'Cu', activity: 90 },
    { day: 'Ct', activity: 75 },
    { day: 'Pz', activity: 60 },
  ];

  // Weekly Progress Data - Same 5 skills with neon colors
  const weeklyProgress = [
    { label: 'Hafıza', value: 85, color: '#00F0FF' }, // Cyan
    { label: 'Mantık', value: 78, color: '#A855F7' }, // Purple
    { label: 'Dikkat', value: 92, color: '#EC4899' }, // Pink
    { label: 'Hız', value: 70, color: '#10B981' }, // Green
    { label: 'Sözel', value: 88, color: '#F59E0B' }, // Orange/Yellow
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Analitik Gösterge Paneli
          </h1>
          <p className="text-gray-400 mt-2">
            Performans ve gelişim takibi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Radar Chart Section */}
          <div className="bg-gray-800 rounded-lg p-6 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              Beceri Analizi
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: '#9CA3AF' }}
                />
                <Radar
                  name="Beceriler"
                  dataKey="value"
                  stroke="#00F0FF"
                  fill="#00F0FF"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart Section - Replaced Heatmap */}
          <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              Haftalık Aktivite
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis
                  dataKey="day"
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  axisLine={{ stroke: '#4B5563' }}
                />
                <YAxis
                  hide={true}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                  }}
                  labelStyle={{ color: '#9CA3AF' }}
                  itemStyle={{ color: '#00F0FF' }}
                />
                <Bar
                  dataKey="activity"
                  fill="#00F0FF"
                  radius={[8, 8, 0, 0]}
                  style={{
                    filter: 'drop-shadow(0 0 8px #00F0FF)',
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Weekly Progress Section */}
          <div className="bg-gray-800 rounded-lg p-6 border border-pink-500/30 shadow-lg shadow-pink-500/10 lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 text-pink-400">
              Haftalık Gelişim
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {weeklyProgress.map((item, index) => (
                <ProgressBar
                  key={index}
                  label={item.label}
                  value={item.value}
                  color={item.color}
                />
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-gray-800 rounded-lg p-6 border border-green-500/30 shadow-lg shadow-green-500/10">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">
              İstatistikler
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                <span className="text-gray-300">Toplam Oturumlar</span>
                <span className="text-2xl font-bold text-cyan-400">247</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                <span className="text-gray-300">Ortalama Skor</span>
                <span className="text-2xl font-bold text-purple-400">82%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                <span className="text-gray-300">En İyi Skor</span>
                <span className="text-2xl font-bold text-pink-400">98%</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
              Başarılar
            </h2>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-700/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-200">Hafıza Ustası</p>
                  <p className="text-sm text-gray-400">100 görev tamamlandı</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-700/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-200">Hız Şampiyonu</p>
                  <p className="text-sm text-gray-400">Rekor sürede tamamlandı</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-700/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-200">Dikkat Ustası</p>
                  <p className="text-sm text-gray-400">Kusursuz performans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsScreen;
