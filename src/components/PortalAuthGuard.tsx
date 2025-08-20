import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

interface PortalAuthGuardProps {
	children: React.ReactNode;
}

const PortalAuthGuard: React.FC<PortalAuthGuardProps> = ({ children }) => {
	const { user, loading, isAdmin } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	// Public routes: only login
	const isPublicRoute = location.pathname === '/';

	useEffect(() => {
		if (!loading) {
			if (!user && !isPublicRoute) {
				navigate('/', { replace: true });
			} else if (user && location.pathname.startsWith('/admin') && !isAdmin) {
				navigate('/dashboard', { replace: true });
			} else if (user && location.pathname === '/') {
				navigate('/dashboard', { replace: true });
			}
		}
	}, [user, loading, navigate, location.pathname, isPublicRoute, isAdmin]);

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
					<p className="text-gray-600">Ladataan...</p>
				</div>
			</div>
		);
	}

	if ((isPublicRoute && !user) || (!isPublicRoute && user)) {
		return <>{children}</>;
	}

	return null;
};

export default PortalAuthGuard;
