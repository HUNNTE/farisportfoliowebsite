/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Experience } from './components/Experience.tsx';
import { Projects } from './components/Projects.tsx';
import { CertificationsSkills } from './components/CertificationsSkills.tsx';
import { Contact } from './components/Contact.tsx';
import { Awards } from './components/Awards.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { CodeModal } from './components/CodeModal.tsx';
import { Toast } from './components/Toast.tsx';

export default function App() {
  const [notification, setNotification] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCodeOpen, setIsCodeOpen] = useState(false);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((current) => (current === msg ? null : current));
    }, 3500);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-[#111111] antialiased selection:bg-black selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenCodeModal={() => setIsCodeOpen(true)} />

      {/* Main Content Area */}
      <main className="relative">
        <Hero onOpenResumeModal={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Projects onShowNotification={showNotification} />
        <CertificationsSkills onShowNotification={showNotification} />
        <Contact onShowNotification={showNotification} />
        <Awards onShowNotification={showNotification} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowNotification={showNotification}
      />

      <CodeModal
        isOpen={isCodeOpen}
        onClose={() => setIsCodeOpen(false)}
        onShowNotification={showNotification}
      />

      {/* Notification Toast */}
      <Toast message={notification} onClose={() => setNotification(null)} />
    </div>
  );
}
