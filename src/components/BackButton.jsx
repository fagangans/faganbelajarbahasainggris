import { useNavigate, useLocation } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const from = location.state?.from;
    if (from && typeof from === 'string' && from.startsWith('/')) {
      navigate(from);
    } else {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-1 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
    >
      ← Kembali
    </button>
  );
}
