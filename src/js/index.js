import mobileNav from "./modules/mobile";
mobileNav();
import autoComplete from "@tarekraafat/autocomplete.js";
import tibetList from "./helpers/tibetList";

const autoCompleteJS = new autoComplete({
        selector: '#autoComplete',
        placeHolder: "Локации для тура",
        data: {
                src: tibetList,
        },
        resultItem: {
                highlight: true,
        },
        events: {
                input: {
                        selection: (event) => {
                                const selection = event.detail.selection.value;
                                autoCompleteJS.input.value = selection;
                        }
                }
        }
});

import { easepick } from '@easepick/bundle';
const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
          'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
        ],
      });

import scroll from "./modules/scroll";
scroll();
import searchForm from "./modules/search-form";
searchForm();
import closeForm from "./modules/closeForm";
closeForm();


