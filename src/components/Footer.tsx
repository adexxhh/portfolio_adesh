import data from '@/data/data.json';

export default function Footer() {
    return (
        <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100 mt-12">
            <p>&copy; {new Date().getFullYear()} {data.personal.name}. All rights reserved.</p>
        </footer>
    );
}
