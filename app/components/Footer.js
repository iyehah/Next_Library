const Footer = () => {
    return (
      <footer className="px-4 py-6">
        <div
            className="text-center text-sm"
            style={{
              marginTop: `1.3rem`,
              marginRight: `2.2rem`,
              paddingBottom: '0.3rem',
              float: 'right'
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://nextjs.org/">NextJS</a>
          </div>
      </footer>
    );
  };
  
  export default Footer;