import { useEffect } from 'react';
import './snackbar.styles.css';  

const Snackbar = ({ message, visible, onClose }) => {
    useEffect(() => {
        if (visible) {
            // Auto-hide after 3 seconds
            const timer = setTimeout(() => {
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <div
            className={`snackbar ${visible ? 'snackbar-show' : ''}`}
        >
            <span>{message}</span>
        </div>
    );
};

export default Snackbar;
