export const Footer = ({ name }: { name: string }) => {
  const year = new Date().getUTCFullYear();

  return (
    <footer className="footer">
      <div className="footer-social">
        <h4>Sígueme en mis redes</h4>
        <div className="footer-social_icons">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="footer-copy">
        <p>
          Copyright &copy; {year} - {name} | Todos los derechos reservados
        </p>
        <span></span>
      </div>
    </footer>
  );
};
