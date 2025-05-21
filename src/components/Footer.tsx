export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-10">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">MyApp</h3>
                        <p className="text-gray-400">Din lösning för alla behov</p>
                    </div>

                    <div className="text-center md:text-right">
                        <h4 className="font-semibold mb-2">Kontaktinformation</h4>
                        <p className="text-gray-400">info@myapp.com</p>
                        <p className="text-gray-400">+46 123 456 789</p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} MyApp. Alla rättigheter reserverade.</p>
                </div>
            </div>
        </footer>
    );
}