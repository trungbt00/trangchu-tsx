import "../../styles/style.css";
import "../../styles/Liên hệ/Contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { i18n } = useTranslation();

  return (
    <section className="contact-container">
      <div className="container">
        <h2 className="lien-he">{i18n.t("contact")}:</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>
                    {i18n.t("name")} <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={i18n.t("enter-your-name")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    {i18n.t("phone")} <span>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder={i18n.t("enter-your-phone")}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  placeholder={i18n.t("enter-your-email")}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  {i18n.t("message")} <span>*</span>
                </label>
                <textarea
                  placeholder={i18n.t("enter-your-message")}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn"
                style={{ "text-transform": "uppercase" }}
              >
                {i18n.t("send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
