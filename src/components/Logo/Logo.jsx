import './Logo.css';

export default function Logo() {
    const logoSrc = '/logo.png'; 

    return (
        <a href="/" className="milogo">
            <img src={logoSrc} alt="Logo" />
            <div className="nombre">LP</div>
        </a>
    );
}