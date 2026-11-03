"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not send enquiry.");
      setStatus("success");
      setMessage("Your enquiry was received. The firm will respond when appropriate.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The enquiry could not be sent.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row"><label>Full name <span>*</span><input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Your name" /></label><label>Work email <span>*</span><input name="email" type="email" required maxLength={200} autoComplete="email" placeholder="you@organisation.com" /></label></div>
      <label>Organisation<input name="organisation" maxLength={150} autoComplete="organization" placeholder="Company or institution (optional)" /></label>
      <label>Area of interest <span>*</span><select name="subject" required defaultValue=""><option value="" disabled>Select an enquiry type</option><option value="Retail research">Retail research</option><option value="Institutional research">Institutional research</option><option value="Strategy roadmap">Strategy roadmap</option><option value="Partnership">Partnership</option><option value="General enquiry">General enquiry</option></select></label>
      <label>Message <span>*</span><textarea name="message" required minLength={15} maxLength={5000} rows={6} placeholder="Tell us about the question, market or decision you are working on..." /></label>
      <div className="honey" aria-hidden="true"><label>Leave this field blank<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <p className="form-privacy">By submitting, you acknowledge that your information will be used to respond to your enquiry. See our <a href="/legal#privacy">privacy information</a>.</p>
      <button className="btn btn-navy form-submit" disabled={status === "loading"} type="submit">{status === "loading" ? "Sending…" : "Send enquiry"}<span>↗</span></button>
      {message && <p className={status === "success" ? "form-message is-success" : "form-message is-error"} role="status">{message}</p>}
    </form>
  );
}


