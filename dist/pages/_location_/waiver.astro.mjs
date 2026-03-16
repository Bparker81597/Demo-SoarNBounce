/* empty css                                         */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_sWjgxE-L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_D1c_zEE1.mjs';
import { W as WaiverSystem } from '../../chunks/WaiverSystem_f-f-t7Mg.mjs';
import { L as LOCATIONS } from '../../chunks/locations_jlE7fCMg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://Bparker81597.github.io");
function getStaticPaths() {
  return LOCATIONS.filter((loc) => loc.status === "open").map((loc) => ({
    params: { location: loc.slug },
    props: { locationConfig: loc }
  }));
}
const $$Waiver = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Waiver;
  const { locationConfig } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Sign Waiver | ${locationConfig.name}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WaiverSystem", WaiverSystem, { "location": locationConfig, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mymac/Demo-SoarNBounce/src/components/WaiverSystem", "client:component-export": "default" })} ` })}`;
}, "/Users/mymac/Demo-SoarNBounce/src/pages/[location]/waiver.astro", void 0);

const $$file = "/Users/mymac/Demo-SoarNBounce/src/pages/[location]/waiver.astro";
const $$url = "/Demo-SoarNBounce/[location]/waiver";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Waiver,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
