import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


const language = navigator.language || navigator.userLanguage;


let locale = "en";
let messages = localeEnMessages;

if (language.startsWith("es")) {
  locale = "es";
  messages = localeEsMessages;
}

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
