import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. Shailesh will respond shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="section-spacing">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="label-text mb-3">Get in Touch</p>
            <h1 className="heading-display mb-6">Contact</h1>
            <p className="body-text mb-10">
              For enquiries about original artworks, commissions, workshops, or exhibitions —
              please reach out using the form or the details below.
            </p>

            <div className="space-y-6">
              <div>
                <p className="label-text mb-1">Email</p>
                <a href="mailto:shaileshmesh@gmail.com" className="body-text underline hover:text-foreground transition-colors">shaileshmesh@gmail.com</a>
              </div>
              <div>
                <p className="label-text mb-1">Instagram</p>
                <a href="https://www.instagram.com/shaileshmesh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="body-text underline hover:text-foreground transition-colors">@shaileshmeshram.art</a>
              </div>
              <div>
              <p className="label-text mb-1">Facebook</p>
              <a href="http://facebook.com/shailesh.meshram.12/" 
                className="body-text underline hover:text-foreground transition-colors" 
                target="_blank" 
                rel="noopener noreferrer">
                facebook.com/shaileshmesh
              </a>
            </div>
            <div>
              <p className="label-text mb-1">YouTube</p>
              <a href="https://www.youtube.com/@ArtistShaileshMeshram"
                className="body-text underline hover:text-foreground transition-colors" 
                target="_blank" 
                rel="noopener noreferrer">
                youtube.com/@shaileshmesh
              </a>
            </div>
              <div>
                <p className="label-text mb-1">Based in</p>
                <p className="body-text">Mumbai / Pune, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="label-text block mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label className="label-text block mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label className="label-text block mb-2">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label className="label-text block mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-primary">Send Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
