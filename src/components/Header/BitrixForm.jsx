import React from "react";
import PropTypes from 'prop-types';

export default function BitrixForm({ onClose }) {
  return (
    <div className="b24-window-panel b24-window-panel-pos-right">
      <button
        type="button"
        className="b24-window-close"
        style={{ zIndex: 220 }}
        onClick={onClose} // Закрытие формы при клике на кнопку
      ></button>
      <div>
        <div
          className="b24-window-scrollable"
          style={{ zIndex: 200 }}
          data-scroll-lock-scrollable=""
        >
          <div className="b24-window-scroll-anchor"></div>
          <div className="b24-form-wrapper">
            <div className="b24-form-header b24-form-padding-side">
              <div className="b24-form-header-title">
                Anmeldung bei der Großhandelsabteilung
              </div>
            </div>
            <div className="b24-form-content b24-form-padding-side">
              <form method="post" noValidate>
                <div>
                  <div className="b24-form-field b24-form-field-name b24-form-control-string">
                    <div>
                      <div>
                        <div className="b24-form-control-container b24-form-control-icon-after">
                          <input
                            name="name"
                            autoComplete="given-name"
                            type="string"
                            className="b24-form-control"
                          />
                          <div className="b24-form-control-label">
                            Name
                            <span className="b24-form-control-required">*</span>
                          </div>
                          <div
                            className="b24-form-control-alert-message"
                            style={{ display: "none" }}
                          >
                            Feld ist erforderlich
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="b24-form-field b24-form-field-phone b24-form-control-string">
                    <div>
                      <div>
                        <div className="b24-form-control-container b24-form-control-icon-after">
                          <input
                            name="phone"
                            autoComplete="tel"
                            type="tel"
                            className="b24-form-control"
                          />
                          <div className="b24-form-control-label">
                            Telefon
                            <span className="b24-form-control-required">*</span>
                          </div>
                          <div
                            className="b24-form-control-alert-message"
                            style={{ display: "none" }}
                          >
                            Feld ist erforderlich
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="b24-form-field b24-form-field-email b24-form-control-string">
                    <div>
                      <div>
                        <div className="b24-form-control-container b24-form-control-icon-after">
                          <input
                            name="email"
                            autoComplete="email"
                            type="email"
                            className="b24-form-control"
                          />
                          <div className="b24-form-control-label">
                            E-mail
                            <span className="b24-form-control-required">*</span>
                          </div>
                          <div
                            className="b24-form-control-alert-message"
                            style={{ display: "none" }}
                          >
                            Feld ist erforderlich
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="b24-form-field b24-form-field-text b24-form-control-text">
                    <div>
                      <div>
                        <div className="b24-form-control-container b24-form-control-icon-after">
                          <textarea className="b24-form-control"></textarea>
                          <div className="b24-form-control-label">
                          Der Gepäckraum, für den Sie sich interessieren
                            <span className="b24-form-control-required">*</span>
                          </div>
                          <div
                            className="b24-form-control-alert-message"
                            style={{ display: "none" }}
                          >
                            Feld ist erforderlich
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="b24-form-field b24-form-field-agreement b24-form-control-agreement">
                    <div>
                      <label className="b24-form-control-container">
                        <input type="checkbox" onClick={(e) => e.target.blur()} />
                        <span className="b24-form-control-desc">
                          <span className="b24-form-field-agreement-link">
                            Durch Anklicken der Schaltfläche akzeptiere ich die
                            Bedingungen der Vereinbarung.
                          </span>
                        </span>
                        <span
                          className="b24-form-control-required"
                          style={{ display: "none" }}
                        >
                          *
                        </span>
                        <div
                          className="b24-form-control-alert-message"
                          style={{ display: "none" }}
                        ></div>
                      </label>
                    </div>
                  </div>
                  <div className="v-portal" style={{ display: "none" }}></div>
                </div>
                <div className="b24-form-btn-container">
                  <div className="b24-form-btn-block">
                    <button  className="b24-form-btn" disabled>
                      Schicken
                    </button>
                  </div>
                </div>
                <span style={{ color: "red", display: "none" }}>
                  Debug: fill fields
                </span>
              </form>
            </div>
            <div className="b24-form-state-container b24-form-state--sticky">
              <div className="b24-form-loader" style={{ display: "none" }}>
                <div className="b24-form-loader-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 263 174"
                  >
                    {/* SVG содержимое */}
                  </svg>
                </div>
              </div>
              <div
                className="b24-form-state b24-form-success"
                style={{ display: "none" }}
              >
                <div className="b24-form-state-inner">
                  <div className="b24-form-state-icon b24-form-success-icon"></div>
                  <div className="b24-form-state-text">
                    <p>Anfrage wurde gesendet.</p>
                    <p></p>
                  </div>
                </div>
                <div className="b24-form-inner-box"></div>
              </div>
              <div
                className="b24-form-state b24-form-error"
                style={{ display: "none" }}
              >
                <div className="b24-form-state-inner">
                  <div className="b24-form-state-icon b24-form-error-icon"></div>
                  <div className="b24-form-state-text">
                    <p></p>
                  </div>
                  <button className="b24-form-btn b24-form-btn-border b24-form-btn-tight">
                    Erneut senden
                  </button>
                </div>
                <div className="b24-form-inner-box"></div>
              </div>
              <div
                className="b24-form-state b24-form-warning"
                style={{ display: "none" }}
              >
                <div className="b24-form-state-inner">
                  <div className="b24-form-state-icon b24-form-warning-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 169 169"
                    >
                      {/* SVG содержимое */}
                    </svg>
                  </div>
                  <div className="b24-form-state-text">
                    <p>Das Formular ist deaktiviert.</p>
                  </div>
                </div>
                <div className="b24-form-inner-box"></div>
              </div>
            </div>
            <div className="b24-form-sign">
              <select style={{ display: "none" }}>
                <option value="ja">ja</option>
                <option value="tr">tr</option>
                <option value="de">de</option>
                <option value="ar">ar</option>
                <option value="in">in</option>
                <option value="sc">sc</option>
                <option value="th">th</option>
                <option value="kz">kz</option>
                <option value="tc">tc</option>
                <option value="ua">ua</option>
                <option value="ru">ru</option>
                <option value="ms">ms</option>
                <option value="it">it</option>
                <option value="pl">pl</option>
                <option value="id">id</option>
                <option value="vn">vn</option>
                <option value="hi">hi</option>
                <option value="en">en</option>
                <option value="fr">fr</option>
                <option value="la">la</option>
                <option value="br">br</option>
              </select>
              <div>
                <span className="b24-form-sign-abuse">
                  <a
                    href="https://www.bitrix24.ru/abuse/?b24_form_id=27&amp;b24_address=https%3A%2F%2Fbmglobal.bitrix24.ru&amp;b24_form_address=https%3A%2F%2Fonkron.de%2F"
                    target="_blank"
                    rel="nofollow"
                    className="b24-form-sign-abuse-link"
                  >
                    Verstoß melden
                  </a>
                  <span
                    title="Bitrix24 übernimmt keine Verantwortung für die Inhalte dieses Formulars, aber einen Verstoß können Sie jederzeit melden."
                    className="b24-form-sign-abuse-help"
                  ></span>
                </span>
                <div>
                  <div className="b24-window">
                    <div
                      className="b24-window-overlay"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="b24-window-popup b24-window-popup-p-center"
                      style={{ display: "none" }}
                    >
                      <div className="b24-window-popup-wrapper">
                        <button
                          type="button"
                          className="b24-window-close"
                          style={{ zIndex: 220 }}
                        ></button>
                        <div>
                          <div
                            className="b24-window-scrollable"
                            style={{ zIndex: 200 }}
                          >
                            <div
                              className="b24-window-scroll-anchor"
                              style={{ display: "none" }}
                            ></div>
                            <div className="b24-window-popup-head">
                              <div className="b24-window-popup-title">
                                Verstoß melden
                              </div>
                            </div>
                            <div className="b24-window-popup-body">
                              <div className="b24-form-sign-abuse-popup">
                                Bitrix24 übernimmt keine Verantwortung für die
                                Inhalte dieses Formulars, aber einen Verstoß
                                können Sie jederzeit melden.
                              </div>
                            </div>
                            <div
                              className="b24-window-scroll-anchor"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="b24-window-scroll-anchor"></div>
        </div>
      </div>
    </div>
  );
}

BitrixForm.propTypes = {
    onClose: PropTypes.func.isRequired, // Проверяем, что onClose — это функция и она обязательна
  };