

const Footer = () => {
  return (
    <div>
      <footer className=" p-10 bg-blue-200 justify-center items-center text-blue-950">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 ">
          <nav className="flex flex-col  justify-center items-center">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
         <nav className="flex flex-col justify-center items-center">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
         <nav className="flex flex-col  justify-center items-center">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form className="flex flex-col  justify-center items-center">
            <h6 className="footer-title ">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;