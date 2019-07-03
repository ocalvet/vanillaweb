export default root => {
  const nav = window.document.createElement('nav');
  const mobileNavigation = window.document.createElement('div');
  mobileNavigation.className = 'nav-wrapper container';
  nav.appendChild(mobileNavigation);
  const logoLink = window.document.createElement('a');
  logoLink.href = '#';
  logoLink.className = `brand-logo`;
  logoLink.innerText = 'Logo';
  mobileNavigation.appendChild(logoLink);
  root.appendChild(nav);
  return true;
  //   <nav>
  //     <div class="nav-wrapper">
  //       <a href="#" class="brand-logo">
  //         Logo
  //       </a>
  //       <ul id="nav-mobile" class="right hide-on-med-and-down">
  //         <li>
  //           <a href="sass.html">Sass</a>
  //         </li>
  //         <li>
  //           <a href="badges.html">Components</a>
  //         </li>
  //         <li>
  //           <a href="collapsible.html">JavaScript</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>;
};
