
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Event Management System</h2>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
