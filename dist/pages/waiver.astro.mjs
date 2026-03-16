/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_sWjgxE-L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D1c_zEE1.mjs';
import { W as WaiverSystem } from '../chunks/WaiverSystem_f-f-t7Mg.mjs';
export { renderers } from '../renderers.mjs';

const $$Waiver = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Online Waiver | Soar N Bounce Grandville" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative overflow-hidden"> <!-- Decorative background blobs --> <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 z-0"></div> <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3 z-0"></div> <div class="relative z-10"> ${renderComponent($$result2, "WaiverSystem", WaiverSystem, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mymac/Demo-SoarNBounce/src/components/WaiverSystem", "client:component-export": "default" })} </div> </div> ` })}`;
}, "/Users/mymac/Demo-SoarNBounce/src/pages/waiver.astro", void 0);

const $$file = "/Users/mymac/Demo-SoarNBounce/src/pages/waiver.astro";
const $$url = "/Demo-SoarNBounce/waiver";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Waiver,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
