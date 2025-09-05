import React from 'react';
import ProfilePage from "./app/(tabs)/Profile"; // Or other components/screens
import { ThemeProvider } from "./app/(tabs)/ThemeContext"; // Your theme provider file

export default function App() {
  return (
    <ThemeProvider>
      <ProfilePage />
      {/* Other screens/components */}
    </ThemeProvider>
  );
}