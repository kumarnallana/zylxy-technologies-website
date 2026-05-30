"use client";

import { leadGenData } from "@/data/leadGenData";
import { leadGenStyles } from "@/styles/sections/leadGen";
import { useState } from "react";

export default function LeadGenSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = () => {
    if (form.name && form.email) setSent(true);
  };

  const cleanPillText = leadGenData.header.pillText.replace(/^[-\s]+/, "");

  return (
    <section id="leadgen-section" className={leadGenStyles.section}>
      <div className={leadGenStyles.backgroundEffects} />
      <div className={leadGenStyles.wrapper}>
        <div className={leadGenStyles.headerContainer}>
          <div className={leadGenStyles.pillLine}>
            <div className={leadGenStyles.pillLineBar} />
            <span className={leadGenStyles.pillText}>{cleanPillText}</span>
          </div>
          <h2 className={leadGenStyles.mainHeading}>
            {leadGenData.header.mainHeading}
          </h2>
          <p className={leadGenStyles.subHeading}>
            {leadGenData.header.subHeading}
          </p>
        </div>

        {!sent ? (
          <div className={leadGenStyles.formCard}>
            <div className={leadGenStyles.grid}>
              <div>
                <label
                  className={
                    focused === "name"
                      ? leadGenStyles.labelFocused
                      : leadGenStyles.label
                  }
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="Your full name"
                  className={leadGenStyles.input}
                />
              </div>

              <div>
                <label
                  className={
                    focused === "email"
                      ? leadGenStyles.labelFocused
                      : leadGenStyles.label
                  }
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="you@company.com"
                  className={leadGenStyles.input}
                />
              </div>

              <div>
                <label
                  className={
                    focused === "phone"
                      ? leadGenStyles.labelFocused
                      : leadGenStyles.label
                  }
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  placeholder="+91 _____ _____"
                  className={leadGenStyles.input}
                />
              </div>

              <div>
                <label
                  className={
                    focused === "service"
                      ? leadGenStyles.labelFocused
                      : leadGenStyles.label
                  }
                >
                  Service Needed
                </label>
                <select
                  value={form.service}
                  onChange={(e) => set("service", e.target.value)}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused(null)}
                  className={leadGenStyles.select}
                  style={{
                    color: form.service ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                  }}
                >
                  <option value="" className="bg-[#050E21] text-white">
                    Select a service...
                  </option>
                  {leadGenData.services.map((o) => (
                    <option
                      key={o}
                      value={o}
                      className="bg-[#050E21] text-white"
                    >
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={leadGenStyles.fullWidthField}>
              <label
                className={
                  focused === "message"
                    ? leadGenStyles.labelFocused
                    : leadGenStyles.label
                }
              >
                Tell us about your project
              </label>
              <textarea
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder="Describe your project, goals, or questions..."
                className={leadGenStyles.textarea}
              />
            </div>

            <div className={leadGenStyles.footerRow}>
              <div className={leadGenStyles.checkmarksRow}>
                {leadGenData.features.map((feature) => (
                  <div key={feature} className={leadGenStyles.checkItem}>
                    <span className={leadGenStyles.checkIcon}>✓</span>
                    <span className={leadGenStyles.checkText}>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className={leadGenStyles.submitBtn}
              >
                Send My Request →
              </button>
            </div>
          </div>
        ) : (
          <div className={leadGenStyles.successCard}>
            <div className={leadGenStyles.successIcon}>✉️</div>
            <h3 className={leadGenStyles.successTitle}>
              We've received your request.
            </h3>
            <p className={leadGenStyles.successText}>
              Thank you, {form.name}. Our team will reach out to {form.email}{" "}
              within 24 hours.
            </p>
          </div>
        )}

        <div className={leadGenStyles.contactRow}>
          {leadGenData.contacts.map((contact) => (
            <div key={contact.label} className={leadGenStyles.contactItem}>
              <span className={leadGenStyles.contactIcon}>{contact.icon}</span>
              <div>
                <div className={leadGenStyles.contactLabel}>
                  {contact.label}
                </div>
                <div className={leadGenStyles.contactValue}>
                  {contact.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
