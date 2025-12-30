import type { KcContext } from "../KcContext";
import type { ThemeConfig } from "../themeConfig";

interface MaintenancePageProps {
    kcContext: KcContext;
    themeConfig: ThemeConfig;
}

export default function MaintenancePage({ themeConfig }: MaintenancePageProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="max-w-2xl mx-auto px-4 py-8 text-center">
                <div className="mb-8">
                    {themeConfig.logo && (
                        <img 
                            src={themeConfig.logo} 
                            alt={themeConfig.appName}
                            className="h-16 mx-auto mb-4"
                        />
                    )}
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {themeConfig.appName}
                    </h1>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
                    <div className="text-6xl mb-4">🔧</div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Under Maintenance
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        {themeConfig.bannerMessage || "We're currently performing scheduled maintenance. Please check back soon."}
                    </p>
                    <div className="text-sm text-gray-500">
                        Expected back: Check with your administrator
                    </div>
                </div>

                <div className="text-sm text-gray-600">
                    <p>Need immediate assistance? Contact support.</p>
                </div>
            </div>
        </div>
    );
}
