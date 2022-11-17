'use client';

import { useDarkMode } from 'src/hooks/useDarkMode';
import { useAnalyticsEvent } from 'src/hooks/useAnalytics';
import { Moon20, Sun20 } from './icons';

export default function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useDarkMode();
  const { trackCustomEvent } = useAnalyticsEvent();

  return (
    <button
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      onClick={() => {
        setIsDark(!isDark);
        trackCustomEvent({ eventName: 'toggle-theme' });
      }}
      className={className}
    >
      {isDark ? <Moon20 /> : <Sun20 />}
    </button>
  );
}
