import { ROUTES } from './rotes';
import { NavLink } from './atoms';
import { GitHub24, MailAt24, Twitter24 } from './icons';

export function Footer() {
  return (
    <footer className="text-secondary relative h-56 w-full overflow-hidden bg-back-secondary">
      <div className="container m-auto h-full px-5 pt-24 pb-12 md:max-w-screen-md md:px-20 lg:max-w-screen-lg">
        <div className="container flex-col justify-between md:space-y-8">
          <nav className="hidden flex-row items-center justify-center space-x-6 text-sm md:justify-end lg:flex">
            {ROUTES.map((route) => (
              <NavLink key={route.path} to={route.path} title={route.label}>
                {route.label}
              </NavLink>
            ))}
          </nav>
          <div className="my-4 flex flex-col-reverse space-y-8 space-y-reverse md:flex-row md:justify-between md:space-y-0">
            <span
              aria-label="Copyright"
              className="self-center text-xs tracking-wider md:self-end"
            >
              © 2022 - 2022 Harris Tsai. All Rights Reserved.
            </span>
            <div className="flex flex-row items-center justify-center space-x-6 md:justify-end">
              <span>
                <a
                  href="mailto:rickoneget@gmail.com"
                  aria-label="Email rickoneget@gmail.com"
                  title="Email"
                  className="focus:text-accent focus-visible:outline-accent"
                >
                  <MailAt24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/thehelium"
                  aria-label="GitHub Profile"
                  title="Github Profile"
                  className="focus:text-accent focus-visible:outline-accent"
                  target="_blank"
                >
                  <GitHub24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/return_db"
                  aria-label="Twitter Profile"
                  title="Twitter Profile"
                  className="focus:text-accent focus-visible:outline-accent"
                  target="_blank"
                >
                  <Twitter24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
