import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';

const errorMessages: Record<string, { title: string; message: string }> = {
  '404': {
    title: 'Page Not Found',
    message: "The page you're looking for doesn't exist or has been moved.",
  },
  '503': {
    title: 'Service Unavailable',
    message: 'Our servers are currently overloaded. Please try again later.',
  },
  '505': {
    title: 'HTTP Version Not Supported',
    message: 'This request cannot be processed due to an unsupported protocol.',
  },
};

const ErrorPage = () => {
  const navigate = useNavigate();
  const { errorCode } = useParams<{ errorCode: string }>();
  const error = errorMessages[errorCode ?? '404'];

  return (
    <div className="error-container">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="error-content">
        <h1 className="error-code">{errorCode ?? '404'}</h1>
        <h2 className="error-title">{error.title}</h2>
        <p className="error-message">{error.message}</p>
        <div className="error-buttons">
          <button
            onClick={e => {
              e.preventDefault();
              void navigate('/');
            }}
            className="btn btn-primary"
          >
            Go Home
          </button>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="btn btn-secondary"
          >
            Try Again
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
