import logo from '../../../assets/Logo/2.png'
const Footer = () => {
  return (
    <div>
      <div className="bg-neutral">
        <footer className="footer p-10 bg-neutral text-neutral-content my-container">
          <div>
            <img src={logo} alt="" className="w-16" />
            <p className='w-[20rem]'>
              Photography Learning's website is a comprehensive online platform
              dedicated to providing valuable resources and education for
              photographers of all skill levels. The website offers a range of
              learning materials, tutorials, tips, and techniques to help
              individuals enhance their photography skills and knowledge. Here
              is a summary of the key features and offerings of the website:
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <p className="text-center py-2 text-white">
          &copy; Copy right {new Date().getFullYear()}. All rights reserved by
          FramedMoment. Develop by{" "}
          <span className="uppercase font-bold text-orange-500">redwan</span>
        </p>
      </div>
    </div>
  );
}

export default Footer